<!--
 * @Author: Quarter
 * @Date: 2022-01-08 02:57:24
 * @LastEditTime: 2022-01-08 03:02:17
 * @LastEditors: Quarter
 * @Description: 全屏加载示例
 * @FilePath: /t-ui-kit/packages/Loading/docs/FullscreenDemo.vue
-->
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 加载动画
const loading = ref(false);

/**
 * @description: 显示加载动画
 * @author: Quarter
 * @return
 */
const showLoading = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
</script>

<template>
  <t-loading
    :loading="loading"
    text="加载中..."
    size="small"
    fullscreen
  ></t-loading>
  <t-button size="small" theme="primary" @click="showLoading"
    >全屏加载，1 秒后自动关闭</t-button
  >
</template>