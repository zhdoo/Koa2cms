const router = require('koa-router')()

const AdminCommonController = require('../controller/admin/common')
 module.exports = (app) => {
    router.get( '/admin/login', AdminCommonController.login )
    app.use(router.routes())
      .use(router.allowedMethods())
  }
