import { motion } from 'framer-motion';

export default function QuestionCard({ question, selectedValue, onAnswer, disabled = false }) {
  return (
    <motion.section
      className="question-card"
      initial={{ opacity: 0, y: 14, scale: 0.992 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.995 }}
      transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <p className="question-label">Question</p>
      <h2>{question.title}</h2>
      {question.subtitle ? <p className="question-subtitle">{question.subtitle}</p> : null}

      <div className="answer-grid" role="group" aria-label={question.title}>
        {question.options.map((option) => {
          const selected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              type="button"
              className={`answer-btn ${selected ? 'selected' : ''}`}
              disabled={disabled}
              onClick={() => onAnswer(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </motion.section>
  );
}
