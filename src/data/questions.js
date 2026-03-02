export const CORE_FLOW = [
  'q1',
  'q2',
  'q3',
  'q4',
  'q5',
  'q6',
  'q7',
  'q8',
  'q9',
  'q10',
  'q11',
  'q12',
  'q13',
  'q14',
  'q15',
];

export const FOLLOW_UPS = {
  q1: {
    id: 'q1_1',
    when: (answers) => Number(answers.q1?.value) >= 4 && answers.q4?.value === 'puzzles',
  },
  q3: {
    id: 'q3_1',
    when: (answers) => Number(answers.q3?.value) >= 4,
  },
  q8: {
    id: 'q8_1',
    when: (answers) => Number(answers.q8?.value) >= 4,
  },
  q10: {
    id: 'q10_1',
    when: (answers) => answers.q10?.value === 'offense',
  },
  q10_def: {
    id: 'q10_2',
    when: (answers) => answers.q10?.value === 'defense',
    parent: 'q10',
  },
  q11: {
    id: 'q11_1',
    when: (answers) => Number(answers.q11?.value) >= 4,
  },
};

const scaleChoices = [1, 2, 3, 4, 5].map((n) => ({
  value: n,
  label: String(n),
}));

export const QUESTIONS = {
  q1: {
    id: 'q1',
    type: 'scale',
    title: 'How comfortable are you with coding?',
    subtitle: '1 = none, 5 = daily development',
    options: scaleChoices,
    toTags: {
      1: { PROCESS: 1 },
      2: { PROCESS: 1, QA: 1 },
      3: { CODE: 1, DEBUG: 1 },
      4: { CODE: 2, DEBUG: 2, AUTOMATION: 1 },
      5: { CODE: 3, DEBUG: 2, AUTOMATION: 2 },
    },
  },
  q2: {
    id: 'q2',
    type: 'scale',
    title: 'How strong are your debugging skills?',
    subtitle: '1 = none, 5 = expert debugger',
    options: scaleChoices,
    toTags: {
      1: { PROCESS: 1 },
      2: { QA: 1 },
      3: { DEBUG: 2, ANALYTICAL: 1 },
      4: { DEBUG: 3, ANALYTICAL: 2 },
      5: { DEBUG: 4, ANALYTICAL: 3, REVERSE: 1 },
    },
  },
  q3: {
    id: 'q3',
    type: 'scale',
    title: 'How much hardware or firmware interest do you have?',
    subtitle: '1 = none, 5 = obsessed',
    options: scaleChoices,
    toTags: {
      1: { CLOUD: 1 },
      2: { ONPREM: 1 },
      3: { HARDWARE: 1, FIRMWARE: 1 },
      4: { HARDWARE: 2, FIRMWARE: 2, EMBEDDED: 2 },
      5: { HARDWARE: 3, FIRMWARE: 3, EMBEDDED: 3, IOT: 2 },
    },
  },
  q4: {
    id: 'q4',
    type: 'single',
    title: 'Do you prefer puzzles and deep analysis or process and procedures?',
    options: [
      { value: 'puzzles', label: 'Puzzles and deep analysis' },
      { value: 'process', label: 'Process and procedures' },
    ],
    toTags: {
      puzzles: { ANALYTICAL: 2, RESEARCH: 2, PUZZLES: 2 },
      process: { PROCESS: 3, GRC: 1 },
    },
  },
  q5: {
    id: 'q5',
    type: 'single',
    title: 'Do you enjoy open-ended research or fixed-scope tasks?',
    options: [
      { value: 'open', label: 'Open-ended research' },
      { value: 'fixed', label: 'Fixed-scope tasks' },
    ],
    toTags: {
      open: { RESEARCH: 3, OSINT: 1 },
      fixed: { PROCESS: 2, QA: 2 },
    },
  },
  q6: {
    id: 'q6',
    type: 'single',
    title: 'Do you prefer solo deep work or team-driven work?',
    options: [
      { value: 'solo', label: 'Solo deep work' },
      { value: 'team', label: 'Team-driven work' },
      { value: 'mix', label: 'Mix of both' },
    ],
    toTags: {
      solo: { SOLO: 3 },
      team: { TEAM: 3, COLLAB: 1 },
      mix: { SOLO: 1, TEAM: 1, COLLAB: 1 },
    },
  },
  q7: {
    id: 'q7',
    type: 'single',
    title: 'Do you like public-facing roles (presentations or client work)?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    toTags: {
      yes: { CLIENT: 2, PRESENTATION: 2, PEOPLE: 1 },
      no: { SOLO: 1, ANALYTICAL: 1 },
    },
  },
  q8: {
    id: 'q8',
    type: 'scale',
    title: 'Are you okay with on-call rotation and stressful incidents?',
    subtitle: '1 = no, 5 = yes',
    options: scaleChoices,
    toTags: {
      1: { PROCESS: 1 },
      2: { PROCESS: 1 },
      3: { BLUETEAM: 1, IR: 1 },
      4: { ONCALL: 2, HIGHSTRESS: 2, IR: 1 },
      5: { ONCALL: 3, HIGHSTRESS: 3, IR: 2 },
    },
  },
  q9: {
    id: 'q9',
    type: 'single',
    title: 'Do you want high steady income now or growth and learning first?',
    options: [
      { value: 'steady', label: 'High steady income now' },
      { value: 'growth', label: 'Growth and learning first' },
    ],
    toTags: {
      steady: { ENTERPRISE: 2, PROCESS: 1, FINANCE: 1 },
      growth: { STARTUP: 2, RESEARCH: 1, PRODUCT: 1 },
    },
  },
  q10: {
    id: 'q10',
    type: 'single',
    title: 'Do you prefer offensive work, defensive work, or neither?',
    options: [
      { value: 'offense', label: 'Offensive' },
      { value: 'defense', label: 'Defensive' },
      { value: 'other', label: 'Neither / other' },
    ],
    toTags: {
      offense: { OFFENSE: 4, REDTEAM: 2 },
      defense: { DEFENSE: 4, BLUETEAM: 2 },
      other: { GRC: 1, PRODUCT: 1 },
    },
  },
  q11: {
    id: 'q11',
    type: 'scale',
    title: 'How much legal or compliance interest do you have?',
    subtitle: '1 = none, 5 = regulatory expert',
    options: scaleChoices,
    toTags: {
      1: { RESEARCH: 1 },
      2: { PROCESS: 1 },
      3: { LEGAL: 1, GRC: 1 },
      4: { LEGAL: 2, GRC: 2, PRIVACY: 1 },
      5: { LEGAL: 3, GRC: 3, PRIVACY: 2, POLICY: 1 },
    },
  },
  q12: {
    id: 'q12',
    type: 'single',
    title: 'Cloud or on-prem or both?',
    options: [
      { value: 'cloud', label: 'Cloud' },
      { value: 'onprem', label: 'On-prem' },
      { value: 'both', label: 'Both' },
    ],
    toTags: {
      cloud: { CLOUD: 3, IAAS: 2, PAAS: 1, SAAS: 1 },
      onprem: { ONPREM: 3, NETWORK: 1 },
      both: { CLOUD: 2, ONPREM: 2, HYBRID: 1 },
    },
  },
  q13: {
    id: 'q13',
    type: 'single',
    title: 'Do you prefer shifting fast (startup) or structured organizations?',
    options: [
      { value: 'startup', label: 'Startup' },
      { value: 'enterprise', label: 'Enterprise / government' },
    ],
    toTags: {
      startup: { STARTUP: 3, PRODUCT: 2 },
      enterprise: { ENTERPRISE: 3, GOVERNMENT: 1, GRC: 1 },
    },
  },
  q14: {
    id: 'q14',
    type: 'single',
    title: 'Do you want to disrupt attackers, help victims, or build safer systems?',
    options: [
      { value: 'attackers', label: 'Disrupt attackers' },
      { value: 'victims', label: 'Help victims' },
      { value: 'systems', label: 'Build safer systems' },
    ],
    toTags: {
      attackers: { OFFENSE: 2, THREAT_INTEL: 1, REDTEAM: 1 },
      victims: { IR: 2, FORENSICS: 2, CLIENT: 1 },
      systems: { SYSTEMS: 2, DEFENSE: 1, ARCHITECTURE: 1 },
    },
  },
  q15: {
    id: 'q15',
    type: 'scale',
    title: 'How important is ethics and lawful work?',
    subtitle: '1 = low, 5 = mandatory',
    options: scaleChoices,
    toTags: {
      1: { OFFENSE: 1 },
      2: { OFFENSE: 1, ETHICS: 1 },
      3: { ETHICS: 2, LEGAL: 1 },
      4: { ETHICS: 3, LEGAL: 2 },
      5: { ETHICS: 4, LEGAL: 3, PRIVACY: 1 },
    },
  },
  q1_1: {
    id: 'q1_1',
    type: 'single',
    title: 'Favorite language family?',
    options: [
      { value: 'c_cpp', label: 'C / C++' },
      { value: 'python', label: 'Python' },
      { value: 'js', label: 'JavaScript / TypeScript' },
      { value: 'rust', label: 'Rust' },
      { value: 'go', label: 'Go' },
    ],
    toTags: {
      c_cpp: { C: 2, CPLUSPLUS: 2, REVERSE: 1 },
      python: { PYTHON: 3, AUTOMATION: 1, RESEARCH: 1 },
      js: { WEB: 2, API: 1, CODE: 1 },
      rust: { RUST: 3, SYSTEMS: 1, RESEARCH: 1 },
      go: { GO: 3, CLOUD: 1, DEVOPS: 1 },
    },
  },
  q3_1: {
    id: 'q3_1',
    type: 'single',
    title: 'Do you have soldering or embedded experience?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
    toTags: {
      yes: { SOLDER: 3, EMBEDDED: 2, HARDWARE: 1 },
      no: { FIRMWARE: 1, REVERSE: 1 },
    },
  },
  q8_1: {
    id: 'q8_1',
    type: 'single',
    title: 'How many hours per week on-call are acceptable?',
    options: [
      { value: '0', label: '0 hours' },
      { value: '1_5', label: '1-5 hours' },
      { value: '6_15', label: '6-15 hours' },
      { value: '15_plus', label: '15+ hours' },
    ],
    toTags: {
      '0': { PROCESS: 1 },
      '1_5': { ONCALL: 1 },
      '6_15': { ONCALL: 2, HIGHSTRESS: 1 },
      '15_plus': { ONCALL: 3, HIGHSTRESS: 2, IR: 1 },
    },
  },
  q10_1: {
    id: 'q10_1',
    type: 'single',
    title: 'For offense, what sounds best?',
    options: [
      { value: 'infra', label: 'Red team infrastructure' },
      { value: 'exploit', label: 'Exploit development' },
      { value: 'social', label: 'Social engineering' },
    ],
    toTags: {
      infra: { REDTEAM: 3, INFRASTRUCTURE: 2, CLOUD: 1 },
      exploit: { EXPLOIT: 3, REVERSE: 2, OFFENSE: 1 },
      social: { SOCIAL: 3, PHYSICAL: 1, CLIENT: 1 },
    },
  },
  q10_2: {
    id: 'q10_2',
    type: 'single',
    title: 'For defense, what sounds best?',
    options: [
      { value: 'monitoring', label: 'Monitoring and threat hunting' },
      { value: 'ir', label: 'Incident response' },
      { value: 'policy', label: 'Policy and compliance' },
    ],
    toTags: {
      monitoring: { MONITORING: 3, THREAT_INTEL: 1, BLUETEAM: 2 },
      ir: { IR: 3, FORENSICS: 1, ONCALL: 1 },
      policy: { POLICY: 3, GRC: 2, LEGAL: 1 },
    },
  },
  q11_1: {
    id: 'q11_1',
    type: 'single',
    title: 'Do you prefer policy writing or audit operations?',
    options: [
      { value: 'policy', label: 'Policy writing' },
      { value: 'audit', label: 'Audit operations' },
    ],
    toTags: {
      policy: { POLICY: 3, WRITING: 1, GRC: 1 },
      audit: { AUDIT: 3, GRC: 2, LEGAL: 1 },
    },
  },
};

export function getQuestionById(id) {
  return QUESTIONS[id] || null;
}

export function getAnswerTags(questionId, value) {
  const question = QUESTIONS[questionId];
  if (!question || !question.toTags) {
    return {};
  }
  return question.toTags[value] || {};
}

function nextCoreQuestion(currentId, answers) {
  const currentIndex = CORE_FLOW.indexOf(currentId);
  for (let i = currentIndex + 1; i < CORE_FLOW.length; i += 1) {
    const qid = CORE_FLOW[i];
    if (!answers[qid]) {
      return qid;
    }
  }
  return null;
}

export function getNextQuestionId(currentId, answers) {
  const q10DefenseBranch = FOLLOW_UPS.q10_def;

  if (currentId === 'q10' && q10DefenseBranch.when(answers) && !answers[q10DefenseBranch.id]) {
    return q10DefenseBranch.id;
  }

  const branch = FOLLOW_UPS[currentId];
  if (branch && branch.when(answers) && !answers[branch.id]) {
    return branch.id;
  }

  if (currentId.includes('_')) {
    const parent = currentId.split('_')[0];
    return nextCoreQuestion(parent, answers);
  }

  return nextCoreQuestion(currentId, answers);
}
