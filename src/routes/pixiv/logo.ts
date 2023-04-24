/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-24 16:33:30
 * @FilePath: /node-koa-mysql/src/routes/pixiv/logo.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import axios from "axios";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            username: string;
            password: string;
          };
        };
      },
  next: () => any
) => {
  const { username, password } = ctx.request.body;
  console.log(username, password);

  // 在这里发起请求进行pixiv的登录
  const loginUrl = "https://www.pixiv.net/login.php";
  const response = await axios.get(loginUrl);
  console.log(response);
  ctx.body = {
    data: "",
    response,
  };
};
