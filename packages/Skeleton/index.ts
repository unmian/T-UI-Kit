/*
 * @Author: Quarter
 * @Date: 2022-02-16 03:21:18
 * @LastEditTime: 2022-02-16 05:16:03
 * @LastEditors: Quarter
 * @Description: 骨架屏入口
 * @FilePath: /t-ui-kit/packages/Skeleton/index.ts
 */
import { App, Plugin } from "vue";
import Skeleton from "./src/Skeleton.vue";

export const SkeletonPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-skeleton", Skeleton);
  },
};

export { Skeleton };

export * from "./src/type";