<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:15
 * @LastEditTime: 2022-02-13 09:39:34
 * @LastEditors: Quarter
 * @Description: 函数调用清空消息示例
 * @FilePath: /t-ui-kit/documents/docs/Message/FuncClearDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="createMessage">打开新消息提示</t-button>
    <t-button theme="warning" @click="clearMessage">清空提示</t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建新的消息提示
     * @author: Quarter
     * @return
     */
    createMessage(): void {
      this.$message?.info("用于表示普通操作信息提示，可关闭，通常信息较长", {
        duration: 0,
      });
    },
    /**
     * @description: 清空消息提示
     * @author: Quarter
     * @return
     */
    clearMessage(): void {
      this.$message?.clear();
    },
  },
});
</script>