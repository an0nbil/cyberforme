import { motion } from 'framer-motion';

function ResultItem({ item, index }) {
  return (
    <motion.article
      className="result-item"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="result-head">
        <h3>{index + 1}. {item.name}</h3>
        <strong>{item.percent}%</strong>
      </div>
      <div className="match-track">
        <motion.div
          className="match-fill"
          initial={{ width: 0 }}
          animate={{ width: `${item.percent}%` }}
          transition={{ duration: 0.35, delay: 0.12 + index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>
      <p className="result-focus">{item.focus}</p>
      <p>{item.rationale}</p>

      <div className="path-block">
        <p><span>Skills Needed:</span> {item.learningPath.skills.join(', ')}</p>
        <p><span>Projects:</span> {item.learningPath.projects.join(', ')}</p>
        <p><span>Books/Courses:</span> {item.learningPath.booksCourses.join(', ')}</p>
      </div>
    </motion.article>
  );
}

export default function ResultsView({ resultData, onRestart, onRevisit }) {
  const { topThree, lowConfidence, explorationTracks } = resultData;

  return (
    <motion.section
      className="results"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.28 }}
    >
      <div className="results-header">
        <h2>Recommended Cybersecurity Fields</h2>
        <p>Ranked by weighted personality, skills, work style, and preferences.</p>
      </div>

      {lowConfidence ? (
        <div className="exploration-note">
          <p>Confidence is low for a single field. Start with these exploration tracks first:</p>
          <ul>
            {explorationTracks.map((track) => (
              <li key={track.name}>
                <strong>{track.name}:</strong> {track.rationale}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="results-list">
        {topThree.map((item, index) => (
          <ResultItem key={item.id} item={item} index={index} />
        ))}
      </div>

      <div className="results-actions">
        <button type="button" onClick={onRevisit}>Back to questions</button>
        <button type="button" onClick={onRestart}>Restart assessment</button>
      </div>
      <p className="ethics-note">This advisor supports legal and ethical cybersecurity careers only.</p>
    </motion.section>
  );
}
