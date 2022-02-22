/*
 * @Author: Quarter
 * @Date: 2022-01-06 12:16:01
 * @LastEditTime: 2022-02-22 11:57:53
 * @LastEditors: Quarter
 * @Description: 消息通知函数调用
 * @FilePath: /t-ui-kit/packages/Notification/src/function/Notify.ts
 */
import NotificationList from "../NotificationList.vue";

import type { HTMLRendererNode } from "packages/Global";
import type { NotifyConfig, NotifyFunc, NotificationPlacement, NotificationTheme, NotificationListInstance } from "../type";

// 通知计数器
let NOTIFICATION_COUNTER: number = 0;
// 通知索引
const NOTIFICATION_INDEX = new Map<number, NotificationPlacement>();
// 通知各列表
const NOTIFICATION_LIST = new Map<NotificationPlacement, HTMLRendererNode<NotificationListInstance>>();

/**
 * @description: 消息通知
 * @author: Quarter
 * @param {NotifyConfig} cfg 配置
 * @return {number}
 */
const notify = (cfg?: NotifyConfig): number => {
  let { placement = "top-right" } = cfg || {};
  // 参数校验
  const placementList: NotificationPlacement[] = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];
  if (!placementList.includes(placement)) {
    placement = "top-right";
  }
  // 计数器
  const counter = ++NOTIFICATION_COUNTER;
  // 获取或生成实例
  let list = NOTIFICATION_LIST.get(placement);
  if (!(list instanceof HTMLDivElement)) {
    const vm = new NotificationList({
      propsData: {
        placement,
      },
    });
    list = document.createElement("div") as HTMLRendererNode<NotificationListInstance>;
    list.vm = vm;
    vm.$mount(list);
    NOTIFICATION_LIST.set(placement, list);
    document.body.appendChild(vm.$el);
  }
  // 添加通知
  if (list.vm && list.vm?.push) {
    const { push } = list.vm;
    if (typeof push === "function") push(counter, cfg || {});
  }
  // 映射关系存储
  NOTIFICATION_INDEX.set(counter, placement);
  return counter;
};

/**
 * @description: 手动关闭
 * @author: Quarter
 * @param {number} index 索引
 * @return
 */
Reflect.set(notify, "close", (index: number) => {
  if (NOTIFICATION_INDEX.has(index)) {
    const placement = NOTIFICATION_INDEX.get(index) || "top-right";
    const list = NOTIFICATION_LIST.get(placement);
    if (list instanceof HTMLDivElement && list.vm?.remove) {
      const { remove } = list.vm;
      if (typeof remove === "function") remove(index);
    }
    NOTIFICATION_INDEX.delete(index);
  }
});

/**
 * @description: 手动关闭全部
 * @author: Quarter
 * @param {number} index 索引
 * @return
 */
Reflect.set(notify, "clear", () => {
  NOTIFICATION_LIST.forEach((list: HTMLRendererNode<NotificationListInstance>) => {
    if (list instanceof HTMLDivElement && list.vm && list.vm?.clear) {
      const { clear } = list.vm;
      if (typeof clear === "function") clear();
    }
  });
});

// 主题列表
const themes: NotificationTheme[] = ["info", "success", "warning", "danger"];

// 各主题快速调用
themes.forEach((theme: NotificationTheme) => {
  Reflect.set(notify, theme, (title: string, content: string, cfg?: NotifyFunc): number => {
    return notify(Object.assign({}, { theme, title, content }, cfg || {}));
  });
});

export default notify as NotifyFunc;