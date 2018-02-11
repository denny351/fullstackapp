const mongoose = require('mongoose');

const gameSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		developer: {
			type: String,
			required: true
		},
		review: {
			type: String,
			default: true
		},
		released: {
			type: String,
			required: 'n/a'
		},
		rating: {
			type: Number,
			required: true,
			min: 1,
			max: 5
		},
		price: {
			type: String,
			required: 'n/a'
		},
		ownerId: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };