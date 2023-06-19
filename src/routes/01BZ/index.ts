/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-19 14:32:54
 * @FilePath: /node-koa-mysql/src/routes/01BZ/index.ts
 * @Description: 路由入口之一
 */
import Router from "koa-router";
import text from "./text";
const router = new Router();
router.prefix("/api");
// 一个获取第一版主小说列表的接口
router.post("/01BZ/text", text);
//
export default router;
