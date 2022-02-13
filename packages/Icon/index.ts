/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:24
 * @LastEditTime: 2022-02-13 02:30:42
 * @LastEditors: Quarter
 * @Description: 按钮组件入口
 * @FilePath: /t-ui-kit/packages/Icon/index.ts
 */
import { App, Plugin } from "vue";
import Icon from "./src/Icon.vue";

export const IconPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-icon", Icon);
  },
};

export { Icon };