/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:39:03
 * @LastEditTime: 2022-02-16 05:16:38
 * @LastEditors: Quarter
 * @Description: UI 组件入口文件
 * @FilePath: /t-ui-kit/packages/index.ts
 */

import { App, Plugin } from "vue";

import "./Style";

import { AlertPlugin } from "./Alert";
import { ButtonPlugin } from "./Button";
import { ClipboardPlugin } from "./Clipboard";
import { DividerPlugin } from "./Divider";
import { IconPlugin } from "./Icon";
import { LoadingPlugin } from "./Loading";
import { MessagePlugin } from "./Message";
import { NotificationPlugin } from "./Notification";
import { PopconfirmPlugin } from "./Popconfirm";
import { PopupPlugin } from "./Popup";
import { ProgressPlugin } from "./Progress";
import { SkeletonPlugin } from "./Skeleton";
import { TagPlugin } from "./Tag";

const TUIKitPlugin: Plugin = {
  install(app: App) {
    AlertPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    ClipboardPlugin.install?.(app);
    DividerPlugin.install?.(app);
    IconPlugin.install?.(app);
    LoadingPlugin.install?.(app);
    MessagePlugin.install?.(app);
    NotificationPlugin.install?.(app);
    PopconfirmPlugin.install?.(app);
    PopupPlugin.install?.(app);
    ProgressPlugin.install?.(app);
    SkeletonPlugin.install?.(app);
    TagPlugin.install?.(app);
  },
};

export default TUIKitPlugin;

export * from "./Alert";
export * from "./Button";
export * from "./Clipboard";
export * from "./Divider";
export * from "./Icon";
export * from "./Loading";
export * from "./Message";
export * from "./Notification";
export * from "./Popconfirm";
export * from "./Popup";
export * from "./Progress";
export * from "./Skeleton";
export * from "./Tag";