/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-06 10:45:47
 * @FilePath: /node-koa-mysql/src/routes/comics/index.ts
 * @Description: 路由入口之一
 */
import comicsHtml from "./comicsHtml";
import getComicList from "./getComicList";
import search from "./search";
import Router from "koa-router";
const router = new Router();
router.prefix("/api");
// 一个获取小说列表的接口
router.get("/comics/comicsHtml", comicsHtml);
// 获取到漫画列表主页的接口
router.get("/comics/getComicList", getComicList);
// 漫画搜索接口
router.post("/comics/search", search);
export default router;
