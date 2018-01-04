const router = require('koa-router')()

const AdminIndexController = require('../controller/admin/index')

router.get('/',AdminIndexController.index)

module.exports=router