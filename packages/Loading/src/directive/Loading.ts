/*
 * @Author: Quarter
 * @Date: 2022-01-07 06:17:52
 * @LastEditTime: 2022-01-10 11:59:36
 * @LastEditors: Quarter
 * @Description: 加载指令
 * @FilePath: /t-ui-kit/packages/Loading/src/directive/Loading.ts
 */

import { createVNode, DirectiveBinding } from "@vue/runtime-dom";
import { render } from "vue";
import Loading from "../Loading.vue";
import { LoadingSize } from "../type";

/**
 * @description: 挂载之前
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const beforeMount = (el: HTMLElement, binding: DirectiveBinding) => {
  if (!(el as any).$loading && !(el as any).$loadingContainer) {
    const styles = getComputedStyle(el);
    if (!["relative", "absolute", "fixed", "sticky"].includes(styles.position)) {
      el.style.position = "relative";
    }
    const { small, large, showOverlay = true, fullscreen } = binding.modifiers;
    let size: LoadingSize = "medium";
    if (small) size = "small";
    if (large) size = "large";
    if (typeof binding.arg === "string" && ["small", "large"].includes(binding.arg)) {
      size = binding.arg as LoadingSize;
    }
    const loading = !!binding.value;
    const instance = createVNode(Loading, {
      loading,
      size,
      showOverlay,
      fullscreen,
      attach: el,
    });
    (el as any).$loading = instance;
    (el as any).$loadingContainer = document.createElement("div");
    render(instance, (el as any).$loadingContainer);
  }
};

/**
 * @description: 更新
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const updated = (el: HTMLElement, binding: DirectiveBinding) => {
  const { small, large, showOverlay = true, fullscreen } = binding.modifiers;
  const loading = !!binding.value;
  (el as any).$loading.component.props.loading = loading;
  let size: LoadingSize = "medium";
  if (small) size = "small";
  if (large) size = "large";
  if (typeof binding.arg === "string" && ["small", "large"].includes(binding.arg)) {
    size = binding.arg as LoadingSize;
  }
  (el as any).$loading.component.props.size = size;
  (el as any).$loading.component.props.showOverlay = showOverlay;
  (el as any).$loading.component.props.fullscreen = fullscreen;
};

/**
 * @description: 卸载之前
 * @author: Quarter
 * @param {HTMLElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const beforeUnmount = (el: HTMLElement, binding: DirectiveBinding) => {
  if ((el as any).$loadingContainer instanceof HTMLElement) {
    render(null, (el as any).$loadingContainer);
    (el as any).$loadingContainer.remove();
  }
  delete (el as any).$loading;
  delete (el as any).$loadingContainer;
};

export default {
  beforeMount,
  updated,
  beforeUnmount,
};

