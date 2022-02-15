/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:23:05
 * @LastEditTime: 2022-02-05 02:41:26
 * @LastEditors: Quarter
 * @Description: 消息通知
 * @FilePath: /t-ui-kit/packages/Notification/index.ts
 */
import Vue, { PluginObject } from "vue";
import Notification from "./src/Notification.vue";
import NotifyFunction from "./src/function/Notify";

export const NotificationPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-notification", Notification);
    vue.$notify = NotifyFunction;
    Object.defineProperties(vue.prototype, {
      $notify: {
        get() {
          return NotifyFunction;
        },
      },
    });
  },
};

export { Notification, NotifyFunction };

export * from "./src/type";