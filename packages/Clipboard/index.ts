/*
 * @Author: Quarter
 * @Date: 2022-01-04 07:42:11
 * @LastEditTime: 2022-02-21 09:00:00
 * @LastEditors: Quarter
 * @Description: 剪贴板指令入口
 * @FilePath: /t-ui-kit/packages/Clipboard/index.ts
 */

import { App, Plugin } from "vue";
import Clipboard from "./src/clipboard";

export const ClipboardPlugin: Plugin = {
  install: (app: App) => {
    app.config.globalProperties.$clipboard = Clipboard;
    app.provide("$clipboard", Clipboard);
  },
};

export type ClipboardProperties = typeof Clipboard;

export { Clipboard };