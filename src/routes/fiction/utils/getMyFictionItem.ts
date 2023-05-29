/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-22 16:26:25
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-29 10:56:36
 * @FilePath: /node-koa-mysql/src/routes/fiction/utils/getMyFictionItem.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { getFileRoot } from "@/utils/File/fileRoot";
import path from "path";
import fs from "fs";
import koa from "koa";
import koaBody from "koa-body";
import { FICTIONLIST } from "./info";
// 获取项目的根目录
const rootPath = getFileRoot(__dirname);
const getMyFictionItem = async (fileName) => {
  const uploadPath = path.join(FICTIONLIST);
  const type = fileName.split(".").pop();
  // 根据文件名称获取文件路径
  const filePath = path.join(uploadPath, type, fileName); // 文件路径
  try {
    // 检查文件是否存在
    const exists = await fs.promises
      .access(filePath, fs.constants.F_OK)
      .then(() => true)
      .catch(() => false);
    if (exists) {
      // 读取文件内容
      // const fileContent = await fs.promises.readFile(filePath);
      return {
        code: 200,
        filePath,
        success: true,
      };
    } else {
      return {
        code: 404,
        data: "文件不存在",
        success: false,
      };
    }
  } catch (error) {
    return {
      code: 500,
      data: "服务器错误",
      success: false,
    };
  }
};

export { getMyFictionItem };
