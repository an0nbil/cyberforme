import { motion } from 'framer-motion';

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export default function ProgressBar({ current, total }) {
  const safeTotal = Math.max(total, 1);
  const progress = clamp((current / safeTotal) * 100, 0, 100);

  return (
    <div className="progress-wrap" aria-label="Progress">
      <div className="progress-meta">
        <span>Progress</span>
        <span>{current}/{safeTotal}</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-fill"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
        />
      </div>
    </div>
  );
}
