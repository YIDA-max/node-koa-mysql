import { getFileRoot } from "@/utils/File/fileRoot";
import path from "path";
import fs from "fs";
import koaBody from "koa-body";
import { FICTIONLIST } from "./info";
// 获取项目的根目录
const rootPath = getFileRoot(__dirname);
// 创建 'uploads' 文件夹
const uploadPath = path.join(rootPath, FICTIONLIST);
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}
const upload = koaBody({
  multipart: true, // 启用 multipart/form-data 解析
  formidable: {
    uploadDir: uploadPath, // 设置上传文件存储的目录
    keepExtensions: true, // 保持上传文件的扩展名
    multiples: true, // 允许多个文件上传
    onFileBegin: (name, file) => {
      const fileName = file.originalFilename; // 自定义文件名
      const type = file.originalFilename.split(".").pop();
      const typeFolder = `${uploadPath}/${type}`; // 根据文件类型创建文件夹路径
      // 检查文件夹是否存在，如果不存在则创建
      if (!fs.existsSync(typeFolder)) {
        fs.mkdirSync(typeFolder, { recursive: true });
      }
      file.filepath = `${typeFolder}/${fileName}`; // 设置文件保存路径
    },
  },
});
export { upload };
