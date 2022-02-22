/*
 * @Author: Quarter
 * @Date: 2022-01-07 06:17:52
 * @LastEditTime: 2022-02-21 09:07:44
 * @LastEditors: Quarter
 * @Description: 加载指令
 * @FilePath: /t-ui-kit/packages/Loading/src/directive/Loading.ts
 */
import { createVNode, DirectiveBinding } from "vue";
import { render } from "vue";
import Loading from "../Loading.vue";

import type { HTMLDirectiveElement } from "packages/Global";
import type { LoadingSize } from "../type";

/**
 * @description: 挂载之前
 * @author: Quarter
 * @param {HTMLDirectiveElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const beforeMount = (el: HTMLDirectiveElement, binding: DirectiveBinding) => {
  if (!(el as HTMLDirectiveElement).$instance && !(el as HTMLDirectiveElement).$container) {
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
    (el as HTMLDirectiveElement).$instance = instance;
    (el as HTMLDirectiveElement).$container = document.createElement("div");
    render(instance, (el as HTMLDirectiveElement).$container as HTMLElement);
  }
};

/**
 * @description: 更新
 * @author: Quarter
 * @param {HTMLDirectiveElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const updated = (el: HTMLDirectiveElement, binding: DirectiveBinding) => {
  const { small, large, showOverlay = true, fullscreen } = binding.modifiers;
  const loading = !!binding.value;
  const { $instance } = (el as HTMLDirectiveElement);
  if ($instance) {
    let size: LoadingSize = "medium";
    if (small) size = "small";
    if (large) size = "large";
    if (typeof binding.arg === "string" && ["small", "large"].includes(binding.arg)) {
      size = binding.arg as LoadingSize;
    }
    if ($instance.component) {
      $instance.component.props.loading = loading;
      $instance.component.props.size = size;
      $instance.component.props.showOverlay = showOverlay;
      $instance.component.props.fullscreen = fullscreen;
    }
  }
};

/**
 * @description: 卸载之前
 * @author: Quarter
 * @param {HTMLDirectiveElement} el HTML 元素
 * @param {DirectiveBinding} binding 指令绑定参数
 * @return
 */
const beforeUnmount = (el: HTMLDirectiveElement, binding: DirectiveBinding) => {
  const { $container } = el as HTMLDirectiveElement;
  if ($container instanceof HTMLElement) {
    render(null, $container);
    $container.remove();
  }
  delete (el as HTMLDirectiveElement).$instance;
  delete (el as HTMLDirectiveElement).$container;
};

export default {
  beforeMount,
  updated,
  beforeUnmount,
};

