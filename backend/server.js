const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 3000;

const app = express();

// middleware to be able to handle/receive req.body on our POST routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// For cleaniness purposes, the routes were separated into its own routes file
// Routes... here they all run off http://localhost:3000/ +  whatever route
app.use('/', require('./routes/goalRoutes'));

// This has to go AFTER the routes
// use our custom error handler middleware to send better messages on the console after a bad req
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// TODO: Extract the routes into their own folder on the backend. https://www.youtube.com/watch?v=-0exw-9YJBo (26:36 )

// To run this app, run "npm run server"... then on Postman, hit "http://localhost:3000/api/goals"
