/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-10 11:11:16
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-12 11:34:10
 * @FilePath: /node-koa-mysql/database/index.ts
 * @Description: 创建数据库连接
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import useConnection from "./connect";
const { connect } = useConnection();
export { connect };
