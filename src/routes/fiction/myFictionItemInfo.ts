/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-29 15:22:49
 * @FilePath: /node-koa-mysql/src/routes/fiction/myFictionItemInfo.ts
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import { getMyFictionItem } from "./utils/getMyFictionItem";
const send = require("koa-send");
export default async (ctx: RouterContext, next: () => any) => {
  const { name } = ctx.request.body as { name: string };
  if (!name) {
    ctx.app.emit("error", "1005", ctx);
    return;
  }
  const { success, data: epub } = await getMyFictionItem(name);
  if (success) {
    ctx.body = {
      title: epub.metadata.title,
      creator: epub.metadata.creator,
      date: epub.metadata.date,
      toc: epub.toc,
      contents: epub.spine.contents,
    };
  }
};
