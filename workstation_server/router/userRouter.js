const router = require("koa-router")()
const user = require('../controllers/user')

module.exports = (router)=>{
  router.post("/user/login",user.login)
  router.post("/user/getinfo",user.getinfo)
  router.post("/user/register",user.register)
  router.post("/user/edit",user.edit)
  router.get("/user/list",user.list)
  router.post("/user/add",user.add)
  router.get("/user/del",user.del)
}

rts = router;
