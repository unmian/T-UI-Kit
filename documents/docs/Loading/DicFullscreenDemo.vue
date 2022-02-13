<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:16:05
 * @LastEditTime: 2022-01-10 11:51:01
 * @LastEditors: Quarter
 * @Description: 加载指令示例
 * @FilePath: /t-ui-kit/packages/Loading/docs/DicFullscreenDemo.vue
-->
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 加载动画
const loading = ref(false);

// 显示加载动画
const showLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <div v-loading.fullscreen="loading" style="max-width: 130px">
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
  </div>
  <div style="margin-top: 14px">
    <t-button size="small" theme="primary" @click="showLoading"
      >开始加载</t-button
    >
  </div>
</template>