import StudentRow from './StudentRow';

const StudentTable = ({ students, onUpdateScore }) => {
  const sorted = [...students].sort((a, b) => b.score - a.score);

  return (
    <section className="table-section">
      <div className="table-header-bar">
        <h2>Student Records</h2>
        <span className="table-count">{students.length} student{students.length !== 1 ? 's' : ''}</span>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score / 100</th>
              <th style={{ textAlign: 'center' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {sorted.length === 0 ? (
              <tr>
                <td colSpan="4">
                  <div className="empty-state">
                    <span className="empty-icon">📋</span>
                    No students yet. Add one below!
                  </div>
                </td>
              </tr>
            ) : (
              sorted.map((student, idx) => (
                <StudentRow
                  key={student.id}
                  student={student}
                  rank={idx + 1}
                  onUpdateScore={onUpdateScore}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentTable;
