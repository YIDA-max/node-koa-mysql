/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-30 14:56:07
 * @FilePath: /node-koa-mysql/src/routes/Mooncell/index.ts
 * @Description:
 */
import Router from "koa-router";
import homePage from "./homePage";
const router = new Router();

// 这个路由的所有的前缀都是pixiv
router.prefix("/api");
// 主页接口
router.get("/monncell/homePage", homePage);
export default router;
