// controllers/authController.js

const jwt = require('jsonwebtoken');

// Sample user data (replace with database interactions)
const users = [
  { id: 1, username: 'admin', password: 'admin', role: 'admin' },
  { id: 2, username: 'user', password: 'user', role: 'user' }
];

// Function to authenticate user
async function loginUser(username, password) {
  // Simulate database lookup
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new Error('Invalid username or password');
  }

  // Generate JWT token with user role included in payload
  const token = generateToken(user);

  return token;
}

// Function to generate JWT token
function generateToken(user) {
  // Include user role in JWT payload
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role // Add role attribute to payload
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

// Function to register a new user
async function registerUser(username, password) {
  // Simulate database interaction (replace with actual database code)
  const newUser = { id: users.length + 1, username, password, role: 'user' };
  users.push(newUser);
  return newUser;
}

module.exports = {
  loginUser,
  registerUser
};
