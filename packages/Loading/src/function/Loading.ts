/*
 * @Author: Quarter
 * @Date: 2022-01-06 12:23:24
 * @LastEditTime: 2022-02-22 11:56:03
 * @LastEditors: Quarter
 * @Description: 加载全局方法
 * @FilePath: /t-ui-kit/packages/Loading/src/function/Loading.ts
 */
import Loading from "../Loading.vue";

import type { LoadingConfig, LoadingFunc, LoadingInstance } from "../type";
import type { HTMLRendererNode } from "packages/Global";

// 加载索引
let LOADING_COUNTER: number = 0;
// 加载异步任务
const LOADING_ASYNC = new Map<number, {
  timeout?: ReturnType<typeof setTimeout>,
  node: HTMLRendererNode<LoadingInstance>,
  onClose?: () => void,
}>();

/**
 * @description: 加载
 * @author: Quarter
 * @param {LoadingConfig} cfg 配置
 * @return
 */
const loading = (cfg?: LoadingConfig): number => {
  const { text, size, indicator, attach, onClose } = cfg || {};
  let { duration = 1000 } = cfg || {};
  // 参数验证
  if (!Number.isInteger(duration)) {
    duration = 1000;
  }
  // 计数器
  const counter = ++LOADING_COUNTER;
  // 渲染节点
  const node = document.createElement("div") as HTMLRendererNode<LoadingInstance>;
  node.vm = new Loading({
    propsData: {
      text,
      size,
      indicator,
      fullscreen: true,
      attach: attach || "body",
    },
  });
  node.vm?.$mount(node);
  // 延时关闭
  if (duration > 0) {
    const timeout = setTimeout(() => {
      LOADING_ASYNC.delete(counter);
      node.vm?.$destroy();
      if (typeof onClose === "function") {
        onClose();
      }
    }, duration);
    LOADING_ASYNC.set(counter, { timeout, node, onClose });
  } else {
    LOADING_ASYNC.set(counter, { node, onClose });
  }
  return counter;
};

/**
 * @description: 关闭指定加载
 * @author: Quarter
 * @param {number} index 加载索引
 * @return
 */
Reflect.set(loading, "close", (index: number) => {
  if (LOADING_ASYNC.has(index)) {
    const { timeout, node, onClose } = LOADING_ASYNC.get(index) || {};
    if (typeof timeout === "number") {
      clearTimeout(timeout);
    }
    if (node instanceof HTMLDivElement) {
      node.vm?.$destroy();
    }
    LOADING_ASYNC.delete(index);
    if (typeof onClose === "function") {
      onClose();
    }
  }
});



/**
 * @description: 清空所有加载
 * @author: Quarter
 * @return
 */
Reflect.set(loading, "clear", () => {
  LOADING_ASYNC.forEach(({ timeout, node, onClose }, index: number) => {
    if (typeof timeout === "number") {
      clearTimeout(timeout);
    }
    if (node instanceof HTMLDivElement) {
      node.vm?.$destroy();
    }
    LOADING_ASYNC.delete(index);
    if (typeof onClose === "function") {
      onClose();
    }
  });
});

export default loading as LoadingFunc;