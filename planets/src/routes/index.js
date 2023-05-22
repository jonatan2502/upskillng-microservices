const { Router } = require('express');

const router = Router();
const Controllers = require('../controllers');

router.get('/planets', Controllers.getPlanets);
router.get('/planets/:id', Controllers.getOne);
router.post('/planets', Controllers.createPlanet);

module.exports = router;
