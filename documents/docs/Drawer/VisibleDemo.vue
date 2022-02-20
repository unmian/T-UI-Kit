<!--
 * @Author: Quarter
 * @Date: 2022-02-18 07:11:45
 * @LastEditTime: 2022-02-20 06:36:59
 * @LastEditors: Quarter
 * @Description: 抽屉可见性示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/VisibleDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible"></t-drawer>
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