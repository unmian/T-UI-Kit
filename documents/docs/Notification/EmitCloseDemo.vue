<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-01-25 03:07:32
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/CloseEmitDemo.vue
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
  <t-notification
    icon="info-circle-filled"
    title="普通通知"
    content="这是一条消息通知"
    close-btn
    @close="handleClose"
  ></t-notification>
</template>