/*
 * @Author: Quarter
 * @Date: 2022-01-13 03:28:45
 * @LastEditTime: 2022-02-14 01:05:48
 * @LastEditors: Quarter
 * @Description: 消息通知类型
 * @FilePath: /t-ui-kit/packages/Notification/src/type/index.ts
 */

// 消息通知主题
export type NotificationTheme = "info" | "success" | "warning" | "danger";

// 提示定位
export type NotificationPlacement = "top-left" | "top-right" | "bottom-left" | "bottom-right";

// 消息通知配置
export interface NotifyConfig {
  theme?: NotificationTheme; // 主题
  icon?: string; // 图标
  title?: string; // 通知标题
  content?: string; // 通知内容
  duration?: number; // 显示时间
  placement?: NotificationPlacement; // 定位
  closeBtn?: boolean; // 是否显示关闭按钮
  onClose?: () => void; // 关闭回调
}

// 消息通知函数式
export interface NotifyFunc {
  (cfg?: NotifyConfig): number; // 打开通知
  info: (title: string, content: string, cfg?: NotifyConfig) => number; // 提示主题
  success: (title: string, content: string, cfg?: NotifyConfig) => number; // 成功主题
  warning: (title: string, content: string, cfg?: NotifyConfig) => number; // 警告主题
  danger: (title: string, content: string, cfg?: NotifyConfig) => number; // 危险主题
  close: (index: number) => void; // 关闭指定通知
  clear: () => void; // 关闭全部通知
}

// 通知列表实例
export type NotificationListInstance = {
  push(index: number, cfg: NotifyConfig): void;
  remove(index: number): void;
  clear(): void;
} & Vue;