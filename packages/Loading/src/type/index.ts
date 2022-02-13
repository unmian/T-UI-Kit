/*
 * @Author: Quarter
 * @Date: 2022-01-05 03:22:51
 * @LastEditTime: 2022-01-10 09:21:14
 * @LastEditors: Quarter
 * @Description: 加载组件类型
 * @FilePath: /t-ui-kit/packages/Loading/src/type/index.ts
 */

// 加载尺寸
export type LoadingSize = "small" | "medium" | "large";

// 加载函数配置
export interface LoadingConfig {
  text?: string; // 文本内容
  size?: LoadingSize; // 尺寸
  indicator?: boolean; // 是否显示指示器
  showOverlay?: boolean; // 是否显示包裹层
  fullscreen?: boolean; // 是否全屏
  attach?: HTMLElement; // 附加节点
  duration?: number; // 加载时间，单位 ms
  onClose?: () => void; // 关闭回调
}

// 加载函数
export interface LoadingFunc {
  (cfg?: LoadingConfig): number; // 打开加载
  close: (index: number) => void; // 关闭指定加载
  clear: () => void; // 清除所有加载
}