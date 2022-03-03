/*
 * @Author: Quarter
 * @Date: 2022-01-08 05:26:21
 * @LastEditTime: 2022-03-03 02:45:57
 * @LastEditors: Quarter
 * @Description: 标签组件入口文件
 * @FilePath: /t-ui-kit/packages/Switch/index.ts
 */
import { App, Plugin } from "vue";
import Switch from "./src/Switch.vue";

export const SwitchPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-switch", Switch);
  },
};

export { Switch };

export * from "./src/type";