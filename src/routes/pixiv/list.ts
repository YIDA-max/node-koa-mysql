/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-25 14:48:57
 * @FilePath: /node-koa-mysql/src/routes/pixiv/list.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import fs from "fs";
import { RouterContext } from "koa-router";
import * as pixiv from "./pixivNode";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            Cookie: string;
            UserAgent: string;
            version: string;
          };
        };
      },
  next: () => any
) => {
  // 使用这个库进行登录 authenticate 模块下面的 login 就是登录,当然,需要自己手动的填写一些参数
  const { access_token, refresh_token, user } =
    await pixiv.authenticate.login();
  ctx.body = {
    access_token,
    refresh_token,
    user,
  };
};
