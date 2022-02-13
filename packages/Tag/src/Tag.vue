<!--
 * @Author: Quarter
 * @Date: 2022-01-08 05:27:23
 * @LastEditTime: 2022-01-12 03:18:57
 * @LastEditors: Quarter
 * @Description: 标签
 * @FilePath: /t-ui-kit/packages/Tag/src/Tag.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/tag.scss";

import { computed, PropType } from "@vue/runtime-core";
import { TagSize, TagTheme, TagVariant } from "./type";
import { Icon } from "packages/Icon";

const props = defineProps({
  size: {
    // 标签尺寸
    type: String as PropType<TagSize>,
    default: "medium",
  },
  theme: {
    // 标签主题
    type: String as PropType<TagTheme>,
    default: "default",
  },
  variant: {
    // 标签变体
    type: String as PropType<TagVariant>,
    default: "dark",
  },
  icon: String, // 图标
  closable: Boolean, // 是否可关闭
  disabled: Boolean, // 是否禁用
  maxWidth: String, // 最大宽度
});
const emits = defineEmits(["close"]);

/**
 * @description: 标签尺寸
 * @author: Quarter
 * @return {TagSize}
 */
const size = computed<TagSize>(() => {
  if (["small", "medium", "large"].includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 标签主题
 * @author: Quarter
 * @return {TagTheme}
 */
const theme = computed<TagTheme>(() => {
  const themeList: TagTheme[] = [
    "default",
    "primary",
    "success",
    "warning",
    "danger",
  ];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "default";
});

/**
 * @description: 标签变体
 * @author: Quarter
 * @return {TagVariant}
 */
const variant = computed<TagVariant>(() => {
  if (["dark", "light", "plain"].includes(props.variant)) {
    return props.variant;
  }
  return "dark";
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-tag--${size.value}`,
    `t-tag--${theme.value}`,
    `t-tag--${variant.value}`,
  ];
  if (props.closable) {
    classList.push("t-tag--closable");
    if (props.disabled) {
      classList.push("t-tag--disabled");
    }
  }
  return classList;
});

/**
 * @description: 关闭标签
 * @author: Quarter
 * @return
 */
const close = (): void => {
  emits("close");
};
</script>

<template>
  <span class="t-tag" :class="classNameList">
    <span v-if="props.icon" class="t-tag__icon">
      <icon :name="props.icon"></icon>
    </span>
    <span class="t-tag__text" :style="{ maxWidth }"><slot></slot></span>
    <span v-if="props.closable" class="t-tag__close-btn" @click="close">
      <icon name="close"></icon>
    </span>
  </span>
</template>