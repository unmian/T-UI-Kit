<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 06:08:29
 * @LastEditors: Quarter
 * @Description: 对话框标题示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/TitleDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开对话框</t-button>
    <t-dialog
      :visible.sync="visible"
      title="我是主要信息"
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
});
</script>