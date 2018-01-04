const router = require('koa-router')()
const HomeIndexController = require('../controller/home/index')

router.get('/', HomeIndexController.index)

module.exports = router