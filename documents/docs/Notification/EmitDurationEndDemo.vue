<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-01-25 02:43:17
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/DurationEndEmitDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { MessageFunc } from "packages/Message";
import { ref } from "vue";

// 全局提示
const $message = inject<MessageFunc>("$message");
// 通知可见性
const visible = ref<boolean>(false);

/**
 * @description: 处理延时结束
 * @author: Quarter
 * @return
 */
const handleDurationEnd = () => {
  $message?.info("3000ms 的延时结束了");
  visible.value = false;
};
</script>

<template>
  <t-button theme="primary" :disabled="visible" @click="visible = !visible"
    >显示通知</t-button
  >
  <t-notification
    v-if="visible"
    icon="info-circle-filled"
    title="普通通知"
    content="这是一条消息通知"
    :duration="3000"
    @duration-end="handleDurationEnd"
  ></t-notification>
</template>