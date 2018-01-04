const Koa = require('koa')

const path = require('path')
const nunjucks = require('koa-nunjucks-2')
const bodyParser = require('koa-bodyparser')
const router = require('koa-router')();
const app = new Koa()


const home = require('./routers/home')
const admin = require('./routers/admin')
// 引入 koa-static
const staticFiles = require('koa-static')

// 指定 public目录为静态资源目录，用来存放 js css images 等
app.use(staticFiles(path.resolve(__dirname, "./public")))


app.use(nunjucks({
	ext: 'html',
	path: path.join(__dirname, 'views'), // 指定视图目录
	nunjucksConfig: {
		trimBlocks: true // 开启转义 防Xss
	}
}));


app.use(bodyParser())

router.use('/', home.routes(), home.allowedMethods());
router.use('/admin', admin.routes(), admin.allowedMethods());

app.use(router.routes(), router.allowedMethods())

app.listen(3000, () => {
	console.log('server is running at http://localhost:3000')
})