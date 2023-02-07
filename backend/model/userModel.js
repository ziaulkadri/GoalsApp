const mongoose = require('mongoose');

const UserScheama = mongoose.Schema(
	{
		name: {
			type: 'string',
			required: [true, 'please add a name'],
		},
		email: {
			type: 'string',
			required: [true, 'please add an email'],
			unique: true,
		},
		password: {
			type: 'string',
			required: [true, 'please add a password'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserScheama);
