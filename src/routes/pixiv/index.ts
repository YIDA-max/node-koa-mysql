/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-24 16:35:56
 * @FilePath: /node-koa-mysql/src/routes/pixiv/index.ts
 * @Description: 路由入口之一
 */
import logo from "./logo";
import list from "./list";
import Router from "koa-router";
const router = new Router();

// 这个路由的所有的前缀都是pixiv
router.prefix("/pixiv");
router.post("/logo", logo);
router.post("/list", list);

export default router;
