import { useState } from 'react';

const StudentRow = ({ student, rank, onUpdateScore }) => {
  const [inputScore, setInputScore] = useState(student.score);

  const isPassing = student.score >= 40;
  const isTop = rank === 1;

  const handleUpdate = () => {
    const val = Number(inputScore);
    if (isNaN(val) || val < 0 || val > 100) return;
    onUpdateScore(student.id, val);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate();
  };

  return (
    <tr className="student-row">
      <td className="rank-cell">
        <span className={isTop ? 'top' : ''}>{isTop ? '🏆' : `#${rank}`}</span>
      </td>
      <td className="name-cell">{student.name}</td>
      <td className="score-cell">
        <div className="score-input-wrap">
          <input
            type="number"
            className="score-input"
            min="0"
            max="100"
            value={inputScore}
            onChange={(e) => setInputScore(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-update" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </td>
      <td className="status-cell">
        <span className={`badge ${isPassing ? 'pass' : 'fail'}`}>
          {isPassing ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  );
};

export default StudentRow;
