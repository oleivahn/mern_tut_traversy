// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
  res.json({ message: "Get goals" });
};

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const createGoal = (req, res) => {
  res.json({ message: "Goal created" });
};

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (req, res) => {
  res.json({ message: `Goal ${req.params.id} updated` });
};

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (req, res) => {
  res.json({ message: `Goal ${req.params.id} deleted` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
