/*
 * @Author: Quarter
 * @Date: 2022-01-04 08:21:31
 * @LastEditTime: 2022-02-05 02:42:16
 * @LastEditors: Quarter
 * @Description: 类型描述
 * @FilePath: /t-ui-kit/packages/t-ui.d.ts
 */

import { MessageFunc } from "./Message";
import { ClipboardFunc } from "./Clipboard";
import { LoadingFunc } from "./Loading";
import { NotifyFunc } from "./Notification";

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