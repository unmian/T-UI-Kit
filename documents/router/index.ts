/*
 * @Author: Quarter
 * @Date: 2022-02-01 08:00:22
 * @LastEditTime: 2022-02-15 10:37:16
 * @LastEditors: Quarter
 * @Description: 路由入口
 * @FilePath: /t-ui-kit/documents/router/index.ts
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import menus from "documents/assets/menus.json";

Vue.use(VueRouter);

const routes: RouteConfig[] = new Array();

menus.forEach(({ groupName, children }) => {
  if (Array.isArray(children)) {
    children.forEach(({ compName, compClassName }) => {
      routes.push({
        name: compClassName + "Doc",
        path: `/${groupName}/${compName}`,
        component: () => import(/* @vite-ignore */`/documents/docs/${compClassName}/README.md`),
      });
    });
  }
});

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;