/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-23 16:59:20
 * @FilePath: /node-koa-mysql/routes/users.js
 * @Description: 路由入口之一
 */
const router = require("koa-router")();

router.prefix("/users");

router.get("/", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});

export default router;
