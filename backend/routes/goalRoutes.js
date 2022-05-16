const express = require("express");
const router = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalControllers");

// To keep things clean, the callback functions for each route are separated into tehir own "controllers" file.
// But they could easily be done all on this file.

router.get("/", getGoals);

router.post("/", createGoal);

router.put("/:id", updateGoal);

router.delete("/:id", deleteGoal);

module.exports = router;
