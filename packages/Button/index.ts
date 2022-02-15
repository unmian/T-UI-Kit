/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:24
 * @LastEditTime: 2022-02-04 12:38:02
 * @LastEditors: Quarter
 * @Description: 按钮组件入口
 * @FilePath: /t-ui-kit/packages/Button/index.ts
 */
import Vue, { PluginObject } from "vue";
import Button from "./src/Button.vue";

export const ButtonPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-button", Button);
  },
};

export { Button };

export * from "./src/type";