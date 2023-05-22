const Character = require('../data');
const { response } = require('../utils');

module.exports = async (req, res) => {
	const character = req.body;
    //enviar peticion post al microservicio de db
    throw Error('error en create')
	response(res, 200, character);
};
