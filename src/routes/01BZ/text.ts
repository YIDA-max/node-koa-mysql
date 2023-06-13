/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-10 08:37:20
 * @FilePath: /node-koa-mysql/src/routes/01BZ/text.ts
 * @Description
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import axios from "axios";
import { load } from "cheerio";
import { text } from "./utils/text";
const puppeteer = require("puppeteer");
export default async (ctx: RouterContext, next: () => any) => {
  try {
    const { PHPSESSID, cf_clearance, url, name } = ctx.request.body as {
      PHPSESSID: string;
      cf_clearance: string;
      url: string;
      name: string;
    };
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
      headless: "new",
    });
    const page = await browser.newPage();
    // 设置Cookie 必须要有对应的cookie
    await page.setCookie(
      {
        name: "PHPSESSID",
        value: PHPSESSID,
        url,
      },
      {
        name: "cf_clearance",
        value: cf_clearance,
        url,
      }
    );
    await page.goto(url, {
      waitUntil: "networkidle2",
    });
    const content = await page.content();
    const $ = load(content);
    ctx.body = await text($, page, url, name);
    ctx.body = content;
  } catch (error) {
    console.log(" ", error);
    ctx.app.emit("error", "1006", ctx);
  }
};
