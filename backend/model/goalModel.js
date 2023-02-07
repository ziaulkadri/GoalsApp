const mongoose = require('mongoose');

const goalSchema = mongoose.Schema(
	{
		text: {
			type: 'string',
			required: [true, 'please add a text value'],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Goal', goalSchema);
