<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:15
 * @LastEditTime: 2022-01-25 06:20:38
 * @LastEditors: Quarter
 * @Description: 函数调用清空消息示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/FuncClearDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { NotifyFunc } from "packages/Notification";

// 消息通知函数
const $notify = inject<NotifyFunc>("$notify");

/**
 * @description: 创建新的消息通知
 * @author: Quarter
 * @return
 */
const createNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示", {
    icon: "info-circle-filled",
    duration: 0,
  });
};

/**
 * @description: 清空消息通知
 * @author: Quarter
 * @return
 */
const clearNotification = () => {
  $notify?.clear();
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="createNotification"
      >打开新消息通知</t-button
    >
    <t-button theme="warning" @click="clearNotification">清空通知</t-button>
  </div>
</template>