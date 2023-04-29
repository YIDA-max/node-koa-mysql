/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-29 16:31:55
 * @FilePath: /node-koa-mysql/src/routes/users.ts
 * @Description: 路由入口之一
 */
const router = require("koa-router")();

router.prefix("/api");

router.get("/users", function (ctx, next) {
  ctx.body = "this is a users response!";
});

router.get("/users/bar", function (ctx, next) {
  ctx.body = "this is a users/bar response";
});
export default router;
