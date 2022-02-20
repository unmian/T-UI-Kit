/*
 * @Author: Quarter
 * @Date: 2022-01-11 06:23:18
 * @LastEditTime: 2022-02-19 13:15:14
 * @LastEditors: Quarter
 * @Description: 抽屉入口
 * @FilePath: /t-ui-kit/packages/Drawer/index.ts
 */
import Vue, { PluginObject } from "vue";
import Drawer from "./src/Drawer.vue";

export const DrawerPlugin: PluginObject<object> = {
  install: (vue: typeof Vue): void => {
    vue.component("t-drawer", Drawer);
  },
};

export { Drawer };

export * from "./src/type";