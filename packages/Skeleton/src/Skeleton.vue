<!--
 * @Author: Quarter
 * @Date: 2022-02-16 03:22:10
 * @LastEditTime: 2022-02-19 08:46:01
 * @LastEditors: Quarter
 * @Description: 骨架屏
 * @FilePath: /t-ui-kit/packages/Skeleton/src/Skeleton.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/skeleton.scss";

import { computed, PropType } from "vue";
import { SkeletonTheme, SkeletonAnimation, SkeletonSize } from "./type";

const props = defineProps({
  loading: { // 加载状态
    type: Boolean,
    default: false,
  },
  theme: { // 骨架屏主题
    type: String as PropType<SkeletonTheme>,
    default: "text",
  },
  animation: { // 动画类型
    type: String as PropType<SkeletonAnimation>,
    default: "SkeletonAnimation",
  },
  size: { // 骨架屏尺寸
    type: String as PropType<SkeletonSize>,
    default: "large",
  },
});

/**
 * @description: 骨架屏主题
 * @author: Quarter
 * @return {SkeletonTheme}
 */
const theme = computed<SkeletonTheme>(() => {
  const themeList: SkeletonTheme[] = ["text", "paragraph", "avatar", "avatar-text", "tab", "article"];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "text";
});

/**
 * @description: 骨架屏尺寸
 * @author: Quarter
 * @return {SkeletonSize}
 */
const size = computed<SkeletonSize>(() => {
  const sizeList: SkeletonSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "large";
});

/**
 * @description: 骨架屏动画
 * @author: Quarter
 * @return {SkeletonSize}
 */
const animation = computed<SkeletonAnimation>(() => {
  const animationList: SkeletonAnimation[] = ["gradient", "flashed"];
  if (animationList.includes(props.animation)) {
    return props.animation;
  }
  return "gradient";
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  return [
    `t-skeleton--theme-${theme.value}`,
    `t-skeleton--size-${size.value}`,
    `t-skeleton--${animation.value}`,
  ];
});
</script>

<template>
  <template v-if="props.loading">
    <div v-if="theme === 'text'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </div>
    <div v-else-if="theme === 'paragraph'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </div>
    <div v-else-if="theme === 'avatar'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__circle"></div>
      </div>
    </div>
    <div v-else-if="theme === 'avatar-text'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__circle"></div>
        <div class="t-skeleton__col"></div>
      </div>
    </div>
    <div v-else-if="theme === 'tab'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </div>
    <div v-else-if="theme === 'article'" class="t-skeleton" :class="classNameList">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
    </div>
  </template>
  <slot v-else></slot>
</template>