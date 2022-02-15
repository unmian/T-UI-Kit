/*
 * @Author: Quarter
 * @Date: 2022-01-06 12:16:01
 * @LastEditTime: 2022-02-14 01:16:42
 * @LastEditors: Quarter
 * @Description: 消息通知函数调用
 * @FilePath: /t-ui-kit/packages/Notification/src/function/Notify.ts
 */
import { HTMLRendererNode } from "packages/Global";
import { createVNode, render } from "vue";
import { NotifyConfig, NotifyFunc, NotificationPlacement, NotificationTheme } from "../type";
import NotificationList from "../NotificationList.vue";

// 通知计数器
let NOTIFICATION_COUNTER: number = 0;
// 通知索引
const NOTIFICATION_INDEX = new Map<number, NotificationPlacement>();
// 通知各列表
const NOTIFICATION_LIST = new Map<NotificationPlacement, HTMLRendererNode>();

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
    const vm = createVNode(NotificationList, {
      placement,
    });
    list = document.createElement("div") as HTMLRendererNode;
    list.vm = vm;
    render(vm, list);
    NOTIFICATION_LIST.set(placement, list);
    document.body.appendChild(vm.el as Node);
  }
  // 添加通知
  if (list.vm && list.vm.component?.exposed) {
    const { push } = list.vm.component.exposed;
    if (typeof push === "function") push(counter, cfg);
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
    if (list instanceof HTMLDivElement && list.vm && list.vm.component?.exposed) {
      const { remove } = list.vm.component.exposed;
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
  NOTIFICATION_LIST.forEach((list: HTMLRendererNode) => {
    if (list instanceof HTMLDivElement && list.vm && list.vm.component?.exposed) {
      const { clear } = list.vm.component.exposed;
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

export default notify;