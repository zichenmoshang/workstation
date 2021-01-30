const router = require("koa-router")();
const user = require("../controllers/user");

module.exports = (router) => {
  router.get("/user/getuserinfo", user.getuserinfo);
  router.get("/user/getuserlist", user.getuserlist);
};

rts = router;
