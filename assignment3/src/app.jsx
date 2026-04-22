import { useState } from 'react';
import Header from './components/Header';
import StudentTable from './components/StudentTable';
import AddStudentForm from './components/AddStudentForm';

const initialStudents = [
  { id: 1, name: 'Aarav Mehta',   score: 88 },
  { id: 2, name: 'Priya Sharma',  score: 34 },
  { id: 3, name: 'Rohan Verma',   score: 56 },
  { id: 4, name: 'Sneha Kapoor',  score: 72 },
  { id: 5, name: 'Dev Patel',     score: 19 },
];

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [toast, setToast]       = useState(null);
  const [toastKey, setToastKey] = useState(0);

  const showToast = (msg) => {
    setToast(msg);
    setToastKey(k => k + 1);
    setTimeout(() => setToast(null), 2300);
  };

  const handleUpdateScore = (id, newScore) => {
    setStudents(prev =>
      prev.map(s => s.id === id ? { ...s, score: newScore } : s)
    );
    const student = students.find(s => s.id === id);
    showToast(`Updated ${student?.name}'s score to ${newScore}`);
  };

  const handleAddStudent = ({ name, score }) => {
    const newStudent = {
      id: Date.now(),
      name,
      score,
    };
    setStudents(prev => [...prev, newStudent]);
    showToast(`${name} added successfully!`);
  };

  const totalStudents = students.length;
  const passCount     = students.filter(s => s.score >= 40).length;
  const failCount     = totalStudents - passCount;

  return (
    <div className="app">
      <Header />

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="stat-card">
          <div className="stat-value total">{totalStudents}</div>
          <div className="stat-label">Total Students</div>
        </div>
        <div className="stat-card">
          <div className="stat-value pass">{passCount}</div>
          <div className="stat-label">Passed</div>
        </div>
        <div className="stat-card">
          <div className="stat-value fail">{failCount}</div>
          <div className="stat-label">Failed</div>
        </div>
      </div>

      <StudentTable students={students} onUpdateScore={handleUpdateScore} />
      <AddStudentForm onAddStudent={handleAddStudent} />

      {toast && (
        <div className="toast" key={toastKey}>
          ✓ {toast}
        </div>
      )}
    </div>
  );
};

export default App;
