const moment = require("moment");
const Permission = require("../models/m_permission");
const User = require("../models/m_user");
const reback = require("../utils/reback");

class permission {
  static async permissionUserId(ctx) {
    const { userId } = ctx.query;
    // 验证用户是否存在
    const userinfo = await User.findOne({
      where: {
        user_id: userId,
      },
    });
    if (!userinfo) {
      return (ctx.body = reback.re(-1, []));
    }
    const userPermission = userinfo.user_permission.split(",");
    const permissions = await Permission.findAll({
      where: {
        permission_id: userPermission,
      },
      order: [["id", "ASC"]],
      raw: true,
    });
    let permission = [];
    for (let index in permissions) {
      permissions[index].createdAt = moment(permissions[index].createdAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      permissions[index].updatedAt = moment(permissions[index].updatedAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      if (permissions[index].permission_level === 0) {
        permission.push(permissions[index]);
      }
    }
    for (let index in permission) {
      for (let indey in permissions) {
        if (
          permissions[indey].permission_parent ===
          permission[index].permission_id * 1
        ) {
          permission[index].children = permission[index].children
            ? permission[index].children
            : [];
          permission[index].children.push(permissions[indey]);
        }
      }
    }
    console.log("-------------", permission);
    ctx.body = reback.re(1, permission);
  }
  static async list(ctx) {
    const permissions = await Permission.findAll({
      where: {
        permission_id: ctx.request.body.user_permission.split(","),
      },
      raw: true,
    });
    let permission = [];
    for (let index in permissions) {
      permissions[index].createdAt = moment(permissions[index].createdAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      permissions[index].updatedAt = moment(permissions[index].updatedAt)
        .utcOffset(8)
        .format("YYYY-MM-DD HH:mm:ss");
      if (permissions[index].permission_level === 0) {
        permission.push(permissions[index]);
      }
    }
    for (let index in permission) {
      for (let indey in permissions) {
        if (
          permissions[indey].permission_parent ===
          permission[index].permission_id * 1
        ) {
          permission[index].children = permission[index].children
            ? permission[index].children
            : [];
          permission[index].children.push(permissions[indey]);
        }
      }
    }
    if (permissions) {
      ctx.body = reback.re(200, "读取权限列表成功", permission);
    } else {
      ctx.body = reback.re(401, "读取权限列表失败，请重试", permission);
    }
  }
  static async getUserList(ctx) {
    const { key } = ctx.query;
    console.log(key)
    const users = await Permission.findAll({
      where: {
        [Op.or]: [
          {
            user_username: {
              [Op.like]: key,
            },
          },
          {
            user_realname: {
              [Op.like]: key,
            },
          },
          {
            user_department: {
              [Op.like]: key,
            },
          },
        ],
      },
      raw: true,
    });
    if (users) {
      for (let index in users) {
        users[index].createdAt = moment(users[index].createdAt)
          .utcOffset(8)
          .format("YYYY-MM-DD HH:mm:ss");
        users[index].updatedAt = moment(users[index].updatedAt)
          .utcOffset(8)
          .format("YYYY-MM-DD HH:mm:ss");
      }
      ctx.body = reback.re(200, "读取用户列表成功", users);
    } else {
      ctx.body = reback.re(401, "读取用户列表失败，请重试", users);
    }
  }
}

module.exports = permission;
