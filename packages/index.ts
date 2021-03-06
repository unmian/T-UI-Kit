/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:39:03
 * @LastEditTime: 2022-03-03 02:46:45
 * @LastEditors: Quarter
 * @Description: UI 组件入口文件
 * @FilePath: /t-ui-kit/packages/index.ts
 */

import { App, Plugin } from "vue";

import "./Style";

import { AlertPlugin } from "./Alert";
import { AvatarPlugin } from "./Avatar";
import { BadgePlugin } from "./Badge";
import { ButtonPlugin } from "./Button";
import { CheckboxPlugin } from "./Checkbox";
import { ClipboardPlugin } from "./Clipboard";
import { DialogPlugin } from "./Dialog";
import { DividerPlugin } from "./Divider";
import { DrawerPlugin } from "./Drawer";
import { IconPlugin } from "./Icon";
import { LoadingPlugin } from "./Loading";
import { MessagePlugin } from "./Message";
import { NotificationPlugin } from "./Notification";
import { PopconfirmPlugin } from "./Popconfirm";
import { PopupPlugin } from "./Popup";
import { ProgressPlugin } from "./Progress";
import { RadioPlugin } from "./Radio";
import { SkeletonPlugin } from "./Skeleton";
import { SwitchPlugin } from "./Switch";
import { TagPlugin } from "./Tag";

const TUIKitPlugin: Plugin = {
  install(app: App) {
    AlertPlugin.install?.(app);
    AvatarPlugin.install?.(app);
    BadgePlugin.install?.(app);
    ButtonPlugin.install?.(app);
    CheckboxPlugin.install?.(app);
    ClipboardPlugin.install?.(app);
    DialogPlugin.install?.(app);
    DividerPlugin.install?.(app);
    DrawerPlugin.install?.(app);
    IconPlugin.install?.(app);
    LoadingPlugin.install?.(app);
    MessagePlugin.install?.(app);
    NotificationPlugin.install?.(app);
    PopconfirmPlugin.install?.(app);
    PopupPlugin.install?.(app);
    ProgressPlugin.install?.(app);
    RadioPlugin.install?.(app);
    SkeletonPlugin.install?.(app);
    SwitchPlugin.install?.(app);
    TagPlugin.install?.(app);
  },
};

export default TUIKitPlugin;

export * from "./Alert";
export * from "./Avatar";
export * from "./Badge";
export * from "./Button";
export * from "./Checkbox";
export * from "./Clipboard";
export * from "./Dialog";
export * from "./Divider";
export * from "./Drawer";
export * from "./Icon";
export * from "./Loading";
export * from "./Message";
export * from "./Notification";
export * from "./Popconfirm";
export * from "./Popup";
export * from "./Progress";
export * from "./Radio";
export * from "./Skeleton";
export * from "./Switch";
export * from "./Tag";