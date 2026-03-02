import { CYBER_FIELDS, FIELD_TAG_WEIGHTS } from '../data/fields.js';
import { getAnswerTags } from '../data/questions.js';
import { ROADMAPS_BY_ID } from '../data/roadmaps.js';

const EXPLORATION_THRESHOLD = 35;

function addWeights(target, source) {
  Object.entries(source).forEach(([tag, weight]) => {
    target[tag] = (target[tag] || 0) + weight;
  });
}

export function buildUserTagProfile(answers) {
  const tagProfile = {};
  Object.entries(answers).forEach(([questionId, payload]) => {
    const mappedTags = getAnswerTags(questionId, payload.value);
    addWeights(tagProfile, mappedTags);
  });
  return tagProfile;
}

function calcFieldRawScore(field, userTagProfile) {
  return field.tags.reduce((sum, tag) => {
    const userWeight = userTagProfile[tag] || 0;
    const fieldWeight = FIELD_TAG_WEIGHTS[tag] || 1;
    return sum + userWeight * fieldWeight;
  }, 0);
}

function calcLifestyleBonus(field, answers, userTagProfile) {
  let bonus = 0;

  const onCallComfort = Number(answers.q8?.value || 3);
  if (onCallComfort >= 4 && field.tags.includes('ONCALL')) {
    bonus += 0.8;
  }
  if (onCallComfort <= 2 && field.tags.includes('ONCALL')) {
    bonus -= 0.8;
  }

  const steadyVsGrowth = answers.q9?.value;
  if (steadyVsGrowth === 'steady' && (field.tags.includes('ENTERPRISE') || field.tags.includes('FINANCE'))) {
    bonus += 0.6;
  }
  if (steadyVsGrowth === 'growth' && (field.tags.includes('STARTUP') || field.tags.includes('RESEARCH'))) {
    bonus += 0.6;
  }

  const clientPref = answers.q7?.value;
  if (clientPref === 'yes' && field.tags.includes('CLIENT')) {
    bonus += 0.6;
  }
  if (clientPref === 'no' && field.tags.includes('CLIENT')) {
    bonus -= 0.4;
  }

  if ((userTagProfile.TEACH || 0) + (userTagProfile.PRESENTATION || 0) >= 3) {
    if (field.tags.includes('TEACH') || field.tags.includes('PRESENTATION') || field.tags.includes('WRITING')) {
      bonus += 0.8;
    }
  }

  return bonus;
}

function applyExplicitPreferenceBoost(field, answers) {
  let multiplier = 1;
  if (answers.q10?.value === 'offense' && field.tags.includes('OFFENSE')) {
    multiplier += 0.15;
  }
  if (answers.q10?.value === 'defense' && field.tags.includes('DEFENSE')) {
    multiplier += 0.15;
  }
  return multiplier;
}

function normalizeScores(scoredFields) {
  const maxScore = Math.max(...scoredFields.map((f) => f.rawScore), 1);
  return scoredFields.map((item) => ({
    ...item,
    percent: Math.round((item.rawScore / maxScore) * 100),
  }));
}

function createRationale(field, userTagProfile) {
  const matchedTags = field.tags
    .filter((tag) => userTagProfile[tag])
    .sort((a, b) => (userTagProfile[b] || 0) - (userTagProfile[a] || 0))
    .slice(0, 3);

  if (!matchedTags.length) {
    return 'Broad fit based on your mixed profile; try a small project in this track to validate interest.';
  }

  return `Strong overlap on ${matchedTags.join(', ').toLowerCase()}, which maps directly to this field's core work.`;
}

function deriveTopTags(field, userTagProfile) {
  return field.tags
    .filter((tag) => userTagProfile[tag])
    .sort((a, b) => (userTagProfile[b] || 0) - (userTagProfile[a] || 0))
    .slice(0, 4);
}

function mergeUnique(list) {
  return [...new Set(list)];
}

function buildLearningPath(field, userTagProfile) {
  const roadmap = ROADMAPS_BY_ID[field.id];
  if (roadmap) {
    return {
      skills: mergeUnique(roadmap.skills),
      projects: mergeUnique(roadmap.projects),
      booksCourses: mergeUnique(roadmap.booksCourses),
    };
  }

  const topTags = deriveTopTags(field, userTagProfile);
  const fallbackSkills = topTags.length
    ? topTags.map((tag) => `Practice one core workflow for ${tag.toLowerCase()} each week.`)
    : ['Build a weekly practice loop around one real workflow in this field.'];

  return {
    skills: mergeUnique(fallbackSkills).slice(0, 3),
    projects: [
      `Build a focused lab project aligned with ${field.name.toLowerCase()}.`,
      'Publish one portfolio artifact documenting your implementation and findings.',
    ],
    booksCourses: ['Choose two practical resources tied to this specialization and complete them in sequence.'],
  };
}

function getExplorationTracks(userTagProfile) {
  const candidates = [
    { name: 'Offensive Foundations Track', tags: ['OFFENSE', 'CODE', 'REVERSE'] },
    { name: 'Defensive Operations Track', tags: ['DEFENSE', 'ONCALL', 'PROCESS'] },
    { name: 'Cloud and DevSecOps Track', tags: ['CLOUD', 'DEVOPS', 'AUTOMATION'] },
    { name: 'Governance and Privacy Track', tags: ['LEGAL', 'GRC', 'PRIVACY'] },
  ];

  return candidates
    .map((track) => ({
      ...track,
      score: track.tags.reduce((sum, tag) => sum + (userTagProfile[tag] || 0), 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((track) => ({
      name: track.name,
      rationale: `Your profile is still broad. This track aligns with ${track.tags.join(', ').toLowerCase()}.`,
    }));
}

export function scoreFields(answers) {
  const userTagProfile = buildUserTagProfile(answers);

  const scoredFields = CYBER_FIELDS.map((field) => {
    const rawScore = calcFieldRawScore(field, userTagProfile);
    const normalizedRaw = rawScore / Math.max(field.tags.length, 1);
    const boosted = normalizedRaw * applyExplicitPreferenceBoost(field, answers);
    const lifestyle = calcLifestyleBonus(field, answers, userTagProfile);

    return {
      ...field,
      rawScore: Number((boosted + lifestyle).toFixed(4)),
    };
  });

  const normalized = normalizeScores(scoredFields)
    .sort((a, b) => b.rawScore - a.rawScore)
    .sort((a, b) => b.percent - a.percent)
    .sort((a, b) => {
      if (b.percent !== a.percent) return 0;
      return b.rawScore - a.rawScore;
    });

  const topThree = normalized.slice(0, 3).map((field) => ({
    ...field,
    rationale: createRationale(field, userTagProfile),
    learningPath: buildLearningPath(field, userTagProfile),
  }));

  const lowConfidence = (topThree[0]?.percent || 0) < EXPLORATION_THRESHOLD;

  return {
    userTagProfile,
    topThree,
    lowConfidence,
    explorationTracks: lowConfidence ? getExplorationTracks(userTagProfile) : [],
  };
}
