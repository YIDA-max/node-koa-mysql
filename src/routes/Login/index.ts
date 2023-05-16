/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-16 15:50:34
 * @FilePath: /node-koa-mysql/src/routes/Login/index.ts
 * @Description: 路由入口之一
 */
import login from "./login";
import currentUser from "./currentUser";
import Router from "koa-router";
import outLogin from "./outLogin";
import register from "./register";
import { validateInput, queryUser } from "./utils/register";
import { validLogin } from "./utils/login";
import { validToken } from "@/utils/token/valueToken";
const router = new Router();
router.prefix("/api");
// 这个是登录接口,返回的值里面有status:"ok",type,currentAuthority: "admin",其中currentAuthority: "admin"是权限 status:"ok"是登录状态
router.post("/login/account", login);
// 这个是获取权限的接口,每次都会进行请求的,如果权限不够,那么就前端无法展示特定的东西
router.get("/currentUser", validToken, currentUser);
// 这个是退出登录接口
router.post("/login/outLogin", outLogin);
// 这个是注册登录接口
router.post("/login/register", validateInput, queryUser, register);
export default router;
