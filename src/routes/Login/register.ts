/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-12 16:29:05
 * @FilePath: /node-koa-mysql/src/routes/Login/register.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Context, Next } from "koa";
import { connect } from "DB/index";
export default async (ctx: Context, next: Next) => {
  const { username, password, passwordCopy, email, phone } = ctx.request
    .body as any;
  const sql =
    "INSERT INTO users (username, password, email, phone) VALUES (?, ?, ?, ?)";
  connect.execute(sql, [username, password, email, phone]);
  ctx.body = { status: "ok", data: {}, success: true };
};
