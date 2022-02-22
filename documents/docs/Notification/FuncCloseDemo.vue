<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:08
 * @LastEditTime: 2022-01-25 06:20:22
 * @LastEditors: Quarter
 * @Description: 函数调用关闭指定消息示例
 * @FilePath: /t-ui-kit/packages/Notification/docs/FuncCloseDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { ref } from "vue";
import { NotifyFunc } from "packages/Notification";

// 消息通知函数
const $notify = inject<NotifyFunc>("$notify");

// 消息索引
const index = ref<number | null>(null);

/**
 * @description: 切换消息通知
 * @author: Quarter
 * @return
 */
const switchNotification = () => {
  if (typeof index.value === "number") {
    $notify?.close(index.value);
    index.value = null;
  } else {
    if ($notify) {
      index.value = $notify?.info("普通消息", "用于表示普通操作信息提示", {
        icon: "info-circle-filled",
        duration: 0,
      });
    }
  }
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="switchNotification">{{
      index ? "关闭通知" : "打开通知"
    }}</t-button>
  </div>
</template>