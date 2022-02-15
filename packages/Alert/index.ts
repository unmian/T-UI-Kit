/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:16:37
 * @LastEditTime: 2022-02-05 01:04:37
 * @LastEditors: Quarter
 * @Description: 警告提醒入口文件
 * @FilePath: /t-ui-kit/packages/Alert/index.ts
 */
import Vue, { PluginObject } from "vue";
import Alert from "./src/Alert.vue";

export const AlertPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-alert", Alert);
  },
};

export { Alert };

export * from "./src/type";