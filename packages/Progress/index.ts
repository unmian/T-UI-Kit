/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-02-13 02:36:56
 * @LastEditors: Quarter
 * @Description: 进度条入口
 * @FilePath: /t-ui-kit/packages/Progress/index.ts
 */
import { App, Plugin } from "vue";
import Progress from "./src/Progress.vue";

export const ProgressPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-progress", Progress);
  },
};

export { Progress };

export * from "./src/type";