<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:15
 * @LastEditTime: 2022-02-13 10:04:52
 * @LastEditors: Quarter
 * @Description: 函数调用清空消息示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FuncClearDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="createNotification">打开新消息通知</t-button>
    <t-button theme="warning" @click="clearNotification">清空通知</t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建新的消息通知
     * @author: Quarter
     * @return
     */
    createNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
        icon: "info-circle-filled",
        duration: 0,
      });
    },
    /**
     * @description: 清空消息通知
     * @author: Quarter
     * @return
     */
    clearNotification(): void {
      this.$notify?.clear();
    },
  },
});
</script>