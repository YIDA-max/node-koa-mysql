/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-29 20:11:43
 * @FilePath: /node-koa-mysql/src/routes/pixiv/list.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了
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
            refresh_token: string;
          };
        };
      },
  next: () => any
) => {
  const oldRefresh_token = ctx.request.body.refresh_token;
  // 使用这个库进行登录 authenticate 模块下面的refresh,这个是刷新token的方法
  const { access_token, refresh_token } = await pixiv.authenticate.refresh(
    oldRefresh_token
  );
  ctx.body = { access_token, refresh_token };
};
