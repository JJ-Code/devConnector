const express = require('express');
//const connectDB = require('./config/db');
const path = require('path');
const colors = require('colors');

const app = express();

app.get('/', (req, res) => res.send('api running'));




//port info
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV}  mode on port ${PORT}!`.yellow.bold);
});

// Handle unhandled promise rejections for all 
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});