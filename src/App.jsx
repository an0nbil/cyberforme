import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import ResultsView from './components/ResultsView';
import LoadingState from './components/LoadingState';
import { CORE_FLOW, FOLLOW_UPS, getNextQuestionId, getQuestionById } from './data/questions';
import { scoreFields } from './engine/scoring';

const START_QUESTION = CORE_FLOW[0];

function estimateTotal(answers) {
  let total = CORE_FLOW.length;

  const checks = [FOLLOW_UPS.q1, FOLLOW_UPS.q3, FOLLOW_UPS.q8, FOLLOW_UPS.q11];
  checks.forEach((branch) => {
    if (branch.when(answers) || !answers[branch.id]) {
      total += 1;
    }
  });

  if (!answers.q10) {
    total += 1;
  } else if (answers.q10?.value === 'offense' || answers.q10?.value === 'defense') {
    total += 1;
  }

  return total;
}

export default function App() {
  const [theme, setTheme] = useState('dark');
  const [currentQuestionId, setCurrentQuestionId] = useState(START_QUESTION);
  const [answers, setAnswers] = useState({});
  const [history, setHistory] = useState([START_QUESTION]);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [resultData, setResultData] = useState(null);
  const advanceSafetyTimer = useRef(null);
  const transitionLockRef = useRef(false);

  const question = getQuestionById(currentQuestionId);
  const answeredCount = Object.keys(answers).length;
  const progressTotal = useMemo(() => estimateTotal(answers), [answers]);

  const canGoBack = history.length > 1;

  useEffect(() => {
    if (!isAdvancing) return;
    if (advanceSafetyTimer.current) {
      window.clearTimeout(advanceSafetyTimer.current);
    }
    advanceSafetyTimer.current = window.setTimeout(() => {
      transitionLockRef.current = false;
      setIsAdvancing(false);
    }, 1200);
    return () => {
      if (advanceSafetyTimer.current) {
        window.clearTimeout(advanceSafetyTimer.current);
      }
    };
  }, [isAdvancing]);

  useEffect(() => {
    transitionLockRef.current = false;
    setIsAdvancing(false);
  }, [currentQuestionId, isCalculating, resultData]);

  function goToResults(nextAnswers) {
    setIsCalculating(true);
    window.setTimeout(() => {
      try {
        setResultData(scoreFields(nextAnswers));
      } catch (error) {
        console.error('Scoring failed', error);
        setResultData({
          topThree: [],
          lowConfidence: true,
          explorationTracks: [
            {
              name: 'Exploration Track',
              rationale: 'A calculation issue occurred. Restart and try again with a full set of answers.',
            },
          ],
        });
      } finally {
        setIsCalculating(false);
        setIsAdvancing(false);
      }
    }, 450);
  }

  function handleAnswer(value) {
    if (isAdvancing || isCalculating || transitionLockRef.current) return;
    transitionLockRef.current = true;
    setIsAdvancing(true);

    try {
      const currentHistoryIndex = history.lastIndexOf(currentQuestionId);
      const trimmedHistory = history.slice(0, currentHistoryIndex + 1);
      const preservedIds = new Set(trimmedHistory);
      const baseAnswers = Object.fromEntries(
        Object.entries(answers).filter(([qid]) => preservedIds.has(qid) && qid !== currentQuestionId)
      );

      const nextAnswers = {
        ...baseAnswers,
        [currentQuestionId]: {
          value,
          at: Date.now(),
        },
      };

      setAnswers(nextAnswers);

      const nextId = getNextQuestionId(currentQuestionId, nextAnswers);

      if (!nextId) {
        goToResults(nextAnswers);
        return;
      }

      setCurrentQuestionId(nextId);
      setHistory([...trimmedHistory, nextId]);
    } catch (error) {
      console.error('Question flow failed', error);
      transitionLockRef.current = false;
      setIsAdvancing(false);
    }
  }

  function handleBack() {
    if (!canGoBack) return;
    transitionLockRef.current = false;
    const nextHistory = [...history];
    nextHistory.pop();
    const previous = nextHistory[nextHistory.length - 1];
    setHistory(nextHistory);
    setCurrentQuestionId(previous);
    setIsAdvancing(false);
  }

  function handleRestart() {
    transitionLockRef.current = false;
    setAnswers({});
    setCurrentQuestionId(START_QUESTION);
    setHistory([START_QUESTION]);
    setResultData(null);
    setIsCalculating(false);
    setIsAdvancing(false);
  }

  function handleRevisitQuestions() {
    transitionLockRef.current = false;
    setResultData(null);
    setCurrentQuestionId(history[history.length - 1] || START_QUESTION);
  }

  return (
    <div className={`app theme-${theme}`}>
      <div className="shell">
        <header className="topbar">
          <div>
            <p className="eyebrow">Adaptive Cyber Career Advisor</p>
            <h1>Find Your Best Cybersecurity Field</h1>
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
          >
            {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
          </button>
        </header>

        {!resultData ? (
          <ProgressBar current={Math.min(answeredCount + 1, progressTotal)} total={progressTotal} />
        ) : null}

        <main className="stage">
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => {
              transitionLockRef.current = false;
              setIsAdvancing(false);
            }}
          >
            {isCalculating ? <LoadingState key="loading" /> : null}

            {!isCalculating && !resultData && question ? (
              <QuestionCard
                key={question.id}
                question={question}
                selectedValue={answers[question.id]?.value}
                onAnswer={handleAnswer}
                disabled={isAdvancing}
              />
            ) : null}

            {!isCalculating && resultData ? (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ResultsView
                  resultData={resultData}
                  onRestart={handleRestart}
                  onRevisit={handleRevisitQuestions}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </main>

        {!resultData ? (
          <footer className="actions">
            <button type="button" onClick={handleBack} disabled={!canGoBack}>Back</button>
            <button type="button" onClick={handleRestart}>Restart</button>
          </footer>
        ) : null}
      </div>
      <Analytics />
    </div>
  );
}
