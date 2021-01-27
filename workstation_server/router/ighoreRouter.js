const router = require("koa-router")();
const ignore = require("../controllers/ignore");

module.exports = (router) => {
  router.post("/ignore/login", ignore.login);
  router.post("/ignore/register", ignore.register);
};

rts = router;
