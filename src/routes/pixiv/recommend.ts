/*
 * @Author: YIDA-max 3136271519@qq.com
 * @Date: 2023-04-24 14:55:54
 * @LastEditors: YIDA-max 3136271519@qq.com
 * @LastEditTime: 2023-05-11 10:31:51
 * @FilePath: /node-koa-mysql/src/routes/pixiv/recommend.ts
 * @Description在这个文件我们只需要写业务逻辑中间件就可以了
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { RouterContext } from "koa-router";
import * as pixiv from "./pixivNode";
import axios from "axios";
export default async (
  ctx:
    | RouterContext & {
        request: {
          body: {
            loginInfo: {
              access_token: string;
              refresh_token: string;
              expire_time: number;
              user: any;
            };
            queryParameter: {
              contentType?: "ILLUSTRATION" | "MANGA" | "UGOIRA" | "NOVEL";
              includeRankingIllustration: "false" | "true";
              maxBookmarkIDForRecommend: number;
              minBookmarkIDForRecentIllustrations: number;
              offset: number;
              bookmarkIllustIDs?: Array<number> | any;
              includeRankingLabel: "false" | "true";
            };
          };
        };
      },
  next: () => any
) => {
  const { loginInfo, queryParameter } = ctx.request.body;
  const {
    contentType,
    includeRankingIllustration,
    maxBookmarkIDForRecommend,
    minBookmarkIDForRecentIllustrations,
    offset,
    bookmarkIllustIDs,
    includeRankingLabel,
  } = queryParameter;
  // 使用库进行获取推荐列表
  const data = await pixiv.fetch.recommendedIllustrations(loginInfo, {
    contentType, //表示获取的是插画类型的内容还是小说还是动图等
    includeRankingIllustration, //表示是否包含详细信息
    maxBookmarkIDForRecommend, // 表示推荐id的最大值
    minBookmarkIDForRecentIllustrations, // 表示推荐id的最小值
    offset, //表示从第几个开始返回,返回的位置
    bookmarkIllustIDs, //表示收藏的id,是一个数组,里面给传输的id
    includeRankingLabel, //如果是true返回的结果中会包含每个排行榜的标签信息，例如排行榜名称、更新时间、排行类型等。
  });
  ctx.body = { data };
};
