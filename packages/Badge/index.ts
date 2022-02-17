/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:16:37
 * @LastEditTime: 2022-02-17 11:36:19
 * @LastEditors: Quarter
 * @Description: 徽标入口文件
 * @FilePath: /t-ui-kit/packages/Badge/index.ts
 */
import Vue, { PluginObject } from "vue";
import Badge from "./src/Badge.vue";

export const BadgePlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-badge", Badge);
  },
};

export { Badge };

export * from "./src/type";