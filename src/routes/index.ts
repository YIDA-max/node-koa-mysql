/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-24 14:14:21
 * @FilePath: /node-koa-mysql/src/routes/index.ts
 * @Description: 路由主入口
 */
// const router = require("koa-router")();
import Router, { RouterContext } from "koa-router";

const router = new Router();

router.get("/", async (ctx: RouterContext | any) => {
  await ctx.render("index", {
    title: "Hello Koa 2!",
    username: "YIDA",
  });
});

router.get("/string", async (ctx, next) => {
  ctx.body = "koa2 string";
});

router.get("/json", async (ctx, next) => {
  ctx.body = {
    title: "koa2 json",
  };
});
router.get("/profile/:username", async (ctx, next) => {
  const { username } = ctx.params;
  ctx.body = {
    title: "this is profile page",
    username,
  };
});
router.get("/test", async (ctx, next) => {
  const { username } = ctx.params;
  ctx.body = {};
});
export default router;
