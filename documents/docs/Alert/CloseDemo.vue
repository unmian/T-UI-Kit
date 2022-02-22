<!--
 * @Author: Quarter
 * @Date: 2022-01-12 06:08:07
 * @LastEditTime: 2022-02-21 08:45:46
 * @LastEditors: Quarter
 * @Description: 警告提醒主题示例
 * @FilePath: /t-ui-kit/documents/docs/Alert/CloseDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理关闭回调
 * @author: Quarter
 * @return
 */
const handleClose = (): void => {
  $message?.info("您点击了关闭按钮");
};
</script>

<template>
  <t-alert theme="info" icon="info-circle-filled" closable @close="handleClose"
    >这是一条普通的消息提示</t-alert
  >
  <t-alert
    theme="info"
    icon="info-circle-filled"
    closable
    close-btn="不再提醒"
    @close="handleClose"
    >这是一条普通的消息提示</t-alert
  >
</template>