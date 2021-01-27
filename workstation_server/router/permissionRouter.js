const router = require("koa-router")();
const permission = require("../controllers/permission");

module.exports = (router) => {
  // router.get("/permission/permissionInfo", permission.permissionUserId);
  router.get("/permission/getpermissionfromid", permission.getPermissionFromId);
  router.post("/getuserlist", permission.getUserList);
};

rts = router;
