/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-12 15:22:02
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-12 15:23:13
 * @FilePath: /node-koa-mysql/src/routes/Login/utils/login.ts
 * @Description: login的中间件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Context, Next } from "koa";
export const validLogin = async (ctx: Context, next: Next) => {
  // 在这里进行验证逻辑
  const { username, password } = ctx.request.body as any;
  if (!username || !password) {
    // 全部都是必填的
    ctx.app.emit("error", "1001", ctx);
    return;
  }
  // 继续执行下一个中间件或路由处理函数
  await next();
};
