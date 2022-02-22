<!--
 * @Author: Quarter
 * @Date: 2022-02-17 01:07:50
 * @LastEditTime: 2022-02-21 09:09:02
 * @LastEditors: Quarter
 * @Description: 头像组
 * @FilePath: /t-ui-kit/packages/Avatar/src/AvatarGroup.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/avatarGroup.scss";

import { computed, PropType, useSlots, VNode } from "vue";
import Avatar from "./Avatar.vue";

import type { AvatarCascading, AvatarSize } from "./type";

const props = defineProps({
  cascading: { // 级联顺序
    type: String as PropType<AvatarCascading>,
    default: "left-up",
  },
  max: { // 最大显示数量
    type: Number,
    default: 3,
  },
  size: String as PropType<AvatarSize | string>, // 头像尺寸
  moreIcon: String, // 更多的图标
  moreAlt: String, // 更多的文本
});

/**
 * @description: 级联顺序
 * @author: Quarter
 * @return {AvatarCascading}
 */
const cascading = computed<AvatarCascading>(() => {
  const cascading: AvatarCascading[] = ["left-up", "right-up"];
  if (cascading.includes(props.cascading)) {
    return props.cascading;
  }
  return "left-up";
});

/**
 * @description: 最大个数
 * @author: Quarter
 * @return {Number}
 */
const max = computed<number>(() => {
  if (typeof props.max === "number" && Number.isInteger(props.max) && props.max > 0) {
    return props.max;
  }
  return 3;
});

/**
 * @description: 默认插槽
 * @author: Quarter
 * @return {VNode[]}
 */
const defaultSlots = computed<VNode[]>(() => {
  const slots = useSlots();
  if (slots.default) {
    return slots.default();
  }
  return new Array();
});

/**
 * @description: 更多是否可见
 * @author: Quarter
 * @return {boolean}
 */
const moreVisible = computed<boolean>(() => {
  if (Array.isArray(defaultSlots.value) && defaultSlots.value.length > max.value) {
    return true;
  }
  return false;
});

/**
 * @description: 可见的头像
 * @author: Quarter
 * @return {VNode[]}
 */
const visibleAvatar = computed<VNode[]>(() => {
  if (Array.isArray(defaultSlots.value)) {
    if (defaultSlots.value.length > max.value) {
      return defaultSlots.value.slice(0, max.value - 1);
    } else {
      return defaultSlots.value;
    }
  }
  return new Array();
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  return [`t-avatar-group--${cascading.value}`];
});
</script>

<template>
  <div class="t-avatar-group" :class="classNameList">
    <Component
      v-for="(avatar, index) of visibleAvatar"
      :is="avatar"
      :size="props.size"
      :is-group="index > 0"
    ></Component>
    <!-- 更多的头像 -->
    <template v-if="moreVisible">
      <avatar
        v-if="props.moreIcon || props.moreAlt"
        :icon="props.moreIcon"
        :alt="props.moreAlt"
        :size="props.size"
        is-group
      ></avatar>
      <avatar v-else icon="add" :size="props.size" is-group></avatar>
    </template>
  </div>
</template>