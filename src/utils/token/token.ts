/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-16 14:09:01
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-16 14:29:41
 * @FilePath: /node-koa-mysql/src/utils/token/token.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import fs from "fs";
import jwt from "jsonwebtoken";
import { getFileRoot } from "@/utils/File/fileRoot";
// 从文件系统中读取私钥和公钥，你可以根据实际的文件路径进行修改
const PRIVATE_KEY = fs.readFileSync(
  `${getFileRoot(__dirname)}/keys/private_key.pem`,
  "utf8"
);
const PUBLIC_KEY = fs.readFileSync(
  `${getFileRoot(__dirname)}/keys/public_key.pem`,
  "utf8"
);
const jwtUtils = {
  generateToken: (payload: any, expiresIn = "2h") => {
    const signOptions = {
      expiresIn,
      algorithm: "RS256", // 使用 'RS256' 算法
    };
    return jwt.sign(payload, PRIVATE_KEY, signOptions);
  },
  verifyToken: (token: string) => {
    const verifyOptions = {
      algorithms: ["RS256"], // 使用 'RS256' 算法
    };
    try {
      return jwt.verify(token, PUBLIC_KEY, verifyOptions);
    } catch (err) {
      console.error(err);
      return null;
    }
  },
};
export { jwtUtils };
