<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:57
 * @LastEditTime: 2022-01-25 06:24:48
 * @LastEditors: Quarter
 * @Description: 函数调用指定消息位置示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/FuncPlacementDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { ref } from "vue";
import { NotifyFunc } from "packages/Notification";

// 消息通知函数
const $notify = inject<NotifyFunc>("$notify");

/**
 * @description: 创建左上方的消息通知
 * @author: Quarter
 * @return
 */
const createLeftTopNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示 ", {
    placement: "top-left",
    icon: "info-circle-filled",
  });
};

/**
 * @description: 创建左下方的消息通知
 * @author: Quarter
 * @return
 */
const createLeftBottomNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示", {
    placement: "bottom-left",
    icon: "info-circle-filled",
  });
};

/**
 * @description: 创建右上方的消息通知
 * @author: Quarter
 * @return
 */
const createRightTopNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示", {
    placement: "top-right",
    icon: "info-circle-filled",
  });
};

/**
 * @description: 创建右下方的消息通知
 * @author: Quarter
 * @return
 */
const createRightBottomNotification = () => {
  $notify?.info("普通消息", "用于表示普通操作信息提示", {
    placement: "bottom-right",
    icon: "info-circle-filled",
  });
};
</script>

<template>
  <div style="width: 260px; margin: 0 auto">
    <div style="display: flex; justify-content: space-between">
      <t-button variant="outline" @click="createLeftTopNotification"
        >左上方</t-button
      >
      <t-button variant="outline" @click="createRightTopNotification"
        >右上方</t-button
      >
    </div>
    <div
      style="display: flex; justify-content: space-between; margin-top: 80px"
    >
      <t-button variant="outline" @click="createLeftBottomNotification"
        >左下方</t-button
      >
      <t-button variant="outline" @click="createRightBottomNotification"
        >右下方</t-button
      >
    </div>
  </div>
</template>