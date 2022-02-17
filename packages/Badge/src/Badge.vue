<!--
 * @Author: Quarter
 * @Date: 2022-02-17 10:39:58
 * @LastEditTime: 2022-02-17 11:46:28
 * @LastEditors: Quarter
 * @Description: 徽标组件
 * @FilePath: /t-ui-kit/packages/Badge/src/Badge.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/badge.scss";

import { computed, PropType } from "vue";
import { BadgeShape, BadgeSize } from "./type";

const props = defineProps({
  count: [Number, String], // 计数
  dot: { // 是否点状显示
    type: Boolean,
    default: false,
  },
  size: { // 尺寸
    type: String as PropType<BadgeSize>,
    default: "medium",
  },
  shape: { // 形状
    type: String as PropType<BadgeShape>,
    default: "circle",
  },
  color: String, // 颜色
});

/**
 * @description: 计数内容
 * @author: Quarter
 * @return {string|number}
 */
const count = computed<number | string | undefined>(() => {
  if (typeof props.count === "number") {
    if (props.count > 99) {
      return "99+";
    }
  }
  return props.count;
});

/**
 * @description: 徽标尺寸
 * @author: Quarter
 * @return {BadgeSize}
 */
const size = computed<BadgeSize>(() => {
  const sizeList: BadgeSize[] = ["small", "medium"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium"
});

/**
 * @description: 徽标形状
 * @author: Quarter
 * @return {BadgeShape}
 */
const shape = computed<BadgeShape>(() => {
  const shapeList: BadgeShape[] = ["circle", "round"];
  if (shapeList.includes(props.shape)) {
    return props.shape;
  }
  return "circle";
});

/**
 * @description: 徽标颜色
 * @author: Quarter
 * @return {string}
 */
const color = computed<string | undefined>(() => {
  const colorRg: RegExp = new RegExp(/^(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{8})|(rgb\(([0-9]{1,3},){2}[0-9]{1,3}\))|(rgba\(([0-9]{1,3},){3}((0(\.[0-9]+){0,1})|1)\))$/);
  if (typeof props.color === "string" && colorRg.test(props.color)) {
    return props.color;
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-badge--${size.value}`,
    `t-badge--${shape.value}`
  ];
  if (props.dot) classList.push("t-badge--dot");
  return classList;
});
</script>

<template>
  <div class="t-badge" :class="classNameList">
    <slot></slot>
    <template v-if="count">
      <sup v-if="props.dot" class="t-badge__dot" :style="{ backgroundColor: color }"></sup>
      <sup v-else class="t-badge__count" :style="{ backgroundColor: color }">{{ count }}</sup>
    </template>
  </div>
</template>