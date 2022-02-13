<!--
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:34
 * @LastEditTime: 2022-02-13 02:19:26
 * @LastEditors: Quarter
 * @Description: 按钮
 * @FilePath: /t-ui-kit/packages/Button/src/Button.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/button.scss";

import { computed, PropType } from "vue";
import { ButtonVariant, ButtonSize, ButtonTheme } from "./type";
import { Icon } from "packages/Icon";

// 定义参数和事件
const props = defineProps({
  variant: {
    // 按钮变体
    type: String as PropType<ButtonVariant>,
    default: "base",
  },
  disabled: {
    // 按钮类型
    type: Boolean,
    default: false,
  },
  loading: {
    // 加载中
    type: Boolean,
    default: false,
  },
  size: {
    // 按钮大小
    type: String as PropType<ButtonSize>,
    default: "medium",
  },
  ghost: {
    // 是否👻按钮
    type: Boolean as PropType<boolean>,
    default: false,
  },
  theme: {
    // 按钮主题样式
    type: String as PropType<ButtonTheme>,
    default: "default",
  },
  icon: String, // 图标
  circle: {
    // 是否圆形图标
    type: Boolean as PropType<boolean>,
    default: false,
  },
  block: {
    // 是否块级按钮
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
const emits = defineEmits(["click"]);

// 禁用状态
const disabled = computed<boolean>(() => {
  if (props.disabled || props.loading) {
    return true;
  }
  return false;
});

/**
 * @description: 按钮尺寸
 * @author: Quarter
 * @return {ButtonSize}
 */
const size = computed<ButtonSize>(() => {
  const sizeList: ButtonSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 按钮变体
 * @author: Quarter
 * @return {ButtonVariant}
 */
const variant = computed<ButtonVariant>(() => {
  const variantList: ButtonVariant[] = ["base", "outline", "dashed", "text"];
  if (variantList.includes(props.variant)) {
    return props.variant;
  }
  return "base";
});

/**
 * @description: 按钮主题
 * @author: Quarter
 * @return {ButtonTheme}
 */
const theme = computed<ButtonTheme>(() => {
  const themeList: ButtonTheme[] = [
    "default",
    "primary",
    "warning",
    "danger",
    "success",
  ];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "default";
});

/**
 * @description: 按钮类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-button--${size.value}`,
    `t-button--${variant.value}`,
    `t-button--${theme.value}`,
  ];
  if (props.ghost) {
    classList.push("t-button--ghost");
  }
  if (!!props.icon && props.circle) {
    classList.push("t-button--circle");
  } else {
    if (props.loading) {
      classList.push("t-button--loading");
    }
    if (props.block) {
      classList.push("t-button--block");
    }
  }
  return classList;
});

/**
 * @description: 点击事件
 * @author: Quarter
 * @param {MouseEvent} e 事件
 * @return
 */
const handleClick = (e: MouseEvent): void => {
  if (props.disabled === false) {
    emits("click", e);
  }
};
</script>

<template>
  <button class="t-button" :class="classNameList" :disabled="disabled" @click="handleClick">
    <div v-if="loading && !icon" class="t-button__loading"></div>
    <div v-if="icon" class="t-button__icon">
      <icon :name="icon"></icon>
    </div>
    <div v-if="!circle" class="t-button__text">
      <slot></slot>
    </div>
  </button>
</template>