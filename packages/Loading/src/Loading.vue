<!--
 * @Author: Quarter
 * @Date: 2022-01-05 03:21:11
 * @LastEditTime: 2022-02-21 09:07:36
 * @LastEditors: Quarter
 * @Description: 加载
 * @FilePath: /t-ui-kit/packages/Loading/src/Loading.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/loading.scss";

import { PropType, computed } from "vue";

import type { LoadingSize } from "./type";

const props = defineProps({
  loading: {
    // 加载动画
    type: Boolean,
    default: true,
  },
  text: String, // 文本内容
  indicator: {
    // 是否显示加载指示器
    type: Boolean,
    default: true,
  },
  size: {
    // 加载的大小
    type: String as PropType<LoadingSize>,
    default: "medium",
  },
  showOverlay: {
    // 是否显示包裹层
    type: Boolean,
    default: false,
  },
  fullscreen: {
    // 是否全屏
    type: Boolean,
    default: false,
  },
  attach: Object as PropType<HTMLElement>, // 附加节点
});

/**
 * @description: 加载尺寸
 * @author: Quarter
 * @return {LoadingSize}
 */
const loadingSize = computed<LoadingSize>(() => {
  const sizeList: LoadingSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 依附的节点
 * @author: Quarter
 * @return {HTMLElement}
 */
const attachNode = computed<HTMLElement | undefined>(() => {
  if (props.attach instanceof HTMLElement) {
    return props.attach;
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-loading--${loadingSize.value}`];
  if (props.showOverlay || props.fullscreen) {
    classList.push("t-loading--center");
  }
  if (props.fullscreen) {
    classList.push("t-loading--fullscreen");
  }
  if (attachNode.value) {
    classList.push("t-loading--attach");
  }
  return classList;
});
</script>

<template>
  <teleport v-if="props.fullscreen" to="body">
    <div v-if="loading" class="t-loading" :class="classNameList">
      <div v-if="props.indicator" class="t-loading__indicator"></div>
      <div class="t-loading__text">{{ props.text }}</div>
    </div>
  </teleport>
  <template v-else>
    <teleport v-if="attachNode" :to="attachNode">
      <div v-if="loading" class="t-loading" :class="classNameList">
        <div v-if="props.indicator" class="t-loading__indicator"></div>
        <div class="t-loading__text">{{ props.text }}</div>
      </div>
    </teleport>
    <template v-else>
      <div v-if="props.showOverlay" class="t-loading__wrapper">
        <slot></slot>
        <template v-if="loading">
          <div class="t-loading" :class="classNameList">
            <div v-if="props.indicator" class="t-loading__indicator"></div>
            <div class="t-loading__text">{{ props.text }}</div>
          </div>
        </template>
      </div>
      <template v-else>
        <div v-if="loading" class="t-loading" :class="classNameList">
          <div v-if="props.indicator" class="t-loading__indicator"></div>
          <div v-if="props.text" class="t-loading__text">{{ props.text }}</div>
        </div>
      </template>
    </template>
  </template>
</template>