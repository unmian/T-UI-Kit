<!--
 * @Author: Quarter
 * @Date: 2021-12-30 11:44:08
 * @LastEditTime: 2022-02-03 02:27:06
 * @LastEditors: Quarter
 * @Description: 图标组件
 * @FilePath: /t-ui-kit/packages/Icon/src/Icon.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/icon.scss";

import { PropType } from "@vue/runtime-core";
import { computed } from "vue";

const props = defineProps({
  name: String as PropType<string>, // 图标名称
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = new Array();
  if (typeof props.name === "string") {
    classList.push(`t-icon--${props.name}`);
  }
  return classList;
});
</script>

<template>
  <i class="t-icon" :class="classNameList" :icon="props.name"></i>
</template>