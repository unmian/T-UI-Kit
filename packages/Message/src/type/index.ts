/*
 * @Author: Quarter
 * @Date: 2022-01-05 02:19:25
 * @LastEditTime: 2022-02-04 12:18:05
 * @LastEditors: Quarter
 * @Description: 全局提示类型
 * @FilePath: /t-ui-kit/packages/Message/src/type/index.ts
 */

import Vue from "vue/types/umd";
import { CombinedVueInstance } from "vue/types/vue";

// 提示主题
export type MessageTheme = "info" | "success" | "warning" | "danger" | "question" | "loading";

// 提示定位
export type MessagePlacement = "top-left" | "top" | "top-right" | "left" | "center" | "right" | "bottom-left" | "bottom" | "bottom-right";

// 全局提示配置
export interface MessageConfig {
  theme?: MessageTheme; // 主题
  text?: string; // 消息内容
  duration?: number; // 显示时间
  placement?: MessagePlacement; // 定位
  closeBtn?: boolean; // 是否显示关闭按钮
  onClose?: () => void; // 关闭回调
}

// 全局提示函数式
export interface MessageFunc {
  (cfg?: MessageConfig): number; // 打开消息
  info: (text: string, cfg?: MessageConfig) => number; // 提示主题
  success: (text: string, cfg?: MessageConfig) => number; // 成功主题
  warning: (text: string, cfg?: MessageConfig) => number; // 警告主题
  danger: (text: string, cfg?: MessageConfig) => number; // 危险主题
  question: (text: string, cfg?: MessageConfig) => number; // 帮助主题
  loading: (text: string, cfg?: MessageConfig) => number; // 加载主题
  close: (index: number) => void; // 关闭指定消息
  clear: () => void; // 关闭全部消息
}

// 消息列表实例
export type MessageListInstance = {
  push(index: number, cfg: MessageConfig): void;
  remove(index: number): void;
  clear(): void;
} & Vue;