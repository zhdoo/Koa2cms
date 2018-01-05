const router = require('koa-router')()

const AdminIndexController = require('../controller/admin/index')
 module.exports = (app) => {
    router.get( '/admin', AdminIndexController.index )
    
    router.get('/admin/main', AdminIndexController.main)
    app.use(router.routes())
      .use(router.allowedMethods())
  }
