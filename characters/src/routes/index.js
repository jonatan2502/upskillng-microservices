const { Router } = require('express');

const router = Router();
const controllers = require('../controllers');
const middlewares = require('../middlewares');

router.get('/characters', controllers.getCharacters);
router.get('/characters/:id', controllers.getOneCharacter);
router.post('/characters', middlewares.characterValidation, controllers.createCharacter);

module.exports = router;
