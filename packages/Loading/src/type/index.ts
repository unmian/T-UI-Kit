/*
 * @Author: Quarter
 * @Date: 2022-01-05 03:22:51
 * @LastEditTime: 2022-02-15 09:02:09
 * @LastEditors: Quarter
 * @Description: 加载组件类型
 * @FilePath: /t-ui-kit/packages/Loading/src/type/index.ts
 */

import Vue from "vue";

// 加载尺寸
export type LoadingSize = "small" | "medium" | "large";

export interface LoadingProps {
  loading?: boolean; // 加载动画
  text?: string; // 文本内容
  indicator?: boolean; // 是否显示加载指示器
  size?: LoadingSize; // 加载的大小
  showOverlay?: boolean; // 是否显示包裹层
  fullscreen?: boolean; // 是否显示包裹层
  attach?: Vue | Element | (Vue | Element)[]; // 附加节点
}

// 加载函数配置
export interface LoadingConfig {
  text?: string; // 文本内容
  size?: LoadingSize; // 尺寸
  indicator?: boolean; // 是否显示指示器
  attach?: string | Vue | Element | (Vue | Element)[]; // 附加节点
  fullscreen?: boolean; // 是否全屏
  duration?: number; // 加载时间，单位 ms
  onClose?: () => void; // 关闭回调
}

// 加载函数
export interface LoadingFunc {
  (cfg?: LoadingConfig): number; // 打开加载
  close: (index: number) => void; // 关闭指定加载
  clear: () => void; // 清除所有加载
}

// 加载实例
export type LoadingInstance = {} & Vue;