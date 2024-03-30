const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Route to handle donation requests
app.post('/api/donate', (req, res) => {
  const { name, email, amount } = req.body;

  // Process donation (e.g., save to database)
  // For simplicity, let's just log the donation data
  console.log('Received donation:', { name, email, amount });

  // Send response back to the client
  res.status(200).json({ message: 'Donation received successfully' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});