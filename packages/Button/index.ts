/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:24
 * @LastEditTime: 2022-01-12 03:07:59
 * @LastEditors: Quarter
 * @Description: 按钮组件入口
 * @FilePath: /t-ui-kit/packages/Button/index.ts
 */
import { App, Plugin } from "vue";
import Button from "./src/Button.vue";

export const ButtonPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-button", Button);
  },
};

export { Button };

export * from "./src/type";