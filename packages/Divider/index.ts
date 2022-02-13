/*
 * @Author: Quarter
 * @Date: 2022-01-11 05:45:53
 * @LastEditTime: 2022-01-11 09:01:04
 * @LastEditors: Quarter
 * @Description: 分割线入口
 * @FilePath: /t-ui-kit/packages/Divider/index.ts
 */
import { App, Plugin } from "vue";
import Divider from "./src/Divider.vue";

export const DividerPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-divider", Divider);
  },
};

export { Divider };

export * from "./src/type";