# Get Into Cyber - Adaptive Career Advisor

A minimalist React web app that helps users discover cybersecurity fields that match their personality, experience, work style, and preferences.

## Highlights

- Single-question adaptive flow (one screen at a time)
- Conditional follow-up questions based on prior answers
- Weighted tag scoring engine for 120 cybersecurity fields
- Ranked top 3 recommendations with match percentages
- One-sentence rationale + 30-90 day learning path for each recommendation
- Low-confidence fallback to exploration tracks
- Fast, precise monochrome animations with Framer Motion
- Strict black/white/grey design only
- Typography: Space Grotesk (body/UI), Red Hat Display (headings)

## Tech

- React 18 + Vite
- Framer Motion for transitions/micro-interactions
- Modular architecture (`data`, `engine`, `components`)

## Project structure

```
getintocyber/
  index.html
  package.json
  vite.config.js
  README.md
  src/
    App.jsx
    main.jsx
    styles.css
    components/
      LoadingState.jsx
      ProgressBar.jsx
      QuestionCard.jsx
      ResultsView.jsx
    data/
      fields.js
      questions.js
    engine/
      scoring.js
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Notes

- All questions are required before results are generated.
- Dynamic branching is defined in `src/data/questions.js`.
- Scoring and recommendation logic is in `src/engine/scoring.js`.
- Field catalog (120 roles) is in `src/data/fields.js`.
- The app intentionally avoids any colors beyond black, white, and neutral greys.
