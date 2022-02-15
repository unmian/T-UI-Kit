<!--
 * @Author: Quarter
 * @Date: 2022-01-08 01:52:47
 * @LastEditTime: 2022-02-13 09:38:17
 * @LastEditors: Quarter
 * @Description: 关闭按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Message/EmitDurationEndDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" :disabled="visible" @click="visible = !visible">显示消息</t-button>
    <t-message
      v-if="visible"
      theme="info"
      :duration="3000"
      @duration-end="handleDurationEnd"
    >用于表示普通操作信息提示</t-message>
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
    }
  },
});
</script>