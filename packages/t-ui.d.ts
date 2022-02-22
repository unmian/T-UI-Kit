/*
 * @Author: Quarter
 * @Date: 2022-01-04 08:21:31
 * @LastEditTime: 2022-02-22 11:49:43
 * @LastEditors: Quarter
 * @Description: 类型描述
 * @FilePath: /t-ui-kit/packages/t-ui.d.ts
 */

import type { MessageFunc } from "./Message";
import type { ClipboardFunc } from "./Clipboard";
import type { LoadingFunc } from "./Loading";
import type { NotifyFunc } from "./Notification";

declare module "vue/types/vue" {
  interface Vue {
    $clipboard?: ClipboardFunc;
    $loading?: LoadingFunc;
    $message?: MessageFunc;
    $notify?: NotifyFunc;
  }
  interface VueConstructor {
    $loading?: LoadingFunc;
    $clipboard?: ClipboardFunc;
    $message?: MessageFunc;
    $notify?: NotifyFunc;
  }
}
