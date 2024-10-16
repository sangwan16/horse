// // const express = require('express');
// // const app = express();
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;

// // Middleware to parse incoming request bodies
// // app.use(bodyParser.json());

// // Route to handle POST requests
// // app.post('/', (req, res) => {
// //   const data = req.body;
// //   console.log('Received data:', data);
// //   res.json({ message: 'Data received successfully!' });
  
// // });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
// require('dotenv').config(); // Optional if you're using environment variables

const app = express();

// MongoDB Atlas connection string (you can store it in environment variables for security)
const mongoURI = "mongodb+srv://akashchauhan72520:Ankit2000@cluster0.qm7u4pa.mongodb.net/?retryWrites=true&w=majority";

// Mongoose connection
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

// Routes
app.get('/', (req, res) => {
  res.send('MongoDB Atlas Connection Example');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
