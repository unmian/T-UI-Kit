/*
 * @Author: Quarter
 * @Date: 2022-01-10 06:12:49
 * @LastEditTime: 2022-02-24 02:48:11
 * @LastEditors: Quarter
 * @Description: 全局类型
 * @FilePath: /t-ui-kit/packages/Global/src/type/index.ts
 */
import { CSSProperties, RendererElement, RendererNode, VNode } from "vue";

// HTML 渲染节点
export interface HTMLRendererNode extends HTMLDivElement {
  vm?: VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>;
}

// HTML 指令节点
export interface HTMLDirectiveElement extends HTMLElement {
  $instance?: VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>;
  $container?: HTMLDivElement;
}

// 过渡节点
export interface TransitionElement extends HTMLElement {
  $tStyle?: CSSProperties;
}

// 钩子函数过渡效果
export interface HookTransition {
  onBeforeEnter?: (el: Element) => void;
  onEnter?: (el: Element, done: () => void) => void;
  onAfterEnter?: (el?: Element) => void;
  onEnterCancelled?: (el?: Element) => void;
  onBeforeLeave?: (el?: Element) => void;
  onLeave?: (el: Element, done: () => void) => void;
  onAfterLeave?: (el?: Element) => void;
  onLeaveCancelled?: (el?: Element) => void;
}