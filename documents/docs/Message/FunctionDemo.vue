<!--
 * @Author: Quarter
 * @Date: 2022-01-10 05:41:17
 * @LastEditTime: 2022-02-13 09:50:55
 * @LastEditors: Quarter
 * @Description: 全局提示函数式调用示例
 * @FilePath: /t-ui-kit/documents/docs/Message/FunctionDemo.vue
-->
<template>
  <t-button theme="primary" @click="createMessage">函数调用方式</t-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建提示
     * @author: Quarter
     * @return
     */
    createMessage(): void {
      if (this.$message) {
        this.$message({
          text: "打开了一个新的全局消息",
          duration: 2000,
          onClose: () => {
            if (this.$message) {
              this.$message({
                text: "这是全局提示关闭的回调",
              });
            }
          },
        });
      }
    },
  },
});
</script>