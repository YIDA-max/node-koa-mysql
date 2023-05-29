/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-29 11:33:01
 * @FilePath: /node-koa-mysql/src/routes/fiction/myFictionItem.ts
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import { getMyFictionItem } from "./utils/getMyFictionItem";
const send = require("koa-send");
export default async (ctx: RouterContext, next: () => any) => {
  const name = ctx.query.name as any;
  const data = await getMyFictionItem(name);
  if (data.success) {
    ctx.attachment(data.filePath);
    ctx.set("Access-Control-Allow-Origin", "http://localhost:8000");
    ctx.set("Access-Control-Allow-Methods", "GET");
    ctx.set("Access-Control-Allow-Headers", "Content-Type");
    ctx.set("Access-Control-Allow-Credentials", "true");
    await send(ctx, data.filePath);
  } else {
    ctx.app.emit("error", "1005", ctx);
  }
};
