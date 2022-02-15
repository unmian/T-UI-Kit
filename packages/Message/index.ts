/*
 * @Author: Quarter
 * @Date: 2022-01-05 01:47:27
 * @LastEditTime: 2022-02-04 12:37:42
 * @LastEditors: Quarter
 * @Description: 全局提示组件入口
 * @FilePath: /t-ui-kit/packages/Message/index.ts
 */
import Vue, { PluginObject } from "vue";
import Message from "./src/Message.vue";
import MessageFunction from "./src/function/Message";

export const MessagePlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-message", Message);
    vue.$message = MessageFunction;
    Object.defineProperties(vue.prototype, {
      $message: {
        get() {
          return MessageFunction;
        },
      },
    });
  },
};

export { Message, MessageFunction };

export * from "./src/type";