/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:16:37
 * @LastEditTime: 2022-02-05 01:05:00
 * @LastEditors: Quarter
 * @Description: 警告提醒入口文件
 * @FilePath: /t-ui-kit/packages/Alert/index.ts
 */
import { App, Plugin } from "vue";
import Alert from "./src/Alert.vue";

export const AlertPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-alert", Alert);
  },
};

export { Alert };

export * from "./src/type";