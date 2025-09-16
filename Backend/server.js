const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
require('dotenv').config();  // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Database connection using .env variables
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL DB');
});

// ================== SIGNUP ==================
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ error: 'All fields are required' });

  const hashedPassword = await bcrypt.hash(password, 10);

  const checkQuery = 'SELECT id FROM users WHERE username = ?';
  db.query(checkQuery, [username], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) return res.status(400).json({ error: 'Username already taken' });

    const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(insertQuery, [username, email, hashedPassword], err => {
      if (err) return res.status(500).json({ error: 'Database error during registration' });
      res.json({ message: 'User registered successfully' });
    });
  });
});

// ================== LOGIN ==================
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: 'Missing credentials' });

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err || results.length === 0)
      return res.status(401).json({ error: 'Invalid username' });

    const match = await bcrypt.compare(password, results[0].password);
    if (!match) return res.status(401).json({ error: 'Incorrect password' });

    res.json({ message: 'Login successful', userId: results[0].id });
  });
});

// ================== SAVE SCORE ==================
app.post('/api/score', (req, res) => {
  const { userId, score } = req.body;

  if (!userId || score === undefined) {
    return res.status(400).json({ error: 'Missing userId or score' });
  }

  const insertScore =
    'INSERT INTO scores (user_id, score, date, time) VALUES (?, ?, CURDATE(), CURTIME())';
  db.query(insertScore, [userId, score], err => {
    if (err) {
      console.error('Error inserting score:', err);
      return res.status(500).json({ error: 'Failed to save score' });
    }
    res.json({ message: 'Score saved successfully' });
  });
});

// ================== GET SCORES ==================
app.get('/api/scores/:userId', (req, res) => {
  const { userId } = req.params;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  const query = `
    SELECT id, score, DATE_FORMAT(date, "%d-%m-%Y") as date, TIME_FORMAT(time, "%H:%i:%s") as time
    FROM scores
    WHERE user_id = ?
    ORDER BY id DESC
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching scores:', err);
      return res.status(500).json({ error: 'Failed to fetch scores' });
    }
    res.json(results);
  });
});

// ================== DELETE SCORE ==================
app.delete('/api/scores/:id', (req, res) => {
  const scoreId = req.params.id;
  if (!scoreId) return res.status(400).json({ error: 'Missing score ID' });

  const query = 'DELETE FROM scores WHERE id = ?';
  db.query(query, [scoreId], (err, result) => {
    if (err) {
      console.error('Error deleting score:', err);
      return res.status(500).json({ error: 'Failed to delete score' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Score not found' });
    }
    res.json({ message: 'Score deleted successfully' });
  });
});

// ================== GET HIGH SCORE ==================
app.get('/api/highscore/:userId', (req, res) => {
  const { userId } = req.params;
  if (!userId) return res.status(400).json({ error: 'Missing userId' });

  const query = `SELECT MAX(score) AS highScore FROM scores WHERE user_id = ?`;
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('Error fetching high score:', err);
      return res.status(500).json({ error: 'Failed to fetch high score' });
    }
    const highScore = results[0]?.highScore || 0;
    res.json({ highScore });
  });
});

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
