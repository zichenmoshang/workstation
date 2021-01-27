const router = require("koa-router")();
const ignoreRouter = require("./ighoreRouter");
const userRouter = require("./userRouter");
const permissionRouter = require("./permissionRouter");

ignoreRouter(router);
userRouter(router);
permissionRouter(router);

module.exports = router;
