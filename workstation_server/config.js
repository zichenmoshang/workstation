const config = {
	System_config: {
		port: 2326,
	},
	Session_config: {
		key: 'koa:session',
		maxAge: 4000,
		autoCommit: true,
		overwrite: true,
		httpOnly: true,
		signed: true,
		rolling: true,
		renew: false,
	},
	MySQL_config: {
		host: 'localhost', //主机名
		port: 3306, //端口号，mysql默认3306
		username: 'root', //账号
		password: 'wy232519425', //密码
		database: 'workstation', //使用的哪个数据库名
	},
}

module.exports = config
