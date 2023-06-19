/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-23 10:14:56
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-06-16 16:37:59
 * @FilePath: /node-koa-mysql/src/routes/comics/index.ts
 * @Description: 路由入口之一
 */
import comicsHtml from "./comicsHtml";
import getComicList from "./getComicList";
import getComicsInfo from "./getComicsInfo";
import comicsTable from "./comicsTable";
import getComicsChapter from "./getComicsChapter";
import getComicsImg from "./getComicsImg";
import comicsDownload from "./comicsDownload";
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
// 漫画推荐搜索列表接口
router.get("/comics/comicsTable", comicsTable);
// 解析具体漫画信息的接口
router.post("/comics/getComicsInfo", getComicsInfo);
// 获取到具体的漫画章节(卷或者话)的具体信息的接口
router.post("/comics/getComicsChapter", getComicsChapter);
// 获取到具体某一张图片的接口
router.post("/comics/getComicsImg", getComicsImg);
// 下载漫画的接口
router.post("/comics/comicsDownload", comicsDownload);
export default router;
