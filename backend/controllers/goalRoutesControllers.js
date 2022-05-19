const asyncHandler = require('express-async-handler');

const GoalModel = require('../models/goalModel');

// /api/goals
// USING EXPRESS-ASYNC-HANDLER PACKAGE TO HANDLE ERRORS
const getGoals = asyncHandler(async (req, res) => {
  const goals = await GoalModel.find();

  // res.json({ message: 'Get goals' });
  res.json(goals);
});
//
//
//
//
//
//
// /api/goals
const createGoal = asyncHandler(async (req, res) => {
  // error handler for a bad request. If no field called "text"... throw error
  if (!req.body.text) {
    // NORMAL WAY TO HANDLE ERRORS
    // res.status(400).json({
    //   message: 'Please add a text field',
    //   reason: `Need a field called 'text' on the request's body`,
    // });

    // CUSTOM WAY TO HANDLE ERRORS USING EXPRESS OWN ERROR HANDLER AND MIDDLEWARE
    res.status(400);
    throw new Error("Please add a 'text' field!");
  }

  const goal = await GoalModel.create({
    text: req.body.text,
    reps: req.body.reps,
  });

  // send back the goal for feedback
  res.status(200).json({ status: 'Goal successfully created', goal });
});
//
//
//
//
//
//
//
//
// /api/goals/:id
const updateGoal = asyncHandler(async (req, res) => {
  const goalId = await GoalModel.findById(req.params.id);

  if (!goalId) {
    res.status(400);
    throw new Error('Goal ID not found');
  }

  const updatedGoal = await GoalModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  // OPTIONAL: res.status(200).json({ UPDATED: true, ...updatedGoal._doc });
  res.status(200).json({ status: 'Goal successfully updated', updatedGoal });
});
//
//
//
//
//
//

// /api/goals:id
// NORMAL WAY TO HANDLE ERRORS WITH TRY CATCH
// This way fixed my bug::      CastError: Cast to ObjectId failed for value when passing an id with the other package used up top
const deleteGoal = async (req, res) => {
  try {
    const goalId = await GoalModel.findById(req.params.id);

    if (!goalId) {
      res.status(400);
      throw new Error('Goal ID not found');
    }

    // const deletedGoal = await GoalModel.findByIdAndDelete(req.params.id);
    await goalId.remove();

    // OPTIONAL: res.status(200).json({ UPDATED: true, ...updatedGoal._doc });
    res
      .status(200)
      .json({ Status: 'Goal successfully removed', id: req.params.id });
  } catch (error) {
    res.status(200).json({ status: 'ID NOT FOUND', ID: req.params.id });
  }
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
