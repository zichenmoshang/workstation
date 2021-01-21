const moment = require("moment");
const Permission = require("../models/m_permission");
const reback = require("../utils/reback");

class permission {
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
                    permission[index].children = permission[index].children ? permission[index].children : [];
                    permission[index].children.push(permissions[indey]);
                }
            }
        }
        if (permissions) {
            ctx.body = reback.re(200, "读取权限列表成功", permission)
        } else {
            ctx.body = reback.re(401, "读取权限列表失败，请重试", permission)
        }
    }
}

module.exports = permission;
