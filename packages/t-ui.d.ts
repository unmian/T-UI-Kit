/*
 * @Author: Quarter
 * @Date: 2022-01-04 08:21:31
 * @LastEditTime: 2022-01-10 09:17:55
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/packages/t-ui.d.ts
 */

import { MessageFunc } from "./Message";
import { Clipboard } from "./Clipboard";
import { LoadingFunc } from "./Loading";

declare module "@vue/runtime-core" {
  export interface ComponentCustomProperties {
    $clipboard: typeof Clipboard;
    $loading: LoadingFunc;
    $message: MessageFunc;
  }
}