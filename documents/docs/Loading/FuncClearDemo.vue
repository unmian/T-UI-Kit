<!--
 * @Author: Quarter
 * @Date: 2022-01-10 10:58:28
 * @LastEditTime: 2022-01-10 11:30:20
 * @LastEditors: Quarter
 * @Description: 函数调用关闭示例
 * @FilePath: /t-ui-kit/packages/Loading/docs/FuncClearDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { LoadingFunc } from "packages/Loading";
import { ref } from "vue";

// 加载动画函数
const $loading = inject<LoadingFunc>("$loading");

// 加载容器1
const container1 = ref();
// 加载容器2
const container2 = ref();

/**
 * @description: 显示加载动画
 * @author: Quarter
 * @return
 */
const showLoading = () => {
  if ($loading) {
    $loading({
      size: "small",
      showOverlay: true,
      attach: container1.value,
      duration: 0,
    });
    $loading({
      size: "small",
      showOverlay: true,
      attach: container2.value,
      duration: 0,
    });
  }
};

/**
 * @description: 清空加载动画
 * @author: Quarter
 * @return
 */
const clearLoading = () => {
  $loading?.clear();
};
</script>

<template>
  <div style="display: flex">
    <div ref="container1" style="max-width: 130px; position: relative">
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
    <div
      ref="container2"
      style="max-width: 130px; position: relative; margin-left: 30px"
    >
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
  </div>
  <div style="margin-top: 14px">
    <t-button size="small" theme="primary" @click="showLoading"
      >开始加载</t-button
    >
    <t-button size="small" theme="primary" @click="clearLoading"
      >清空加载</t-button
    >
  </div>
</template>