<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:13
 * @LastEditTime: 2022-02-13 10:27:38
 * @LastEditors: Quarter
 * @Description: 函数调用快速主题示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FuncThemeDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="createInfoNotification">提示主题</t-button>
    <t-button theme="success" @click="createSuccessNotification">成功主题</t-button>
    <t-button theme="warning" @click="createWarningNotification">警告主题</t-button>
    <t-button theme="danger" @click="createDangerNotification">危险主题</t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建消息类提示
     * @author: Quarter
     * @return
     */
    createInfoNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
        icon: "info-circle-filled",
      });
    },
    /**
     * @description: 创建成功类提示
     * @author: Quarter
     * @return
     */
    createSuccessNotification(): void {
      this.$notify?.success("成功消息", "用于表示操作顺利达成", {
        icon: "check-circle-filled",
      });
    },
    /**
     * @description: 创建警告类提示
     * @author: Quarter
     * @return
     */
    createWarningNotification(): void {
      this.$notify?.warning("警告消息", "用于表示操作引起一定后果", {
        icon: "error-circle-filled",
      });
    },
    /**
     * @description: 创建危险类提示
     * @author: Quarter
     * @return
     */
    createDangerNotification(): void {
      this.$notify?.danger("危险消息", "用于表示操作引起严重的后果", {
        icon: "error-circle-filled",
      });
    },
  },
});
</script>