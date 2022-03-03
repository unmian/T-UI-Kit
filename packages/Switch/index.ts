/*
 * @Author: Quarter
 * @Date: 2022-01-08 05:26:21
 * @LastEditTime: 2022-03-03 08:38:32
 * @LastEditors: Quarter
 * @Description: 标签组件入口文件
 * @FilePath: /t-ui-kit/packages/Switch/index.ts
 */
import Vue, { PluginObject } from "vue";
import Switch from "./src/Switch.vue";

export const SwitchPlugin: PluginObject<any> = {
  install: (vue: typeof Vue) => {
    vue.component("t-switch", Switch);
  },
};

export { Switch };

export * from "./src/type";