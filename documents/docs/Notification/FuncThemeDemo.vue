<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:13
 * @LastEditTime: 2022-01-25 06:16:26
 * @LastEditors: Quarter
 * @Description: 函数调用快速主题示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/FuncThemeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { NotifyFunc } from "packages/Notification";

// 消息通知函数
const $notify = inject<NotifyFunc>("$notify");

/**
 * @description: 创建消息类提示
 * @author: Quarter
 * @return
 */
const createInfoNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示", {
    icon: "info-circle-filled",
  });
};

/**
 * @description: 创建成功类提示
 * @author: Quarter
 * @return
 */
const createSuccessNotification = () => {
  $notify?.success("成功消息", "用于表示操作顺利达成", {
    icon: "check-circle-filled",
  });
};

/**
 * @description: 创建警告类提示
 * @author: Quarter
 * @return
 */
const createWarningNotification = () => {
  $notify?.warning("警告消息", "用于表示操作引起一定后果", {
    icon: "error-circle-filled",
  });
};

/**
 * @description: 创建危险类提示
 * @author: Quarter
 * @return
 */
const createDangerNotification = () => {
  $notify?.danger("危险消息", "用于表示操作引起严重的后果", {
    icon: "error-circle-filled",
  });
};
</script>

<template>
  <t-button theme="primary" @click="createInfoNotification">提示主题</t-button>
  <t-button theme="success" @click="createSuccessNotification"
    >成功主题</t-button
  >
  <t-button theme="warning" @click="createWarningNotification"
    >警告主题</t-button
  >
  <t-button theme="danger" @click="createDangerNotification">危险主题</t-button>
</template>