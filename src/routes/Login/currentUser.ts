/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-04-29 20:04:46
 * @FilePath: /node-koa-mysql/src/routes/Login/currentUser.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了,不需要纠结其他的 模仿登录失败,看起来pixiv网站是需要某种密码进行验证才能登录的
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            username: string;
            password: string;
            type: string;
          };
        };
      },
  next: () => any
) => {
  ctx.body = {
    success: Math.random() > 0.1 ? true : false,
    data: {
      name: "Serati Ma",
      avatar:
        "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
      userid: "00000001",
      email: "antdesign@alipay.com",
      signature: "海纳百川，有容乃大",
      title: "交互专家",
      group: "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
      tags: [
        {
          key: "0",
          label: "很有想法的",
        },
        {
          key: "1",
          label: "专注设计",
        },
        {
          key: "2",
          label: "辣~",
        },
        {
          key: "3",
          label: "大长腿",
        },
        {
          key: "4",
          label: "川妹子",
        },
        {
          key: "5",
          label: "海纳百川",
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: "China",
      access: "admin",
      geographic: {
        province: {
          label: "浙江省",
          key: "330000",
        },
        city: {
          label: "杭州市",
          key: "330100",
        },
      },
      address: "西湖区工专路 77 号",
      phone: "0752-268888888",
    },
  };
};
