const router = require("koa-router")()
const user = require('../controllers/user')

module.exports = (router)=>{
  router.post("/user/login",user.login)  //登入接口
  router.post("/user/edit",user.edit) // 修改资料
  router.get("/user/list",user.list)
  router.post("/user/add",user.add)
  router.get("/user/del",user.del)
}

rts = router;
