const router = require("koa-router")();
const user = require("../controllers/user");

module.exports = (router) => {
  router.post("/user/getinfo", user.getinfo);
  router.get("/user/getuserlist", user.getuserlist);
};

rts = router;
