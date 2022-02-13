/*
 * @Author: Quarter
 * @Date: 2022-01-10 06:12:49
 * @LastEditTime: 2022-01-10 10:51:22
 * @LastEditors: Quarter
 * @Description: 全局类型
 * @FilePath: /t-ui-kit/packages/Global/type/index.ts
 */
import { RendererElement, RendererNode, VNode } from "vue";

// HTML 渲染节点
export interface HTMLRendererNode extends HTMLDivElement {
  vm?: VNode<RendererNode, RendererElement, {
    [key: string]: any;
  }>;
}