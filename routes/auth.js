// routes/auth.js

const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/authController');

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const token = await loginUser(username, password);
    if (!token) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Register endpoint
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const newUser = await registerUser(username, password);
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
