/*
 * @Author: Quarter
 * @Date: 2022-01-11 06:23:18
 * @LastEditTime: 2022-02-13 02:29:19
 * @LastEditors: Quarter
 * @Description: 抽屉入口
 * @FilePath: /t-ui-kit/packages/Drawer/index.ts
 */
import { App, Plugin } from "vue";
import Drawer from "./src/Drawer.vue";

export const DrawerPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-drawer", Drawer);
  },
};

export { Drawer };

// export * from "./src/type";