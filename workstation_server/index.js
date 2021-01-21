const Koa = require('koa')
const cors = require('koa2-cors')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const router = require('./router')
const middleware = require('./utils/middleware')
const { System_config, Session_config } = require('./config')

const app = new Koa()

app.use(bodyParser()) // 使用ctx.body解析中间件

app.use(static('./upload'))

app.use(cors()) // 使用cor()实现跨域

app.use(middleware.check_authority)

app.keys = Session_config.key
app.use(session(Session_config, app));
/**
 * 装载所有子路由
 */
app.use(router.routes(),router.allowedMethods())

app.listen(System_config.port, () => {
	console.log('server is running at port', System_config.port)
})
