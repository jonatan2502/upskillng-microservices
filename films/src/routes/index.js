const { Router } = require('express');
const router = Router();

const Controllers = require('../controllers');

router.get('/films', Controllers.getFilms);
router.get('/films/:id', Controllers.getOne);
router.post('/films', Controllers.createFilm);

module.exports = router;
