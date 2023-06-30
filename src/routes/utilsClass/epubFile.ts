/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-21 16:54:34
 * @FilePath: /node-koa-mysql/src/routes/utilsClass/epubFile.ts
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import axios from "axios";
import { load } from "cheerio";
import path from "path";
import fs from "fs";
import { createEpubFile } from "./utils/epubFile";
export default async (ctx: RouterContext, next: () => any) => {
  try {
    const data = await createEpubFile(
      "/Users/zhuhansong/Desktop/UGit/node-koa-mysql/comicsList/刃牙道"
    );
    ctx.body = {
      code: 200,
      data,
      success: true,
    };
  } catch (error) {
    console.log(" ", error);
    ctx.app.emit("error", "1006", ctx);
  }
};
