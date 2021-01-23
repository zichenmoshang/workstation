const router = require("koa-router")();
const permission = require("../controllers/permission");

module.exports = (router) => {
  router.get("/permission/:userId", permission.permissionUserId);
  router.post("/list", permission.list);
};

rts = router;
