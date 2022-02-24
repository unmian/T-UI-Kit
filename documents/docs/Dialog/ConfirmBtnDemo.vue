<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 06:02:04
 * @LastEditors: Quarter
 * @Description: 对话框确认按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/ConfirmBtnDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible1 = true">按钮文本</t-button>
    <t-button theme="primary" @click="visible2 = true">按钮配置</t-button>
    <t-dialog
      :visible.sync="visible1"
      width="480px"
      theme="info"
      title="我是主要信息"
      footer
      confirm-btn="确认删除"
    >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
    <t-dialog
      :visible.sync="visible2"
      width="480px"
      theme="info"
      title="我是主要信息"
      footer
      :confirm-btn="{ variant: 'outline', theme: 'danger', content: '确认删除', loading: true }"
    >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      visible1: false, // 是否可见
      visible2: false, // 是否可见
    };
  },
});
</script>