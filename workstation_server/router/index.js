const router = require('koa-router')()
const userRouter = require('./userRouter')
const permissionRouter = require('./permissionRouter')

userRouter(router)
permissionRouter(router)

module.exports = router