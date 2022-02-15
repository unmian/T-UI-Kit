/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-02-05 02:39:51
 * @LastEditors: Quarter
 * @Description: 进度条入口
 * @FilePath: /t-ui-kit/packages/Progress/index.ts
 */
import Vue, { PluginObject } from "vue";
import Progress from "./src/Progress.vue";

export const ProgressPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-progress", Progress);
  },
};

export { Progress };

export * from "./src/type";