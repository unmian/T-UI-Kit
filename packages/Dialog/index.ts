/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:18:15
 * @LastEditTime: 2022-01-11 03:23:41
 * @LastEditors: Quarter
 * @Description: 弹窗入口
 * @FilePath: /t-ui-kit/packages/Dialog/index.ts
 */
import { App, Plugin } from "vue";
import Dialog from "./src/Dialog.vue";

export const DialogPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-dialog", Dialog);
  },
};

export { Dialog };

// export * from "./src/type";