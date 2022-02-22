<!--
 * @Author: Quarter
 * @Date: 2022-01-10 10:58:28
 * @LastEditTime: 2022-02-21 08:46:04
 * @LastEditors: Quarter
 * @Description: 函数调用关闭示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/FuncCloseDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { LoadingFunc } from "packages/Loading";
import { MessageFunc } from "packages/Message";
import { ref } from "vue";

// 加载动画函数
const $loading = inject<LoadingFunc>("$loading");
// 全局提示函数
const $message = inject<MessageFunc>("$message");

// 加载索引
const index = ref<number | undefined>();
// 加载容器
const container = ref();

/**
 * @description: 显示加载动画
 * @author: Quarter
 * @return
 */
const showLoading = () => {
  if ($loading && index.value === undefined) {
    index.value = $loading({
      size: "small",
      showOverlay: true,
      attach: container.value,
      duration: 0,
      onClose: () => {
        $message?.success("加载动画成功关闭了哦");
      },
    });
  }
};

/**
 * @description: 关闭加载动画
 * @author: Quarter
 * @return
 */
const closeLoading = () => {
  if (typeof index.value === "number") {
    $loading?.close(index.value);
    index.value = undefined;
  }
};
</script>

<template>
  <div ref="container" style="max-width: 130px; position: relative">
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
    <div>这是一行占位文本</div>
  </div>
  <div style="margin-top: 14px">
    <t-button size="small" theme="primary" @click="showLoading"
      >开始加载</t-button
    >
    <t-button size="small" theme="primary" @click="closeLoading"
      >关闭加载</t-button
    >
  </div>
</template>