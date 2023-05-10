/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-10 15:26:44
 * @FilePath: /node-koa-mysql/src/routes/pixiv/referer.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
const fs = require("fs");
import axios from "axios";
import path from "path";
import { Readable } from "stream";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            url: string;
          };
        };
      },
  next: () => any
) => {
  const { url } = ctx.request.body;
  const name = url.split("/").pop(); // 获取图片名称，与原代码类似
  const fileType = url.split(".").pop(); // 获取图片名称，与原代码类似
  // 因为浏览器无法自定义Referer,所以我们需要后端进行请求处理
  const response = await axios.get(url, {
    headers: { Referer: "https://app-api.pixiv.net/" },
    responseType: "arraybuffer", // ! 这里一定要设置,因为我们要像服务器说明我们要怎么样的数据,stream说明是直接返回一个可读文件 ,arraybuffer说明是一个二进制数组
  });
  const base64 = Buffer.from(response.data, "binary").toString("base64");
  const data = {
    base64,
    contentType: response.headers["content-type"],
  };
  // 存储图片
  // 向上递归寻找package.json文件
  function findRoot(currentDir) {
    if (fs.existsSync(path.join(currentDir, "package.json"))) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);

    if (parentDir === currentDir) {
      throw new Error("Could not find root directory");
    }

    return findRoot(parentDir);
  }
  // 这个就是我们的项目根目录
  const projectRoot = findRoot(__dirname);
  const imagesDir = path.join(projectRoot, "images");
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
  }
  // 现在你可以将图片保存在imagesDir目录中了
  const filePath = path.join(imagesDir, name + "." + fileType);
  fs.writeFileSync(filePath, response.data);

  ctx.body = data;
};
