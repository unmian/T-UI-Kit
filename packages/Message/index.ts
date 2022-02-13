/*
 * @Author: Quarter
 * @Date: 2022-01-05 01:47:27
 * @LastEditTime: 2022-01-10 06:20:40
 * @LastEditors: Quarter
 * @Description: 全局提示组件入口
 * @FilePath: /t-ui-kit/packages/Message/index.ts
 */
import { App, Plugin } from "vue";
import Message from "./src/Message.vue";
import MessageFunction from "./src/function/Message";

export const MessagePlugin: Plugin = {
  install: (app: App) => {
    app.component("t-message", Message);
    app.config.globalProperties.$message = MessageFunction;
    app.provide("$message", MessageFunction);
  },
};

export { Message, MessageFunction };

export * from "./src/type";