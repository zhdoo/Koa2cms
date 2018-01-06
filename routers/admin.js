const router = require('koa-router')()

const AdminIndexController = require('../controller/admin/index')
 module.exports = (app) => {
 	router.prefix('/admin')
    router.get( '/', AdminIndexController.index )
    router.get('/main', AdminIndexController.main)
    app.use(router.routes())
      .use(router.allowedMethods())

    app.use(ctx => {
	  if (ctx.path === '/favicon.ico') return;
	  let n = ctx.session.userInfo || 0;
	  if (n==0) {
	  	// console.log(123)
	  	ctx.response.redirect('/login');
	  }
	});
  }
