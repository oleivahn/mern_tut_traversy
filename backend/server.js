const express = require('express');
const colors = require('colors'); // Once added, can be used anywhere
// MAKE SURE YOU HAVE YOUR .env FILE CREATED!!!
const dotenv = require('dotenv').config();
const { customErrorHandler } = require('./middleware/customErrorMiddleware');

const connectDB = require('./config/db');

const port = process.env.PORT || 3000;

connectDB();

const app = express();

// middleware to be able to handle/receive req.body on our POST routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// For cleaniness purposes, the routes were separated into its own routes file
// Routes... here they all run off http://localhost:3000/api/goals +  whatever extra route
app.use('/api/goals', require('./routes/goalRoutes'));

// This has to go AFTER the routes
// use our custom error handler middleware to send better messages on the console after a bad req
app.use(customErrorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// Create the API: https://www.youtube.com/watch?v=-0exw-9YJBo
// Authentication: https://www.youtube.com/watch?v=enopDSs3DRw&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&index=2

// To run this app, run "npm run server"... then on Postman, hit "http://localhost:3000/api/goals"
