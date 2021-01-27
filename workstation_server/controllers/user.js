const moment = require("moment");
const User = require("../models/m_user");
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
    console.log("6666")
    const userlist = await User.findAll({
      raw: true,
    });
    if (userlist.length === 0) {
      return (ctx.body = reback.re(-1, []));
    }
    for (let index in userlist) {
      userlist[index].createdAt = moment(userlist[index].createdAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      userlist[index].updatedAt = moment(userlist[index].updatedAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      delete userlist[index].user_password;
    }
    ctx.body = reback.re(1, userlist);
  }
}

module.exports = user;
