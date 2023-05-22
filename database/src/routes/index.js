const { Router} = require('express')
const {validateModel} = require('../database/middlewares')
const Controllers = require('../controllers')

const router = Router()

router.get('/:model', validateModel, Controllers.getAll)
router.get('/:model/:id', validateModel, Controllers.getOne)
router.post('/:model', validateModel, Controllers.createOne)

module.exports = router

