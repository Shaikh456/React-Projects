// ScoreTable.jsx

import React, { useEffect, useState } from 'react';
import '../styles/ScoreTable.css'; // Custom CSS for scoreboard

const ScoreTable = () => {
  const [scoreData, setScoreData] = useState([]);

  // Load score history from localStorage when component mounts
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('scoreHistory')) || [];
    setScoreData(history);
  }, []);

  // Delete a specific score record by index
  const handleDelete = (indexToDelete) => {
    const updated = scoreData.filter((_, index) => index !== indexToDelete);
    setScoreData(updated);
    localStorage.setItem('scoreHistory', JSON.stringify(updated));
  };

  return (
    <div className="scoreboard-container">
      <h2>Scoreboard</h2>
      {scoreData.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#bbb' }}>No scores recorded yet.</p>
      ) : (
        <div className="score-table">
          {scoreData.map((entry, index) => (
            <div key={index} className="score-row">
              <div className="score-data">
                <p><strong>Score:</strong> {entry.score}</p>
                <p><strong>Date:</strong> {entry.date}</p>
                <p><strong>Time:</strong> {entry.time}</p>
              </div>
              <button
                className="score-delete-btn"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScoreTable;
