const getGoals = (req, res) => {
  res.json({ message: "Get goals" });
};

const createGoal = (req, res) => {
  res.json({ message: "Goal created" });
};

const updateGoal = (req, res) => {
  res.json({ message: `Goal ${req.params.id} updated` });
};

const deleteGoal = (req, res) => {
  res.json({ message: `Goal ${req.params.id} deleted` });
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
