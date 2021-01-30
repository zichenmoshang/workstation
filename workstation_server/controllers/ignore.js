const jwt = require("jsonwebtoken");
const md5 = require("md5");
const moment = require("moment");
const User = require("../models/m_user");
const Permission = require("../models/m_permission");
const reback = require("../utils/reback");

class ignore {
  /**
   * 登陆
   */
  static async login(ctx) {
    const { username, password } = ctx.request.body;
    // 验证用户是否存在
    const userinfo = await User.findOne({
      where: {
        user_username: username,
      },
      raw: true,
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, "用户名不存在", []));
    }
    // 格式化时间
    userinfo.createdAt = moment(userinfo.createdAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    userinfo.updatedAt = moment(userinfo.updatedAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    // 验证密码 && 生成token并下发
    if (md5(password) === userinfo.user_password) {
      // 删除密码
      delete userinfo.user_password;
      // 格式化权限
      const permission = userinfo.user_permission.split(",");
      let permissionName = "";
      for (let index in permission) {
        const permissionInfo = await Permission.findOne({
          where: {
            permission_id: permission[index] * 1,
          },
          raw: true,
        });
        permissionName =
          permissionName === ""
            ? permissionInfo.permission_name
            : permissionName + ", " + permissionInfo.permission_name;
      }
      userinfo.user_permission = permissionName;
      // 生成token
      let data = {
        token: "",
        userinfo: userinfo,
      };
      data.token = jwt.sign(
        {
          id: userinfo.user_id,
          // 设置 token 过期时间
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        "wangye's token"
      );
      ctx.body = reback.re(1, data);
    } else {
      ctx.body = reback.re(0, []);
    }
  }
  /**
   * 注册用户
   */
  static async register(ctx) {
    const register_info = ctx.request.body;
    const registeruser = await User.create({
      user_username: register_info.username || "",
      user_password: register_info.password || "",
      user_realname: register_info.realname || "",
      user_avatar: register_info.avatar || "",
      user_unit: register_info.unit || "",
      user_department: register_info.department || "",
      user_permission: "",
    });
    if (!registeruser) {
      return (ctx.body = reback.re(0, []));
    }
    delete registeruser.dataValues.user_password;
    delete registeruser.dataValues.user_permission;
    let data = {
      token: "",
      user_id: registeruser.dataValues.user_id,
    };
    data.token = jwt.sign(
      {
        id: registeruser.dataValues.user_id,
        // 设置 token 过期时间
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
      },
      "wangye's token"
    );
    ctx.body = reback.re(1, data);
  }
}

module.exports = ignore;
