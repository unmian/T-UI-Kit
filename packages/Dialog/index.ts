/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:18:15
 * @LastEditTime: 2022-02-24 05:32:08
 * @LastEditors: Quarter
 * @Description: 弹窗入口
 * @FilePath: /t-ui-kit/packages/Dialog/index.ts
 */
import Vue, { PluginObject } from "vue";
import Dialog from "./src/Dialog.vue";

export const DialogPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-dialog", Dialog);
  },
};

export { Dialog };

export * from "./src/type";