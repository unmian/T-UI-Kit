/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:39:03
 * @LastEditTime: 2022-02-14 09:10:57
 * @LastEditors: Quarter
 * @Description: UI 组件入口文件
 * @FilePath: /t-ui-kit/packages/index.ts
 */
import Vue, { PluginObject } from "vue";

import "./Style";

import { AlertPlugin } from "./Alert";
import { ButtonPlugin } from "./Button";
import { ClipboardPlugin } from "./Clipboard";
import { DividerPlugin } from "./Divider";
import { LoadingPlugin } from "./Loading";
import { IconPlugin } from "./Icon";
import { MessagePlugin } from "./Message";
import { NotificationPlugin } from "./Notification";
// import { PopconfirmPlugin } from "./Popconfirm";
// import { PopupPlugin } from "./Popup";
import { ProgressPlugin } from "./Progress";
import { TagPlugin } from "./Tag";

export const TUIPlugin: PluginObject<any> = {
  install: (vue: typeof Vue): void => {
    AlertPlugin.install(vue);
    ButtonPlugin.install(vue);
    ClipboardPlugin.install(vue);
    DividerPlugin.install(vue);
    IconPlugin.install(vue);
    LoadingPlugin.install(vue);
    MessagePlugin.install(vue);
    NotificationPlugin.install(vue);
    ProgressPlugin.install(vue);
    TagPlugin.install(vue);
  },
};

export default TUIPlugin;

export * from "./Alert";
export * from "./Button";
export * from "./Clipboard";
export * from "./Divider";
export * from "./Icon";
// export * from "./Loading";
export * from "./Message";
// export * from "./Notification";
// export * from "./Popconfirm";
// export * from "./Popup";
// export * from "./Progress";
export * from "./Tag";