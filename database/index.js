const server = require('./src/server');

const { Character, Film } = require('./src/database');

// Character.list().then((res) => console.log(res));
// Character.get(1).then((res) => console.log(res));
// Character.insert({
// 	_id: '201',
// 	name: 'Jonatan Piedra',
// 	birth_year: '1993',
// }).then((res) => console.log(res));

// Film.list().then((res) => console.log(res));


const PORT = 8004;
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
