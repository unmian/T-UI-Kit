/*
 * @Author: Quarter
 * @Date: 2022-01-04 07:42:11
 * @LastEditTime: 2022-02-04 12:38:09
 * @LastEditors: Quarter
 * @Description: 剪贴板指令入口
 * @FilePath: /t-ui-kit/packages/Clipboard/index.ts
 */

import Vue, { PluginObject } from "vue";
import ClipboardFunction from "./src/function/Clipboard";

export const ClipboardPlugin: PluginObject<object> = {
  install: (vue: typeof Vue) => {
    vue.$clipboard = ClipboardFunction;
    Object.defineProperties(vue.prototype, {
      $clipboard: {
        get() {
          return ClipboardFunction;
        },
      },
    });
  },
};

export { ClipboardFunction };

export * from "./src/type";