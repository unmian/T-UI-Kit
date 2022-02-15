/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:24
 * @LastEditTime: 2022-02-04 12:37:53
 * @LastEditors: Quarter
 * @Description: 按钮组件入口
 * @FilePath: /t-ui-kit/packages/Icon/index.ts
 */
import Vue, { PluginObject } from "vue";
import Icon from "./src/Icon.vue";

export const IconPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-icon", Icon);
  },
};

export { Icon };