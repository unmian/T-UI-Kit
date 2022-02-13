/*
 * @Author: Quarter
 * @Date: 2022-01-11 03:29:02
 * @LastEditTime: 2022-01-11 03:30:11
 * @LastEditors: Quarter
 * @Description: 弹出层入口
 * @FilePath: /t-ui-kit/packages/Popup/index.ts
 */
import { App, Plugin } from "vue";
import Popup from "./src/Popup.vue";

export const PopupPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-popup", Popup);
  },
};

export { Popup };

// export * from "./src/type";