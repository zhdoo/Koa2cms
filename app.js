const Koa = require('koa')

const path = require('path')
const nunjucks = require('koa-nunjucks-2')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')();
const session = require('koa-session');


const app = new Koa()

const home = require('./routers/home')
const adminRoute = require('./routers/admin')
const homeRoute = require('./routers/home')
const adminCommonRoute = require('./routers/adminCommon')
// 引入 koa-static
const staticFiles = require('koa-static')


app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa2cms', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
};


app.use(session(CONFIG, app));
// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))


app.use(nunjucks({
	ext: 'html',
	path: path.join(__dirname, 'views'), // 指定视图目录
	nunjucksConfig: {
		trimBlocks: true,// 开启转义 防Xss
		noCache:true
	}
}));


app.use(bodyParser())


homeRoute(app)
adminCommonRoute(app)
adminRoute(app)
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})