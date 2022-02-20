<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:35:49
 * @LastEditors: Quarter
 * @Description: 抽屉确定按钮文本示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/ConfirmBtnDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" cancel-btn="返回" confirm-btn="提交" footer></t-drawer>
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