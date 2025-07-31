const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Enable CORS to allow frontend connections
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Path to the feedback storage file
const FEEDBACK_FILE = path.join(__dirname, 'feedback.json');

// Function to read feedback messages from file safely
function getFeedback() {
  try {
    const data = fs.readFileSync(FEEDBACK_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    // If file doesn't exist or is empty, return empty array
    return [];
  }
}

// Function to save feedback messages back to the file
function saveFeedback(data) {
  fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(data, null, 2));
}

// Serve frontend static files from "../public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// API route to get all feedback messages
app.get('/api/feedback', (req, res) => {
  const feedback = getFeedback();
  res.json(feedback);
});

// API route to post a new feedback message
app.post('/api/feedback', (req, res) => {
  const { message } = req.body;
  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const feedback = getFeedback();
  const newMessage = {
    message: message.trim(),
    timestamp: Date.now(),
  };

  feedback.unshift(newMessage); // Add new message to front
  saveFeedback(feedback);

  res.status(201).json(newMessage);
});

// SPA fallback for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Feedback Wall backend running on http://localhost:${PORT}`);
});

