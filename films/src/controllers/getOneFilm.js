const Character = require('../data');
const { response } = require('../utils');
const axios = require('axios');

module.exports = async (req, res) => {
	const { id } = req.params;
	const films = await axios.get(`http://database:8004/Film/${id}`);
	response(res, 200, films.data);
};
