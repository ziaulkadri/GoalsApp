const asyncHandler = require('express-async-handler');

// @desc  Get goals
// @route Get/api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Get Goals' });
});

// @desc  set goal
// @route post/api/goals
// @access private
const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(404);
		throw new Error('Please add a text field');
	}
	res.status(200).json({ message: 'set Goals' });
});

// @desc  update goal
// @route put/api/goals/:id
// @access private
const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `update Goal  ${req.params.id}` });
});

// @desc  delete goal
// @route delete/api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `delete Goal ${req.params.id}` });
});

module.exports = {
	getGoals,
	setGoal,
	updateGoal,
	deleteGoal,
};
