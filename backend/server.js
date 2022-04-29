const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.get("/api/firstRoute", (req, res) => {
  res.send("First route officially created")
})

app.listen(port, () => console.log(`Server started on port ${port}`));