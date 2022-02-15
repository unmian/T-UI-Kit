<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-02-13 09:56:59
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/EmitCloseDemo.vue
-->
<template>
  <t-notification
    icon="info-circle-filled"
    title="普通通知"
    content="这是一条消息通知"
    close-btn
    @close="handleClose"
  ></t-notification>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 处理关闭
     * @author: Quarter
     * @return
     */
    handleClose(): void {
      this.$message?.info("您点击了关闭按钮");
    },
  },
});
</script>