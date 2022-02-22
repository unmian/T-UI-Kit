/*
 * @Author: Quarter
 * @Date: 2022-01-04 08:21:31
 * @LastEditTime: 2022-02-22 11:49:57
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/packages/t-ui.d.ts
 */

import type { MessageFunc } from "./Message";
import type { Clipboard } from "./Clipboard";
import type { LoadingFunc } from "./Loading";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $clipboard: typeof Clipboard;
    $loading: LoadingFunc;
    $message: MessageFunc;
  }
}