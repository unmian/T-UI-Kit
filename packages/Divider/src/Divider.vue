<!--
 * @Author: Quarter
 * @Date: 2022-01-11 05:47:23
 * @LastEditTime: 2022-03-03 10:38:24
 * @LastEditors: Quarter
 * @Description: 分割线
 * @FilePath: /t-ui-kit/packages/Divider/src/Divider.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/divider.scss";

import { computed, PropType, useSlots } from "vue";

import type { DividerLayout, DividerAlign } from "./type";

const props = defineProps({
  dashed: {
    // 虚线
    type: Boolean,
    default: false,
  },
  layout: {
    // 布局方式
    type: String as PropType<DividerLayout>,
    default: "horizontal",
  },
  align: {
    // 对齐方式
    type: String as PropType<DividerAlign>,
    default: "center",
  },
});

/**
 * @description: 布局方式
 * @author: Quarter
 * @return {DividerLayout}
 */
const layout = computed<DividerLayout>(() => {
  const layoutList: DividerLayout[] = ["horizontal", "vertical"];
  if (layoutList.includes(props.layout)) {
    return props.layout;
  }
  return "horizontal";
});

/**
 * @description: 布局方式
 * @author: Quarter
 * @return {DividerAlign}
 */
const align = computed<DividerAlign>(() => {
  const alignList: DividerAlign[] = ["left", "center", "right"];
  if (alignList.includes(props.align)) {
    return props.align;
  }
  return "center";
});

/**
 * @description: 是否存在默认插槽内容
 * @author: Quarter
 * @return {boolean}
 */
const hasDefaultSlot = computed<boolean>(() => {
  return !!useSlots().default;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-divider--${layout.value}`,
    `t-divider--${align.value}`,
  ];
  if (props.dashed) {
    classList.push(`t-divider--dashed`);
  }
  if (hasDefaultSlot.value) {
    classList.push(`t-divider--with-text`);
  }
  return classList;
});
</script>

<template>
  <div class="t-divider" :class="classNameList">
    <span v-if="layout === 'horizontal' && hasDefaultSlot" class="t-divider__inner-text">
      <slot></slot>
    </span>
  </div>
</template>