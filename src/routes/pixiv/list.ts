/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-24 17:15:35
 * @FilePath: /node-koa-mysql/src/routes/pixiv/list.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import fs from "fs";
import { RouterContext } from "koa-router";
import axios from "axios";
import path from "path";
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
  const { Cookie, UserAgent, version } = ctx.request.body;
  // 在这里发起请求进行pixiv的进行请求
  const loginUrl = `https://www.pixiv.net/ajax/top/illust?mode=all&lang=zh&version=${version}`;
  const response = await axios.get(loginUrl, {
    headers: {
      Cookie,
      "User-Agent": UserAgent,
    },
  });
  //   console.log(response);
  const filePath = path.join(
    process.cwd(),
    "./src/routes/pixiv",
    "pixivlist.json"
  );
  const logoInfo = path.join(
    process.cwd(),
    "./src/routes/pixiv",
    "logoInfo.json"
  );
  // 把收集到的资源给写到文件中
  fs.promises.writeFile(filePath, JSON.stringify(response.data));
  // 把收集到的登录信息也进行存储
  fs.promises.writeFile(
    logoInfo,
    JSON.stringify({ Cookie, UserAgent, version })
  );
  const { body } = response.data;
  const tag = [];
  Object.keys(body.tagTranslation).forEach((key) => {
    tag.push(body.tagTranslation[key].zh);
  });
  ctx.body = {
    response: filePath,
    data: {
      tag: tag,
    },
  };
};
