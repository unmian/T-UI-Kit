<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 06:04:37
 * @LastEditors: Quarter
 * @Description: 对话框点击确认按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/EmitConfirmDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开对话框</t-button>
    <t-dialog
      :visible.sync="visible"
      width="480px"
      title="我是主要信息"
      footer
      @confirm="handleConfirm"
    >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      visible: false, // 是否可见
    };
  },
  methods: {
    /**
     * @description: 处理确认事件
     * @author: Quarter
     * @return
     */
    handleConfirm(): void {
      this.$message?.success("您点击了对话框的确认按钮");
    },
  },
});
</script>