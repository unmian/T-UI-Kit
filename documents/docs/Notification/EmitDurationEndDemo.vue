<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-02-13 10:00:15
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/EmitDurationEndDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" :disabled="visible" @click="visible = !visible">显示通知</t-button>
    <t-notification
      v-if="visible"
      icon="info-circle-filled"
      title="普通通知"
      content="这是一条消息通知"
      :duration="3000"
      @duration-end="handleDurationEnd"
    ></t-notification>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    /**
     * @description: 处理延时结束
     * @author: Quarter
     * @return
     */
    handleDurationEnd(): void {
      this.$message?.info("3000ms 的延时结束了");
      this.visible = false;
    },
  },
});
</script>