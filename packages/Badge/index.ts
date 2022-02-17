/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:16:37
 * @LastEditTime: 2022-02-17 10:45:06
 * @LastEditors: Quarter
 * @Description: 徽标入口文件
 * @FilePath: /t-ui-kit/packages/Badge/index.ts
 */
import { App, Plugin } from "vue";
import Badge from "./src/Badge.vue";

export const BadgePlugin: Plugin = {
  install: (app: App) => {
    app.component("t-badge", Badge);
  },
};

export { Badge };

export * from "./src/type";