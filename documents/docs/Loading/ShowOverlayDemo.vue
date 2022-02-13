<!--
 * @Author: Quarter
 * @Date: 2022-01-08 02:47:58
 * @LastEditTime: 2022-01-08 03:00:03
 * @LastEditors: Quarter
 * @Description: 加载显示包裹层
 * @FilePath: /t-ui-kit/packages/Loading/docs/ShowOverlayDemo.vue
-->
<script lang="ts" setup>
import { ref } from "@vue/reactivity";

// 加载动画
const loading = ref(false);
</script>

<template>
  <div style="max-width: 130px">
    <t-loading :loading="loading" size="small" show-overlay>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </t-loading>
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