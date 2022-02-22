<!--
 * @Author: Quarter
 * @Date: 2022-01-11 09:01:37
 * @LastEditTime: 2022-02-21 09:06:02
 * @LastEditors: Quarter
 * @Description: 进度条
 * @FilePath: /t-ui-kit/packages/Progress/src/Progress.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/progress.scss";

import { computed, PropType } from "vue";
import { Icon } from "packages/Icon";

import type { ProgressSize, ProgressStatus, ProgressTheme } from "./type";

const props = defineProps({
  percentage: {
    // 百分比
    type: Number as PropType<number>,
    default: 0,
  },
  size: {
    // 进度条尺寸
    type: String as PropType<ProgressSize>,
    default: "medium",
  },
  theme: {
    // 进度条主题
    type: String as PropType<ProgressTheme>,
    default: "line",
  },
  status: String as PropType<ProgressStatus>, // 进度条状态
});

/**
 * @description: 百分比
 * @author: Quarter
 * @return {number}
 */
const percentage = computed<number>(() => {
  if (typeof props.percentage === "number") {
    if (props.percentage < 0) {
      return 0;
    } else if (props.percentage > 100) {
      return 100;
    } else {
      return props.percentage;
    }
  }
  return 0;
});

/**
 * @description: 状态
 * @author: Quarter
 * @return {ProgressStatus}
 */
const status = computed<ProgressStatus | undefined>(() => {
  const statusList: ProgressStatus[] = ["success", "warning", "danger"];
  if (props.status && statusList.includes(props.status)) {
    return props.status;
  }
});

/**
 * @description: 线形进度条状态图标
 * @author: Quarter
 * @return {string}
 */
const lineIconName = computed<string | undefined>(() => {
  const statusIcon = {
    success: "check-circle-filled",
    warning: "error-circle-filled",
    danger: "close-circle-filled",
  };
  if (status.value) {
    return statusIcon[status.value];
  }
});

/**
 * @description: 环形进度条状态图标
 * @author: Quarter
 * @return {string}
 */
const circleIconName = computed<string | undefined>(() => {
  const statusIcon = {
    success: "check",
    warning: "error",
    danger: "close",
  };
  if (status.value) {
    return statusIcon[status.value];
  }
});

/**
 * @description: 尺寸
 * @author: Quarter
 * @return {ProgressSize}
 */
const size = computed<ProgressSize>(() => {
  const sizeList: ProgressSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 主题
 * @author: Quarter
 * @return {ProgressTheme}
 */
const theme = computed<ProgressTheme>(() => {
  const themeList: ProgressTheme[] = ["line", "plump", "circle"];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "line";
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-progress--${size.value}`,
    `t-progress--${theme.value}`,
  ];
  if (status.value) {
    classList.push(`t-progress--${status.value}`);
  }
  return classList;
});

/**
 * @description: 环形尺寸
 * @author: Quarter
 * @return {number}
 */
const circleSize = computed<number>(() => {
  if (theme.value === "circle") {
    if (size.value === "small") {
      return 72;
    } else if (size.value === "medium") {
      return 112;
    } else {
      return 160;
    }
  }
  return 0;
});

/**
 * @description: 环形进度条宽度
 * @author: Quarter
 * @return {number}
 */
const circleBarSize = computed<number>(() => {
  if (theme.value === "circle") {
    if (size.value === "small") {
      return 4;
    } else if (size.value === "medium") {
      return 6;
    } else {
      return 8;
    }
  }
  return 0;
});

/**
 * @description: 环形进度条描边间隙
 * @author: Quarter
 * @return {string}
 */
const circleDashArray = computed<string>(() => {
  const active: number = Math.round(
    (((2 * Math.PI * (circleSize.value - circleBarSize.value)) / 2) *
      percentage.value) /
      100
  );
  const last: number = Math.ceil(
    (2 * Math.PI * (circleSize.value - circleBarSize.value)) / 2 - active
  );
  return [active, last].join(", ");
});
</script>

<template>
  <div class="t-progress" :class="classNameList">
    <div v-if="theme === 'line' || theme === 'plump'" class="t-progress__bar">
      <div class="t-progress__inner" :style="{ width: percentage + '%' }">
        <div
          v-if="theme === 'plump' && percentage > 10"
          class="t-progress__info"
        >
          <icon v-if="status" :name="circleIconName"></icon>
          <template v-else>{{ percentage }}%</template>
        </div>
      </div>
      <div v-if="percentage <= 10" class="t-progress__info">
        <icon v-if="status" :name="circleIconName"></icon>
        <template v-else>{{ percentage }}%</template>
      </div>
    </div>
    <div v-if="theme === 'line'" class="t-progress__info">
      <icon v-if="status" :name="lineIconName"></icon>
      <template v-else>{{ percentage }}%</template>
    </div>
    <div v-if="theme === 'circle'" class="t-progress__info">
      <icon v-if="status" :name="circleIconName"></icon>
      <template v-else>{{ percentage }}%</template>
    </div>
    <svg
      v-if="theme === 'circle'"
      :width="circleSize"
      :height="circleSize"
      :viewBox="`0 0 ${circleSize} ${circleSize}`"
    >
      <circle
        class="t-progress__circle-outer"
        :cx="circleSize / 2"
        :cy="circleSize / 2"
        :r="circleSize / 2 - circleBarSize / 2"
        :stroke-width="circleBarSize"
        stroke-linecap="round"
        fill="none"
      ></circle>
      <circle
        class="t-progress__circle-inner"
        :cx="circleSize / 2"
        :cy="circleSize / 2"
        :r="circleSize / 2 - circleBarSize / 2"
        :stroke-width="circleBarSize"
        stroke-linecap="round"
        :stroke-dasharray="circleDashArray"
        fill="none"
        :transform="`rotate(-90,${circleSize / 2},${circleSize / 2})`"
      ></circle>
    </svg>
  </div>
</template>