/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-10 11:33:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-10 14:20:12
 * @FilePath: /node-koa-mysql/database/connect.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import mysql from "mysql2";
import Pool from "mysql2/typings/mysql/lib/Pool";
import config from "../config/MySql.config";
interface ConnectionPoll extends Pool {
  getConnection: typeof Pool.prototype.getConnection;
}

const useConnection = () => {
  const connectionPoll: ConnectionPoll = mysql.createPool(config);
  // 测试是否连接成功
  connectionPoll.getConnection((err, connection) => {
    if (err) {
      console.log("连接失败");
      return;
    }
    connection.connect((err) => {
      if (err) {
        console.log("连接失败");
        return;
      } else {
        console.log("连接成功");
      }
    });
  });
  // 使用promise包装
  const connection: ConnectionPoll = connectionPoll.promise();
  return { connection };
};
export default useConnection;
