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
      comment: "用户id",
    },
    user_username: {
      type: Sequelize.STRING(6),
      allowNull: false, // 是否允许为NULL
      unique: true,
      required: true,
      comment: "警号",
    },
    user_password: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: "登录密码",
      set: function (value) {
        this.setDataValue("user_password", md5(value));
      },
    },
    user_realname: {
      type: Sequelize.STRING(32),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: "真实姓名",
    },
    user_isActive: {
      type: Sequelize.BOOLEAN,
      allowNull: false, // 是否允许为NULL
      unique: false,
      comment: "用户是否激活",
    },
    user_unit: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      defaultValue: "佳木斯公安处",
      unique: false,
      required: true,
      comment: "所在单位",
    },
    user_department: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: "所属部门",
    },
    user_permission: {
      type: Sequelize.STRING(256),
      allowNull: true, // 是否允许为NULL
      unique: false,
      required: true,
      comment: "拥有权限",
    },
  },
  {
    freezeTableName: true, // freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名
    timestamps: true, // timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
  }
);

/**
 * User.sync() - 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)
 * User.sync({ force: true }) - 将创建表,如果表已经存在,则将其首先删除
 * User.sync({ alter: true }) - 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
 */
User.sync({ force: true })
  .then(function () {
    return User.bulkCreate([
      {
        user_username: "admin.",
        user_password: "123456",
        user_realname: "超级管理员",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0001",
        user_password: "123456",
        user_realname: "测试账户01",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0002",
        user_password: "123457",
        user_realname: "测试账户02",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0003",
        user_password: "123456",
        user_realname: "测试账户03",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0004",
        user_password: "123456",
        user_realname: "测试账户04",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0005",
        user_password: "123456",
        user_realname: "测试账户05",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0006",
        user_password: "123456",
        user_realname: "测试账户06",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0007",
        user_password: "123456",
        user_realname: "测试账户07",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0008",
        user_password: "123456",
        user_realname: "测试账户08",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0009",
        user_password: "123456",
        user_realname: "测试账户09",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
      {
        user_username: "cs0010",
        user_password: "123456",
        user_realname: "测试账户10",
        user_isActive: true,
        user_unit: "佳木斯公安处",
        user_department: "网络安全保卫支队",
        user_permission: "100,110,200,210,220",
      },
    ]);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = User;
