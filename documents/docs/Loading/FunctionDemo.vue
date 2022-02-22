<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:29:13
 * @LastEditTime: 2022-02-21 08:46:09
 * @LastEditors: Quarter
 * @Description: 加载函数式调用示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/FunctionDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { LoadingFunc } from "packages/Loading";

// 加载动画函数
const $loading = inject<LoadingFunc>("$loading");

/**
 * @description: 显示加载动画
 * @author: Quarter
 * @return
 */
const showLoading = () => {
  if ($loading) {
    $loading({
      fullscreen: true,
    });
  }
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="showLoading">打开加载动画</t-button>
  </div>
</template>