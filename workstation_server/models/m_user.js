const Sequelize = require("sequelize");
const sequelize = require("../utils/database");
const md5 = require("md5");

const User = sequelize.define(
  "ws_user",
  {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true, // 是否为主键
      allowNull: false, // 是否允许为NULL
      unique: true, // 是否不可重复
      required: true, // 是否允许关联
      autoIncrement: true, // 没有这个时插入返回是id是null
      comment: '用户id',
    },
    user_username: {
      type: Sequelize.STRING(6),
      allowNull: false, // 是否允许为NULL
      unique: true,
      required: true,
      comment: '用户警号',
    },
    user_password: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: '用户密码',
      set: function(value) {
        this.setDataValue('user_password', md5(value));
      },
    },
    user_realname: {
      type: Sequelize.STRING(32),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: '用户姓名',
    },
    user_avatar: {
      type: Sequelize.STRING(256),
      allowNull: false, // 是否允许为NULL
      defaultValue: "DEFAULT_01", // 默认值
      unique: false,
      comment: '用户头像',
    },
    user_unit: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      defaultValue: "佳木斯公安处",
      unique: false,
      required: true,
      comment: '用户单位',
    },
    user_department: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: '用户部门',
    },
    user_permission: {
      type: Sequelize.STRING(256),
      allowNull: true, // 是否允许为NULL
      unique: false,
      required: true,
      comment: '用户权限',
    },
  },
  {
    freezeTableName: true, // freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名
    timestamps: true, // timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
  }
);

//将创建表,如果表已经存在,则不做操作
// User.sync();
//将创建表,如果表已经存在,则将其首先删除
User.sync({ force: true }).then(function () {
  return User.create({
    user_username: "admin",
    user_password: "123456",
    user_realname: "超级管理员",
    user_avatar: "DEFAULT_01",
    user_unit: "佳木斯公安处",
    user_department: "网络安全保卫支队",
    user_permission: "200,201,202",
  });
}).catch((err) => {
  console.log(err);
});
module.exports = User;
