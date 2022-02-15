/*
 * @Author: Quarter
 * @Date: 2022-01-11 05:45:53
 * @LastEditTime: 2022-02-05 02:15:26
 * @LastEditors: Quarter
 * @Description: 分割线入口
 * @FilePath: /t-ui-kit/packages/Divider/index.ts
 */
import Vue, { PluginObject } from "vue";
import Divider from "./src/Divider.vue";

export const DividerPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-divider", Divider);
  },
};

export { Divider };

export * from "./src/type";