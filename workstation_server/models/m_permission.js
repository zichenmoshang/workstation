const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Permission = sequelize.define(
  "ws_permission",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true, // 是否为主键
      allowNull: false, // 是否允许为NULL
      unique: true, // 是否不可重复
      required: true, // 是否允许关联
      autoIncrement: true, // 没有这个时插入返回是id是null
      comment: "主键id",
    },
    permission_id: {
      type: Sequelize.STRING(8),
      allowNull: false, // 是否允许为NULL
      unique: true, // 是否不可重复
      required: true, // 是否允许关联
      comment: "权限id",
    },
    permission_name: {
      type: Sequelize.STRING(32),
      allowNull: false, // 是否允许为NULL
      unique: true,
      required: true,
      comment: "权限名称",
    },
    permission_icon: {
      type: Sequelize.STRING(64),
      allowNull: false, // 是否允许为NULL
      unique: false,
      required: true,
      comment: "权限图标",
    },
    permission_parent: {
      type: Sequelize.INTEGER,
      allowNull: false, // 是否允许为NULL
      defaultValue: 0,
      unique: false,
      required: true,
      comment: "上级权限id",
    },
    permission_path: {
      type: Sequelize.STRING(64),
      allowNull: true, // 是否允许为NULL
      defaultValue: null, // 默认值
      unique: true,
      comment: "权限路径",
    },
    permission_level: {
      type: Sequelize.INTEGER,
      allowNull: false, // 是否允许为NULL
      defaultValue: 1,
      unique: false,
      required: true,
      comment: "权限等级",
    },
  },
  {
    freezeTableName: true, // freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名
    timestamps: true, // timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
  }
);

//将创建表,如果表已经存在,则不做操作
// Permission.sync();
//将创建表,如果表已经存在,则将其首先删除
Permission.sync({ force: true }).then(function () {
  return Permission.bulkCreate([
    {
      permission_id: 100,
      permission_name: "用户管理",
      permission_icon: "iconbaobiaofenxi",
      permission_parent: 0,
      permission_path: null,
      permission_level: 0,
    },
    {
      permission_id: 110,
      permission_name: "用户列表",
      permission_icon: "iconcaidanguanli",
      permission_parent: 100,
      permission_path: "getuserlist",
      permission_level: 1,
    },
    {
      permission_id: 200,
      permission_name: "在线答题",
      permission_icon: "icongerenxinxi",
      permission_parent: 0,
      permission_path: null,
      permission_level: 0,
    },
    {
      permission_id: 210,
      permission_name: "试卷管理",
      permission_icon: "icongerenxinxi",
      permission_parent: 200,
      permission_path: "testpapermanager",
      permission_level: 1,
    },
    {
      permission_id: 220,
      permission_name: "试卷列表",
      permission_icon: "icongerenxinxi",
      permission_parent: 200,
      permission_path: "testpapers",
      permission_level: 1,
    },
  ]);
});
module.exports = Permission;
