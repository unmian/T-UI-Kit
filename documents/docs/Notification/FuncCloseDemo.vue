<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:08
 * @LastEditTime: 2022-02-13 10:21:21
 * @LastEditors: Quarter
 * @Description: 函数调用关闭指定消息示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FuncCloseDemo.vue
-->
<template>
  <t-button theme="primary" @click="switchNotification">
    {{
      index ? "关闭通知" : "打开通知"
    }}
  </t-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      index: -1 as number | null,
    };
  },
  methods: {
    /**
     * @description: 切换消息通知
     * @author: Quarter
     * @return
     */
    switchNotification(): void {
      if (typeof this.index === "number") {
        this.$notify?.close(this.index);
        this.index = null;
      } else {
        if (this.$notify) {
          this.index = this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
            icon: "info-circle-filled",
            duration: 0,
          });
        }
      }
    },
  },
});
</script>