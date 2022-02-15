/*
 * @Author: Quarter
 * @Date: 2022-01-10 06:12:49
 * @LastEditTime: 2022-02-15 09:47:52
 * @LastEditors: Quarter
 * @Description: 全局类型
 * @FilePath: /t-ui-kit/packages/Global/src/type/index.ts
 */
import { RendererElement, RendererNode, VNode } from "vue";

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