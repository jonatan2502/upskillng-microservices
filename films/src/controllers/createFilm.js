const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const film = req.body;
	const response = axios.post('http://localhost:8004/Film', { film });
	response(res, 200, response.data);
};
