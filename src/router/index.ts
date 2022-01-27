/*
 * @Author: Quarter
 * @Date: 2021-12-29 08:45:31
 * @LastEditTime: 2022-01-11 09:02:50
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/src/router/index.ts
 */
import { createRouter, createWebHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "警告",
    name: "Alert",
    path: "/components/alert",
    component: () => import(`packages/Alert/docs/README.md`),
  },
  {
    title: "按钮",
    name: "Button",
    path: "/components/button",
    component: () => import(`packages/Button/docs/README.md`),
  },
  {
    title: "弹窗",
    name: "Dialog",
    path: "/components/dialog",
    component: () => import(`packages/Dialog/docs/README.md`),
  },
  {
    title: "分割线",
    name: "Divider",
    path: "/components/divider",
    component: () => import(`packages/Divider/docs/README.md`),
  },
  {
    title: "抽屉",
    name: "Drawer",
    path: "/components/drawer",
    component: () => import(`packages/Drawer/docs/README.md`),
  },
  {
    title: "图标",
    name: "Icon",
    path: "/components/icon",
    component: () => import(`packages/Icon/docs/README.md`),
  },
  {
    title: "加载",
    name: "Loading",
    path: "/components/loading",
    component: () => import(`packages/Loading/docs/README.md`),
  },
  {
    title: "全局提示",
    name: "Message",
    path: "/components/message",
    component: () => import(`packages/Message/docs/README.md`),
  },
  {
    title: "弹窗",
    name: "Notification",
    path: "/components/notification",
    component: () => import(`packages/Notification/docs/README.md`),
  },
  {
    title: "气泡确认框",
    name: "Popconfirm",
    path: "/components/popconfirm",
    component: () => import(`packages/Popconfirm/docs/README.md`),
  },
  {
    title: "弹出层",
    name: "Popup",
    path: "/components/popup",
    component: () => import(`packages/Popup/docs/README.md`),
  },
  {
    title: "进度条",
    name: "Progress",
    path: "/components/progress",
    component: () => import(`packages/Progress/docs/README.md`),
  },
  {
    title: "标签",
    name: "Tag",
    path: "/components/tag",
    component: () => import(`packages/Tag/docs/README.md`),
  },
];

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