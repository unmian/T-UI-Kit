<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:16:05
 * @LastEditTime: 2022-01-10 11:45:52
 * @LastEditors: Quarter
 * @Description: 加载指令示例
 * @FilePath: /t-ui-kit/packages/Loading/docs/DirectiveDemo.vue
-->
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 加载动画
const loading = ref(false);
</script>

<template>
  <div v-loading="loading" style="max-width: 130px">
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
  </div>
  <div style="margin-top: 14px">
    <t-button size="small" theme="primary" @click="loading = true"
      >开始加载</t-button
    >
    <t-button size="small" theme="primary" @click="loading = false"
      >加载完成</t-button
    >
  </div>
</template>