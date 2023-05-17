/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-17 14:51:06
 * @FilePath: /node-koa-mysql/src/routes/fiction/index.ts
 * @Description: 路由入口之一
 */
import books from "./books";
import search from "./search";
import Router from "koa-router";
const router = new Router();
router.prefix("/api");
// 一个获取小说列表的接口
router.get("/fiction/books/:current", books);
// 关键查询接口
router.get("/fiction/search", search);
export default router;
