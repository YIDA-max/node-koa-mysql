import { Context, Next } from "koa";
import { connect } from "DB/index";
export const validateInput = async (ctx: Context, next: Next) => {
  // 在这里进行验证逻辑
  const { username, password, passwordCopy, email, phone } = ctx.request
    .body as any;
  if (password !== passwordCopy) {
    // 两次密码不一致
    ctx.app.emit("error", "1001", ctx);
    return;
  }
  if (!username || !password || !passwordCopy || !email || !phone) {
    // 全部都是必填的
    ctx.app.emit("error", "1001", ctx);
    return;
  }
  // 继续执行下一个中间件或路由处理函数
  await next();
};
export const queryUser = async (ctx: Context, next: Next) => {
  const sql =
    "SELECT * FROM `users` WHERE username = ? OR email = ? OR phone = ?";
  const { username, password, passwordCopy, email, phone } = ctx.request
    .body as any;
  const [data] = await connect.execute(sql, [username, email, phone]);
  // 只有查询的数据为零的时候才执行下一步注册,否则就是返回错误信息,用户名字,邮箱,手机号码都是唯一的
  console.log(" ", data);
  if (data.length === 0) {
    await next();
    return;
  }
  ctx.app.emit("error", "1002", ctx);
  return;
};
