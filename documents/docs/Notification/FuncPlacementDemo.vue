<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:57
 * @LastEditTime: 2022-02-13 10:24:27
 * @LastEditors: Quarter
 * @Description: 函数调用指定消息位置示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FuncPlacementDemo.vue
-->
<template>
  <div style="width: 260px; margin: 0 auto">
    <div style="display: flex; justify-content: space-between">
      <t-button variant="outline" @click="createLeftTopNotification">左上方</t-button>
      <t-button variant="outline" @click="createRightTopNotification">右上方</t-button>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 80px">
      <t-button variant="outline" @click="createLeftBottomNotification">左下方</t-button>
      <t-button variant="outline" @click="createRightBottomNotification">右下方</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建左上方的消息通知
     * @author: Quarter
     * @return
     */
    createLeftTopNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示 ", {
        placement: "top-left",
        icon: "info-circle-filled",
      });
    },
    /**
     * @description: 创建左下方的消息通知
     * @author: Quarter
     * @return
     */
    createLeftBottomNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
        placement: "bottom-left",
        icon: "info-circle-filled",
      });
    },
    /**
     * @description: 创建右上方的消息通知
     * @author: Quarter
     * @return
     */
    createRightTopNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
        placement: "top-right",
        icon: "info-circle-filled",
      });
    },
    /**
     * @description: 创建右下方的消息通知
     * @author: Quarter
     * @return
     */
    createRightBottomNotification(): void {
      this.$notify?.info("普通消息", "用于表示普通操作信息提示", {
        placement: "bottom-right",
        icon: "info-circle-filled",
      });
    },
  },
});
</script>