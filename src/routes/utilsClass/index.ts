import Router from "koa-router";
import epubFile from "./epubFile";
const router = new Router();
router.prefix("/api");
// 一个获取第一版主小说列表的接口
router.post("/utils/epubFile", epubFile);
//
export default router;
