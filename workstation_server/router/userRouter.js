const router = require("koa-router")()
const user = require('../controllers/user')

module.exports = (router)=>{
  router.post("/user/login",user.login)
  router.post("/user/getinfo",user.getinfo)
  router.post("/user/register",user.register)
}

rts = router;
