/*
 * @Author: Quarter
 * @Date: 2022-01-08 05:26:21
 * @LastEditTime: 2022-02-04 12:37:36
 * @LastEditors: Quarter
 * @Description: 标签组件入口文件
 * @FilePath: /t-ui-kit/packages/Tag/index.ts
 */
import Vue, { PluginObject } from "vue";
import Tag from "./src/Tag.vue";

export const TagPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-tag", Tag);
  },
};

export { Tag };

export * from "./src/type";