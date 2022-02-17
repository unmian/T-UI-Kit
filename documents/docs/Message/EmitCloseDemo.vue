<!--
 * @Author: Quarter
 * @Date: 2022-01-08 01:52:47
 * @LastEditTime: 2022-02-17 08:31:21
 * @LastEditors: Quarter
 * @Description: 全局提示关闭事件示例
 * @FilePath: /t-ui-kit/documents/docs/Message/EmitCloseDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { MessageFunc } from "packages/Message";

// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理关闭
 * @author: Quarter
 * @return
 */
const handleClose = () => {
  $message?.info("您点击了关闭按钮");
};
</script>

<template>
  <t-message theme="info" close-btn @close="handleClose"
    >用于表示普通操作信息提示</t-message
  >
</template>