/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-11 10:42:11
 * @FilePath: /node-koa-mysql/src/routes/Login/login.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            username: string;
            password: string;
            type: string;
          };
        };
      },
  next: () => any
) => {
  const { username, password, type } = ctx.request.body;
  if (password === "admin" && username === "admin") {
    ctx.body = {
      status: "ok",
      type,
      currentAuthority: "admin",
    };
    return;
  }
  if (password === "user" && username === "user") {
    ctx.body = {
      status: "ok",
      type,
      currentAuthority: "user",
    };

    return;
  }
  if (type === "mobile") {
    ctx.body = {
      status: "ok",
      type,
      currentAuthority: "admin",
    };
    return;
  }
  ctx.body = {
    status: "error",
    type,
    currentAuthority: "guest",
  };
  ctx.body = {
    data: "error",
    username,
    password,
  };
};
