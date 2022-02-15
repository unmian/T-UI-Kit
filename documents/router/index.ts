/*
 * @Author: Quarter
 * @Date: 2021-12-29 08:45:31
 * @LastEditTime: 2022-02-15 10:43:42
 * @LastEditors: Quarter
 * @Description: 路由配置
 * @FilePath: /t-ui-kit/documents/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw, RouterOptions } from "vue-router";
import menus from "documents/assets/menus.json";

const routes: RouteRecordRaw[] = new Array();

menus.forEach(({ groupName, children }) => {
  if (Array.isArray(children)) {
    children.forEach(({ compName, compZhName, compClassName }) => {
      routes.push({
        name: compClassName + "Doc",
        path: `/${groupName}/${compName}`,
        component: () => import(/* @vite-ignore */`/documents/docs/${compClassName}/README.md`),
      });
    });
  }
});

const routerConfig = {
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;