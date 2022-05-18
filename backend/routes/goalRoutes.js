const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalRoutesControllers");

// To keep things clean, the callback functions for each route are separated into their own "controllers" file... But they could easily be done all on this file.

// http://localhost:3000/ +  whatever route
router.get("/api/goals", getGoals);

router.post("/api/goals", createGoal);

router.put("/api/goals/:id", updateGoal);

router.delete("/api/goals/:id", deleteGoal);

module.exports = router;
