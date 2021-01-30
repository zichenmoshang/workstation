const moment = require("moment");
const User = require("../models/m_user");
const Permission = require("../models/m_permission");
const reback = require("../utils/reback");

class user {
  /**
   * 获取用户信息
   */
  static async getuserinfo(ctx) {
    const userId = ctx.query.userId;
    const userinfo = await User.findOne({
      where: {
        user_id: userId,
      },
      raw: true
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, []));
    }
    // 格式化时间
    userinfo.createdAt = moment(userinfo.createdAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    userinfo.updatedAt = moment(userinfo.updatedAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
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
    ctx.body = reback.re(1, userinfo);
  }
  /**
   * 获取用户列表
   */
  static async getuserlist(ctx) {
    const userList = await User.findAll({
      raw: true,
    });
    if (userList.length === 0) {
      return (ctx.body = reback.re(-1, []));
    }
    for (let index in userList) {
      userList[index].createdAt = moment(userList[index].createdAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      userList[index].updatedAt = moment(userList[index].updatedAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      delete userList[index].user_password;
      const permission = userList[index].user_permission.split(",");
      let permissionName = "";
      for (let jndex in permission) {
        const permissionInfo = await Permission.findOne({
          where: {
            permission_id: permission[jndex] * 1,
          },
          raw: true,
        });
        permissionName =
          permissionName === ""
            ? permissionInfo.permission_name
            : permissionName + ", " + permissionInfo.permission_name;
      }
      userList[index].user_permission = permissionName;
    }
    ctx.body = reback.re(1, userList);
  }
}

module.exports = user;
