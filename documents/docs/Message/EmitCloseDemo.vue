<!--
 * @Author: Quarter
 * @Date: 2022-01-08 01:52:47
 * @LastEditTime: 2022-02-04 13:02:09
 * @LastEditors: Quarter
 * @Description: 全局提示关闭事件示例
 * @FilePath: /t-ui-kit/documents/docs/Message/EmitCloseDemo.vue
-->
<template>
  <t-message theme="info" close-btn @close="handleClose"
    >用于表示普通操作信息提示</t-message
  >
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
  }
});
</script>