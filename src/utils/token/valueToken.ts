/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-16 14:48:39
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-16 15:04:05
 * @FilePath: /node-koa-mysql/src/utils/token/valueToken.ts
 * @Description:w 验证token是否有效的中间件
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Context, Next } from "koa";
import { jwtUtils } from "./token";
export const validToken = async (ctx: Context, next: Next) => {
  const bearerToken = ctx.request.headers["authorization"];
  const token = bearerToken && bearerToken.split(" ")[1];
  try {
    const tokenValue = jwtUtils.verifyToken(token);
    if (tokenValue) {
      await next();
    }
  } catch (error) {
    ctx.app.emit("error", "1003", ctx);
  }
};
