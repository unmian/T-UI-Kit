/*
 * @Author: Quarter
 * @Date: 2022-01-07 06:17:52
 * @LastEditTime: 2022-02-24 06:16:32
 * @LastEditors: Quarter
 * @Description: 加载指令
 * @FilePath: /t-ui-kit/packages/Loading/src/directive/Loading.ts
 */
import { HTMLDirectiveElement } from "packages/Global";
import Loading from "../Loading.vue";

import type { DirectiveOptions } from "vue";
import type { DirectiveBinding } from "vue/types/options";
import type { LoadingInstance, LoadingSize } from "../type";

/**
 * @description: 挂载之前
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const bind = (el: HTMLElement, binding: DirectiveBinding) => {
  if (!(el as any).$loading && !(el as any).$loadingContainer) {
    const styles = getComputedStyle(el);
    if (!["relative", "absolute", "fixed", "sticky"].includes(styles.position)) {
      el.style.position = "relative";
    }
    const { medium, large, fullscreen } = binding.modifiers;
    let size: LoadingSize = "small";
    if (medium) size = "medium";
    if (large) size = "large";
    if (typeof binding.arg === "string" && ["medium", "large"].includes(binding.arg)) {
      size = binding.arg as LoadingSize;
    }
    const loading = !!binding.value;
    const instance = new Loading({
      propsData: {
        loading,
        size,
        fullscreen,
        attach: el,
      },
    });
    (el as HTMLDirectiveElement<LoadingInstance>).$instance = instance;
    (el as HTMLDirectiveElement<LoadingInstance>).$container = document.createElement("div");
    instance.$mount();
    el.appendChild(instance.$el);
  }
};

/**
 * @description: 更新
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const componentUpdated = (el: HTMLElement, binding: DirectiveBinding) => {
  const { medium, large, fullscreen } = binding.modifiers;
  const loading = !!binding.value;
  const instance = (el as HTMLDirectiveElement<LoadingInstance>).$instance;
  let size: LoadingSize = "small";
  if (medium) size = "medium";
  if (large) size = "large";
  if (typeof binding.arg === "string" && ["medium", "large"].includes(binding.arg)) {
    size = binding.arg as LoadingSize;
  }
  if (instance) {
    instance.$props.loading = loading;
    instance.$props.size = size;
    instance.$props.fullscreen = fullscreen;
  }
};

/**
 * @description: 卸载之前
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const unbind = (el: HTMLElement, binding: DirectiveBinding) => {
  const instance = (el as HTMLDirectiveElement<LoadingInstance>).$instance;
  if (instance) {
    el.removeChild(instance.$el);
    instance.$destroy();
  }
  delete (el as HTMLDirectiveElement<LoadingInstance>).$instance;
};

const options: DirectiveOptions = {
  bind,
  componentUpdated,
  unbind,
};

export default options;

