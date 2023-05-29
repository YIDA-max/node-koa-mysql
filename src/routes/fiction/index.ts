/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-29 10:38:34
 * @FilePath: /node-koa-mysql/src/routes/fiction/index.ts
 * @Description: 路由入口之一
 */
import books from "./books";
import search from "./search";
import infoTextItem from "./infoTextItem";
import novelText from "./novelText";
import Router from "koa-router";
import upData from "./upData";
import myFictionList from "./myFictionList";
import myFictionItem from "./myFictionItem";
import { upload } from "./utils/koaMulterInfo";
const router = new Router();
router.prefix("/api");
// 一个获取小说列表的接口
router.get("/fiction/books/:current", books);
// 关键查询接口
router.get("/fiction/search", search);
// 获取到小说内容的接口
router.post("/fiction/content", infoTextItem);
// 获取到小说正文接口
router.post("/fiction/text", novelText);
// 上传对应图书的接口
router.post("/fiction/upData", upload, upData);
// 获取到文件夹下面的所有小说
router.get("/fiction/myFictionList", myFictionList);
// 查询对应的小说接口
router.get("/fiction/myFictionItem", myFictionItem);
export default router;
