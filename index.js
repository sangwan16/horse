
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoURI = "mongodb+srv://akash-mongo-db:randompage@cluster0.lj5iykk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });

// Middleware
app.use(express.json());


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
