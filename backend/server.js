const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

// For cleaniness purposes, the routes were separated into its own routes file

// Routes
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));

// TODO: Extract the routes into their own folder on the backend. https://www.youtube.com/watch?v=-0exw-9YJBo (26:36 )

// To run this app, run "npm run server"... then on Postman, hit "http://localhost:3000/api/goals"
