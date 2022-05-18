const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.json({ message: 'Get goals' });
});

// @desc    Create a goal
// @route   POST /api/goals
// @access  Private
const createGoal = asyncHandler(async (req, res) => {
  // error handler for a bad request. If no field called "text"... throw error
  if (!req.body.text) {
    // NORMAL WAY TO HANDLE ERRORS
    res.status(400).json({
      message: 'Please add a text field',
      reason: `Need a field called 'text' on the request's body`,
    });

    // CUSTOM WAY TO HANDLE ERRORS USING EXPRESS OWN ERROR HANDLER AND MIDDLEWARE
    // res.status(400);
    // throw new Error('Pleaseeee add a text field');
  }

  console.log(req.body);
  res.json({ message: 'Goal created' });
});

// @desc    Update a goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Goal ${req.params.id} updated` });
});

// @desc    Delete a goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.json({ message: `Goal ${req.params.id} deleted` });
});

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
