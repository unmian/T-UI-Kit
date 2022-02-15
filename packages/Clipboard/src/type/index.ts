/*
 * @Author: Quarter
 * @Date: 2022-02-03 02:51:09
 * @LastEditTime: 2022-02-03 02:53:56
 * @LastEditors: Quarter
 * @Description: 剪贴板类型
 * @FilePath: /t-ui-kit/packages/Clipboard/src/type/index.ts
 */

export interface ClipboardFunc {
  copy: (str: string) => Promise<void>;
}