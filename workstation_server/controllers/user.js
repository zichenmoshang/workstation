const moment = require("moment");
const User = require("../models/m_user");
const Permission = require("../models/m_permission");
const reback = require("../utils/reback");

class user {
  /**
   * 获取用户信息
   */
  static async getinfo(ctx) {
    const { userId } = ctx.request.body;
    const userinfo = await User.findOne({
      where: {
        user_id: userId,
      },
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, []));
    }
    userinfo.dataValues.createdAt = moment(userinfo.dataValues.createdAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    userinfo.dataValues.updatedAt = moment(userinfo.dataValues.updatedAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    delete userinfo.dataValues.user_password;
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
      const permission = userList[index].user_permission.split(",")
      let permissionName = ""
      for (let jndex in permission) {
        const permissionInfo = await Permission.findOne({
          where: {
            permission_id: permission[jndex] * 1
          },
          raw: true,
        });
        permissionName = permissionName === "" ? permissionInfo.permission_name : permissionName + ", " + permissionInfo.permission_name
      }
      userList[index].user_permission = permissionName
    }
    ctx.body = reback.re(1, userList);
  }
}

module.exports = user;
