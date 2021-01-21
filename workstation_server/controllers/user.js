const jwt = require("jsonwebtoken");
const md5 = require("md5");
const moment = require("moment");
const User = require("../models/m_user");
const reback = require("../utils/reback");

class user {
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
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, "用户名不存在", []));
    }
    userinfo.dataValues.createdAt = moment(userinfo.dataValues.createdAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    userinfo.dataValues.updatedAt = moment(userinfo.dataValues.updatedAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    // 验证密码 && 生成token并下发
    if (md5(password) === userinfo.user_password) {
      delete userinfo.dataValues.user_password;
      let data = {
        token: "",
        user: userinfo,
      };
      data.token = jwt.sign(
        {
          id: userinfo.user_id,
          // 设置 token 过期时间
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        "wangye's token"
      );
      ctx.body = reback.re(1, "登录成功", data);
    } else {
      ctx.body = reback.re(0, "登录失败", []);
    }
  }

  /**
   * 获取用户信息
   */
  static async getinfo(ctx) {
    const { user_id } = ctx.request.body;
    // 验证用户是否存在
    const userinfo = await User.findOne({
      where: {
        user_id: user_id,
      },
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, "用户名不存在", []));
    }
    userinfo.dataValues.createdAt = moment(userinfo.dataValues.createdAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    userinfo.dataValues.updatedAt = moment(userinfo.dataValues.updatedAt)
      .utcOffset(8)
      .format("YYYY-MM-DD HH:mm:ss");
    ctx.body = reback.re(1, "获取信息成功", userinfo);
  }

  /**
   *
   * 修改管理员信息
   * @static
   * @memberof admin
   */
  static async edit(ctx) {
    let params = ctx.request.body;
    let rule_id = params.rule_id ? escape(params.rule_id) : "";
    let data = {
      sql:
        "UPDATE vk_admin SET pic=?,nickname=?,password = (CASE WHEN ? != '' THEN ? ELSE password END),rule_id = (CASE WHEN ? != '' THEN ? ELSE rule_id END) WHERE username = ?",
      values: [
        params.pic,
        params.nickname,
        params.password,
        md5(params.password),
        rule_id,
        rule_id,
        params.username,
      ],
    };
    let [err, res] = await Db.query(data);
    if (err) {
      return (ctx.body = vk.showData(500, err, "请求失败"));
    }
    let data2 = {
      sql: "SELECT * FROM vk_admin WHERE username = ?",
      values: [params.username],
    };
    let [err2, res2] = await Db.query(data2);
    if (err2) {
      return (ctx.body = vk.showData(500, err2, "请求失败"));
    }
    ctx.body = vk.showData(200, res2, "修改成功");
  }

  /**
   *
   * 获取admin列表
   * @static
   * @memberof admin
   */
  static async list(ctx) {
    let data = {
      sql:
        "SELECT a.id,a.username,a.nickname,a.lasttime,a.pic,a.rule_id,r.title AS rule_title,r.rules FROM vk_admin a LEFT JOIN vk_admin_authority_rule r ON a.rule_id = r.id AND r.is_use = 1",
    };
    let [err, res] = await Db.query(data);
    if (err) {
      return (ctx.body = vk.showData(500, err, "请求失败"));
    }
    ctx.body = vk.showData(200, res, "ok");
  }

  /**
   *
   * 添加管理员
   * @static
   * @memberof admin
   */
  static async add(ctx) {
    let params = ctx.request.body;
    let data = {
      sql:
        "INSERT INTO vk_admin (username,nickname,pic,rule_id,password) VALUES (?,?,?,?,?)",
      values: [
        params.username,
        params.nickname,
        params.pic,
        params.rule_id,
        md5(params.password),
      ],
    };
    let [err, res] = await Db.query(data);
    if (err) {
      return (ctx.body = vk.showData(500, err, "请求失败"));
    }
    ctx.body = vk.showData(200, res, "ok");
  }

  /**
   *
   * 删除管理员
   * @static
   * @memberof admin
   */
  static async del(ctx) {
    let params = ctx.query;
    let data = {
      sql: "DELETE FROM vk_admin WHERE id = ?",
      values: [params.id],
    };
    let [err, res] = await Db.query(data);
    if (err) {
      return (ctx.body = vk.showData(500, err, "请求失败"));
    }
    ctx.body = vk.showData(200, res, "ok");
  }
}

module.exports = user;
