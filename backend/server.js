const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');


// Middleware to parse JSON from request body
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('✅ Server is running!');
});

// Signup route (POST)
app.post('/signup', (req, res) => {
  const { fullName, email, username, password, location } = req.body;

  console.log('📥 Signup data received:');
  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Username:', username);
  console.log('Password:', password);
  console.log('Location:', location);

  res.json({ message: 'Signup data received successfully 🔥' });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
