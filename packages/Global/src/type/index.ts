/*
 * @Author: Quarter
 * @Date: 2022-01-10 06:12:49
 * @LastEditTime: 2022-02-15 08:49:31
 * @LastEditors: Quarter
 * @Description: 全局类型
 * @FilePath: /t-ui-kit/packages/Global/src/type/index.ts
 */
import Vue from "vue";

// HTML 渲染节点
export interface HTMLRendererNode<T extends Vue> extends HTMLDivElement {
  vm?: T;
}

// HTML 指令节点
export interface HTMLDirectiveElement<T extends Vue> extends HTMLElement {
  $instance?: T;
  $container?: HTMLDivElement;
}