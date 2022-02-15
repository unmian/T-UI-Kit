<!--
 * @Author: Quarter
 * @Date: 2022-01-12 06:08:07
 * @LastEditTime: 2022-02-13 09:34:18
 * @LastEditors: Quarter
 * @Description: 警告提醒主题示例
 * @FilePath: /t-ui-kit/documents/docs/Alert/CloseDemo.vue
-->
<template>
  <div>
    <t-alert theme="info" icon="info-circle-filled" closable @close="handleClose">这是一条普通的消息提示</t-alert>
    <t-alert
      theme="info"
      icon="info-circle-filled"
      closable
      close-btn="不再提醒"
      @close="handleClose"
    >这是一条普通的消息提示</t-alert>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 处理关闭回调
     * @author: Quarter
     * @return
     */
    handleClose(): void {
      this.$message?.info("您点击了关闭按钮");
    },
  },
});
</script>