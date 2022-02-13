/*
 * @Author: Quarter
 * @Date: 2022-01-08 05:26:21
 * @LastEditTime: 2022-01-11 02:17:13
 * @LastEditors: Quarter
 * @Description: 标签组件入口文件
 * @FilePath: /t-ui-kit/packages/Tag/index.ts
 */
import { App, Plugin } from "vue";
import Tag from "./src/Tag.vue";

export const TagPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-tag", Tag);
  },
};

export { Tag };

export * from "./src/type";