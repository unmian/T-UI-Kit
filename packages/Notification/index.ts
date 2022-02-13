/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:23:05
 * @LastEditTime: 2022-01-25 02:49:57
 * @LastEditors: Quarter
 * @Description: 消息通知
 * @FilePath: /t-ui-kit/packages/Notification/index.ts
 */
import { App, Plugin } from "vue";
import Notification from "./src/Notification.vue";
import NotifyFunction from "./src/function/Notify";

export const NotificationPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-notification", Notification);
    app.config.globalProperties.$notify = NotifyFunction;
    app.provide("$notify", NotifyFunction);
  },
};

export { Notification, NotifyFunction };

export * from "./src/type";