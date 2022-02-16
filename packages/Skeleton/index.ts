/*
 * @Author: Quarter
 * @Date: 2022-02-16 03:21:18
 * @LastEditTime: 2022-02-16 08:46:06
 * @LastEditors: Quarter
 * @Description: 骨架屏入口
 * @FilePath: /t-ui-kit/packages/Skeleton/index.ts
 */
import Vue, { PluginObject } from "vue";
import Skeleton from "./src/Skeleton.vue";

export const SkeletonPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-skeleton", Skeleton);
  },
};

export { Skeleton };

export * from "./src/type";