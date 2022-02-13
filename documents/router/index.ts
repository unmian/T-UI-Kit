/*
 * @Author: Quarter
 * @Date: 2021-12-29 08:45:31
 * @LastEditTime: 2022-02-04 12:57:09
 * @LastEditors: Quarter
 * @Description: 路由配置
 * @FilePath: /t-ui-kit/documents/router/index.ts
 */
import { createRouter, createWebHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "警告",
    name: "Alert",
    path: "/components/alert",
    component: () => import(`documents/docs/Alert/README.md`),
  },
  {
    title: "按钮",
    name: "Button",
    path: "/components/button",
    component: () => import(`documents/docs/Button/README.md`),
  },
  {
    title: "弹窗",
    name: "Dialog",
    path: "/components/dialog",
    component: () => import(`documents/docs/Dialog/README.md`),
  },
  {
    title: "分割线",
    name: "Divider",
    path: "/components/divider",
    component: () => import(`documents/docs/Divider/README.md`),
  },
  {
    title: "抽屉",
    name: "Drawer",
    path: "/components/drawer",
    component: () => import(`documents/docs/Drawer/README.md`),
  },
  {
    title: "图标",
    name: "Icon",
    path: "/components/icon",
    component: () => import(`documents/docs/Icon/README.md`),
  },
  {
    title: "加载",
    name: "Loading",
    path: "/components/loading",
    component: () => import(`documents/docs/Loading/README.md`),
  },
  {
    title: "全局提示",
    name: "Message",
    path: "/components/message",
    component: () => import(`documents/docs/Message/README.md`),
  },
  {
    title: "弹窗",
    name: "Notification",
    path: "/components/notification",
    component: () => import(`documents/docs/Notification/README.md`),
  },
  {
    title: "气泡确认框",
    name: "Popconfirm",
    path: "/components/popconfirm",
    component: () => import(`documents/docs/Popconfirm/README.md`),
  },
  {
    title: "弹出层",
    name: "Popup",
    path: "/components/popup",
    component: () => import(`documents/docs/Popup/README.md`),
  },
  {
    title: "进度条",
    name: "Progress",
    path: "/components/progress",
    component: () => import(`documents/docs/Progress/README.md`),
  },
  {
    title: "标签",
    name: "Tag",
    path: "/components/tag",
    component: () => import(`documents/docs/Tag/README.md`),
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