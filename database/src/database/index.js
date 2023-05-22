const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');
const characterSchema = require('./schemas/characterSchema');
const filmSchema = require('./schemas/filmSchema');
const planetSchema = require('./schemas/planetSchema');

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model('Character', characterSchema);
// const Film = conn.model('Film', filmSchema);

// Character.find()
// 	.populate('films', ['_id', 'title'])
//     .populate('homeworld', ['_id','name'])
// 	.then((res) => console.log(res[0]));

module.exports = {
	Character: conn.model('Character', characterSchema),
	Film: conn.model('Film', filmSchema),
    Planet: conn.model('Planet', planetSchema)
};
