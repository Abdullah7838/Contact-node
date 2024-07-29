const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001; // Default port to 3001 if not specified
const cors = require('cors');
const db = require('./db'); // Ensure db.js is correctly set up
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

const contactRoute = require('./router/contactRoute');
app.use('/', contactRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
