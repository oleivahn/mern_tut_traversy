const express = require("express");
const router = express.Router();

// First route example
// app.get("/api/firstRoute", (req, res) => {
//   res.send("First route officially created");
// });

router.get("/", (req, res) => {
  res.json({ message: "Get goals" });
});

router.post("/", (req, res) => {
  res.json({ message: "Goal created" });
});

router.put("/:id", (req, res) => {
  res.json({ message: `Goal ${req.params.id} Updated` });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `Goal ${req.params.id} deleted` });
});

module.exports = router;
