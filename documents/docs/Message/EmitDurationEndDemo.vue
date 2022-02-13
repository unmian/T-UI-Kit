<!--
 * @Author: Quarter
 * @Date: 2022-01-08 01:52:47
 * @LastEditTime: 2022-01-25 05:26:59
 * @LastEditors: Quarter
 * @Description: 关闭按钮示例
 * @FilePath: /t-ui-kit/packages/Message/docs/DurationEndEmitDemo.vue
-->
<script lang="ts" setup>
import { inject, ref } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示
const $message = inject<MessageFunc>("$message");
// 显隐
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
    >显示消息</t-button
  >
  <t-message
    v-if="visible"
    theme="info"
    :duration="3000"
    @duration-end="handleDurationEnd"
    >用于表示普通操作信息提示</t-message
  >
</template>