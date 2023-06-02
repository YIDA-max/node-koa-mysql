/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-01 11:18:35
 * @FilePath: /node-koa-mysql/src/routes/comics/index.ts
 * @Description: 路由入口之一
 */
import comicsHtml from "./comicsHtml";
import Router from "koa-router";
const router = new Router();
router.prefix("/api");
// 一个获取小说列表的接口
router.post("/comics/comicsHtml", comicsHtml);
export default router;
