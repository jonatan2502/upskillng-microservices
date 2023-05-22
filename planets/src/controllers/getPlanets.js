const Character = require('../data');
const { response } = require('../utils');
const axios = require('axios')

module.exports = async (req, res) => {
	const planets = await axios.get('http://planets:8004/Planet')
	response(res, 200, planets.data);
};
