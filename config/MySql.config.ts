/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-10 10:12:44
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-10 14:28:15
 * @FilePath: /node-koa-mysql/config/MySql.config.ts
 * @Description:数据库配置文件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
export default {
  host: process.env.CONNECT_HOST || "localhost",
  port: (process.env.CONNECT_PROT || 3306) as number,
  user: process.env.CONNECT_USER || "root",
  password: process.env.CONNECT_PASSWORD || "123456",
  database: process.env.CONNECT_DATABASE || "MySqlDB",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
