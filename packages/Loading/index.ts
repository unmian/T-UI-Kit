/*
 * @Author: Quarter
 * @Date: 2022-01-05 01:47:27
 * @LastEditTime: 2022-02-15 08:46:22
 * @LastEditors: Quarter
 * @Description: 全局提示组件入口
 * @FilePath: /t-ui-kit/packages/Loading/index.ts
 */
import Vue, { PluginObject } from "vue";
import Loading from "./src/Loading.vue";
import LoadingFunction from "./src/function/Loading";
import LoadingDirective from "./src/directive/Loading";

export const LoadingPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.component("t-loading", Loading);
    vue.$loading = LoadingFunction;
    Object.defineProperties(vue.prototype, {
      $loading: {
        get() {
          return LoadingFunction;
        },
      },
    });
    vue.directive("loading", LoadingDirective);
  },
};

export { Loading, LoadingFunction };
export * from "./src/type";