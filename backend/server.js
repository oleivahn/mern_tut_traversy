const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

// First route example
app.get("/api/firstRoute", (req, res) => {
  res.send("First route officially created");
});

app.get("/api/goals", (req, res) => {
  res.json({ message: "Get goals" });
});

// TODO: Extract the routes into their own folder on the backend. https://www.youtube.com/watch?v=-0exw-9YJBo (15:50)

app.listen(port, () => console.log(`Server started on port ${port}`));
