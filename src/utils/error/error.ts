/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-05-12 10:22:28
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-12 11:37:33
 * @FilePath: /node-koa-mysql/src/utils/error/error.ts
 * @Description: 错误处理
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { Context } from "koa";
export const error = (err, ctx: Context) => {
  let msg = "";
  switch (err) {
    case "1001":
      msg = "后端验证不通过";
      break;
    case "1002":
      msg = "数据库查询不通过";
      break;
  }
  ctx.body = {
    success: false,
    msg,
    code: err,
  };
};
