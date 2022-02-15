/*
 * @Author: Quarter
 * @Date: 2022-01-06 12:16:01
 * @LastEditTime: 2022-02-14 01:14:32
 * @LastEditors: Quarter
 * @Description: 全局提示函数调用
 * @FilePath: /t-ui-kit/packages/Message/src/function/Message.ts
 */

import { HTMLRendererNode } from "packages/Global";
import { MessageConfig, MessageFunc, MessageListInstance, MessagePlacement, MessageTheme } from "../type";
import MessageList from "../MessageList.vue";

// 消息计数器
let MESSAGE_COUNTER: number = 0;
// 消息索引
const MESSAGE_INDEX = new Map<number, MessagePlacement>();
// 消息各列表
const MESSAGE_LIST = new Map<MessagePlacement, HTMLRendererNode<MessageListInstance>>();

/**
 * @description: 全局提示
 * @author: Quarter
 * @param {MessageConfig} cfg 配置
 * @return {number}
 */
const message = (cfg?: MessageConfig): number => {
  let { placement = "top" } = cfg || {};
  // 参数校验
  const placementList: MessagePlacement[] = [
    "top-left",
    "top",
    "top-right",
    "left",
    "center",
    "right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ];
  if (!placementList.includes(placement)) {
    placement = "top";
  }
  // 计数器
  const counter = ++MESSAGE_COUNTER;
  // 获取或生成实例
  let list = MESSAGE_LIST.get(placement);
  if (!(list instanceof HTMLDivElement)) {
    const vm = new MessageList({
      propsData: {
        placement,
      },
    });
    list = document.createElement("div") as HTMLRendererNode<MessageListInstance>;
    list.vm = vm;
    vm.$mount(list);
    MESSAGE_LIST.set(placement, list);
    document.body.appendChild(vm.$el);
  }
  // 添加消息
  if (list.vm && list.vm?.push) {
    const { push } = list.vm;
    if (typeof push === "function") push(counter, cfg || {});
  }
  // 保存映射关系
  MESSAGE_INDEX.set(counter, placement);
  return counter;
};

/**
 * @description: 手动关闭
 * @author: Quarter
 * @param {number} index 索引
 * @return
 */
Reflect.set(message, "close", (index: number) => {
  if (MESSAGE_INDEX.has(index)) {
    const placement = MESSAGE_INDEX.get(index) || "top";
    const list = MESSAGE_LIST.get(placement);
    if (list instanceof HTMLDivElement && list.vm?.remove) {
      const { remove } = list.vm;
      if (typeof remove === "function") remove(index);
    }
    MESSAGE_INDEX.delete(index);
  }
});

/**
 * @description: 手动关闭全部
 * @author: Quarter
 * @param {number} index 索引
 * @return
 */
Reflect.set(message, "clear", () => {
  MESSAGE_LIST.forEach((list: HTMLRendererNode<MessageListInstance>) => {
    if (list instanceof HTMLDivElement && list.vm?.clear) {
      const { clear } = list.vm;
      if (typeof clear === "function") clear();
    }
  });
});

// 主题列表
const themes: MessageTheme[] = ["info", "success", "warning", "danger", "question", "loading"];

// 各主题快速调用
themes.forEach((theme: MessageTheme) => {
  Reflect.set(message, theme, (text: string, cfg?: MessageConfig): number => {
    return message(Object.assign({}, { theme, text }, cfg || {}));
  });
});

export default message as MessageFunc;