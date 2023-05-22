const Character = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
	const planet = req.body;
	const planets = await axios.post('http://planets:8004/Planet', { planet });
	response(res, 200, planets.data);
};
