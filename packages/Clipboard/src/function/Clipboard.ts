/*
 * @Author: Quarter
 * @Date: 2022-01-04 07:42:03
 * @LastEditTime: 2022-02-03 02:52:54
 * @LastEditors: Quarter
 * @Description: 剪贴板📋
 * @FilePath: /t-ui-kit/packages/Clipboard/src/function/Clipboard.ts
 */

/**
 * @description: 剪贴板
 * @author: Quarter
 * @return
 */
const clipboard = {
  /**
   * @description: 复制到剪贴板
   * @author: Quarter
   * @param {string} str 字符串
   * @return
   */
  copy: (str: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      str = str.toString();
      if (navigator.clipboard !== undefined) {
        navigator.clipboard.writeText(str).then(resolve).catch(reject);
      } else {
        const currentFocus: Element | null = document.activeElement; // 当前获得焦点的元素，保存一下
        const clipboardTextarea = document.createElement("textarea");
        clipboardTextarea.setAttribute("id", "clipboard-input");
        clipboardTextarea.style.position = "absolute";
        clipboardTextarea.style.top = "0";
        clipboardTextarea.style.left = "0";
        clipboardTextarea.style.clipPath = "polygon(0 0, 0 0, 0 0, 0 0)";
        clipboardTextarea.value = str;
        document.body.appendChild(clipboardTextarea);
        try {
          clipboardTextarea.focus();
          clipboardTextarea.setSelectionRange(0, clipboardTextarea.value.length); // 获取光标起始位置到结束位置
        } catch (e) {
          clipboardTextarea.select(); // 这个是直接选中所有的，效果和上面一样
        }
        try {
          document.execCommand("copy", true); // 执行复制
          // @ts-ignore
          if (currentFocus && typeof currentFocus.focus === "function") {
            // @ts-ignore
            currentFocus.focus(); // 恢复焦点
          }
          clipboardTextarea.remove();
          resolve();
        } catch (e) {
          reject(e);
        }
      }
    });
  },
};

export default clipboard;