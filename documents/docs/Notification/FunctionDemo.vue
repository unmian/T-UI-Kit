<!--
 * @Author: Quarter
 * @Date: 2022-01-25 05:43:53
 * @LastEditTime: 2022-02-13 10:27:59
 * @LastEditors: Quarter
 * @Description: 消息通知函数式调用示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FunctionDemo.vue
-->
<template>
  <t-button theme="primary" @click="createNotification">函数调用方式</t-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建通知
     * @author: Quarter
     * @return
     */
    createNotification(): void {
      if (this.$notify) {
        this.$notify({
          icon: "info-circle-filled",
          title: "新的消息",
          content: "打开了一个新的全局消息",
          duration: 2000,
          onClose: () => {
            if (this.$notify) {
              this.$message?.info("这是全局提示关闭的回调");
            }
          },
        });
      }
    },
  },
});

</script>