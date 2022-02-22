<!--
 * @Author: Quarter
 * @Date: 2022-01-25 05:43:53
 * @LastEditTime: 2022-01-25 06:16:48
 * @LastEditors: Quarter
 * @Description: 消息通知函数式调用示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/FunctionDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { NotifyFunc } from "packages/Notification";
import { MessageFunc } from "packages/Message";

// 消息通知函数
const $notify = inject<NotifyFunc>("$notify");
// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 创建通知
 * @author: Quarter
 * @return
 */
const createNotification = () => {
  if ($notify) {
    $notify({
      icon: "info-circle-filled",
      title: "新的消息",
      content: "打开了一个新的全局消息",
      duration: 2000,
      onClose: () => {
        $message?.info("这是全局提示关闭的回调");
      },
    });
  }
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="createNotification"
      >函数调用方式</t-button
    >
  </div>
</template>