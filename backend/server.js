const express = require("express");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;

const app = express();

app.use("/api/goals", require("./routes/goalRoutes"));

// TODO: Extract the routes into their own folder on the backend. https://www.youtube.com/watch?v=-0exw-9YJBo (15:50)

app.listen(port, () => console.log(`Server started on port ${port}`));
