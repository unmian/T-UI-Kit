/*
 * @Author: Quarter
 * @Date: 2022-02-23 02:50:10
 * @LastEditTime: 2022-02-23 07:34:00
 * @LastEditors: Quarter
 * @Description: 对话框类型
 * @FilePath: /t-ui-kit/packages/Dialog/src/type/index.ts
 */

import type { ButtonTheme, ButtonVariant } from "packages/Button";

// 对话框定位
export type DialogPlacement = "top" | "center";

// 对话框风格
export type DialogTheme = "default" | "info" | "warning" | "danger" | "success";

// 对话框位置
export interface DialogPosition {
  x: number; // x 坐标
  y: number; // y 坐标
}

// 对话框尺寸
export interface DialogSize {
  width: number; // x 坐标
  height: number; // y 坐标
}

// 对话框按钮配置
export interface DialogButtonConfig {
  theme?: ButtonTheme; // 按钮主题
  variant?: ButtonVariant; // 按钮变体
  loading?: boolean; // 是否加载中
  content?: string; // 按钮文本
}