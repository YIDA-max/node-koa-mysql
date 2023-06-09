/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-04 14:46:47
 * @FilePath: /node-koa-mysql/src/routes/pixiv/index.ts
 * @Description: 路由入口之一
 */
import logo from "./logo";
import refresh from "./refresh";
import recommend from "./recommend";
import referer from "./referer";
import illustration from "./illustration";
import Router from "koa-router";
const router = new Router();

// 这个路由的所有的前缀都是pixiv
router.prefix("/api");
// 登录接口
router.post("/pixiv/logo", logo);
// 刷新接口
router.post("/pixiv/refresh", refresh);
// 获取推荐接口
router.post("/pixiv/recommend", recommend);
// 获取展示图片的链接
router.post("/pixiv/referer", referer);
// 获取到对应的id的图片信息的接口
router.post("/pixiv/illustration", illustration);
export default router;
