<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 06:03:16
 * @LastEditors: Quarter
 * @Description: 对话框点击取消按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/EmitCancelDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开对话框</t-button>
    <t-dialog
      :visible.sync="visible"
      width="480px"
      title="我是主要信息"
      footer
      @cancel="handleCancel"
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
     * @description: 处理取消事件
     * @author: Quarter
     * @return
     */
    handleCancel(): void {
      this.$message?.warning("您点击了对话框的取消按钮");
    },
  },
});
</script>