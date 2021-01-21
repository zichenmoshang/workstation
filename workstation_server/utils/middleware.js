const jwt = require("jsonwebtoken");
const User = require("../models/m_user");
const Permission = require("../models/m_permission");
const reback = require("../utils/reback");

function checkToken(token) {
  //检测token
  return new Promise((resolve) => {
    let t = token.split(" ");
    let t1 = t[0];
    let t2 = t[1];
    if (/^Bearer$/i.test(t1)) {
      jwt.verify(t2, "wangye's token", (err) => {
        if (err) {
          return resolve([401, "请求失败，登入过期"]);
        } else {
          resolve([200, "ok"]);
        }
      });
    } else {
      resolve([400, "请求失败，未登入"]);
    }
  });
}

class middleware {
  /**
   *
   * 检测用户权限中间件
   * @static
   * @memberof middleware
   */
  static async check_authority(ctx, next) {
    if (ctx.originalUrl != "/user/login") {
      let user_id = ctx.method == "GET" ? ctx.query.user_id : ctx.request.body.user_id;
      let user = await User.findOne({
        where: {
          user_id: user_id,
        },
        raw: true,
      });
      if (!user) {
        return ctx.body = reback.re(0, "请求错误", []);
      }
      let permission = await Permission.findOne({
        where: {
          permission_path: ctx.request.path,
        },
        raw: true,
      })
      if (!permission) {
        return ctx.body = reback.re(0, "请求错误", []);
      }
      if (user.user_permission.indexOf(permission.permission_id)) {
        await next();
      } else {
        return ctx.body = reback.re(-1, "你没有操作权限", []);
      }
    }else{
      await next();
    }
  }
}

module.exports = middleware;
