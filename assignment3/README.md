# Student Scoreboard — React + Vite

A React application built for Web Dev II Assignment 3.

## 🚀 Getting Started

1. Open this folder in VS Code (or any terminal)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser

## 🧩 Component Structure

```
src/
├── App.jsx                  ← Root: holds all state
├── index.css                ← Global styles
├── main.jsx                 ← React entry point
└── components/
    ├── Header.jsx           ← App title & subtitle
    ├── StudentTable.jsx     ← Table wrapper, sorted by score
    ├── StudentRow.jsx       ← Individual student row with score update
    └── AddStudentForm.jsx   ← Form to add new students
```

## ✅ Features

- View all students ranked by score
- Update any student's score dynamically (click Update or press Enter)
- Add new students via form with validation
- Pass / Fail badge (Pass ≥ 40, Fail < 40)
- Live stats bar (total / pass / fail count)
- Toast notifications on updates
- Fully responsive layout
