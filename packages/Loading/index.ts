/*
 * @Author: Quarter
 * @Date: 2022-01-05 01:47:27
 * @LastEditTime: 2022-01-07 06:30:48
 * @LastEditors: Quarter
 * @Description: 全局提示组件入口
 * @FilePath: /t-ui-kit/packages/Loading/index.ts
 */
import { App, Plugin } from "vue";
import Loading from "./src/Loading.vue";
import LoadingFunction from "./src/function/Loading";
import LoadingDirective from "./src/directive/Loading";

export const LoadingPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-loading", Loading);
    app.config.globalProperties.$loading = LoadingFunction;
    app.provide("$loading", LoadingFunction);
    app.directive("loading", LoadingDirective);
  },
};

export { Loading, LoadingFunction };
export * from "./src/type";