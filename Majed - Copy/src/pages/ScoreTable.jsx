import React, { useEffect, useState } from 'react';
import '../styles/ScoreTable.css';

const ScoreTable = () => {
  const [scoreData, setScoreData] = useState([]);
  const [highScore, setHighScore] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [scoresRes, highScoreRes] = await Promise.all([
          fetch(`http://localhost:5000/api/scores/${userId}`),
          fetch(`http://localhost:5000/api/highscore/${userId}`)
        ]);

        const scores = await scoresRes.json();
        const highScoreData = await highScoreRes.json();

        setScoreData(scores);
        setHighScore(highScoreData.highScore || 0);
      } catch (err) {
        console.error('Error fetching scoreboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchData();
  }, [userId]);

  const handleDelete = async (scoreId) => {
    try {
      const res = await fetch(`http://localhost:5000/api/scores/${scoreId}`, {
        method: 'DELETE'
      });

      const result = await res.json();
      if (res.ok) {
        // Update UI after delete
        setScoreData(prev => prev.filter(item => item.id !== scoreId));
        // Refresh high score
        const refreshed = await fetch(`http://localhost:5000/api/highscore/${userId}`);
        const refreshedData = await refreshed.json();
        setHighScore(refreshedData.highScore || 0);
      } else {
        alert(result.error || 'Failed to delete score');
      }
    } catch (err) {
      console.error('Error deleting score:', err);
    }
  };

  return (
    <div className="scoreboard-container">
      <h2>Scoreboard</h2>
      {highScore !== null && (
        <div className="high-score-banner">
          🏆 <strong>Your Highest Score:</strong> {highScore}
        </div>
      )}
      {loading ? (
        <p>Loading scores...</p>
      ) : scoreData.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#bbb' }}>No scores recorded yet.</p>
      ) : (
        <div className="score-table">
          {scoreData.map((entry) => (
            <div key={entry.id} className="score-row">
              <div className="score-data">
                <p><strong>Score:</strong> {entry.score}</p>
                <p><strong>Date:</strong> {entry.date}</p>
                <p><strong>Time:</strong> {entry.time}</p>
              </div>
              <button
                className="score-delete-btn"
                onClick={() => handleDelete(entry.id)}
              >
                {/* 🗑️❌ */}
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
