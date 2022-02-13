/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:27:37
 * @LastEditTime: 2022-01-11 02:27:38
 * @LastEditors: Quarter
 * @Description: 气泡确认框入口
 * @FilePath: /t-ui-kit/packages/Popconfirm/index.ts
 */
import { App, Plugin } from "vue";
import Popconfirm from "./src/Popconfirm.vue";

export const PopconfirmPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-popconfirm", Popconfirm);
  },
};

export { Popconfirm };

// export * from "./src/type";