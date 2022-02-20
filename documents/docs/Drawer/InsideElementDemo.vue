<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:36:33
 * @LastEditors: Quarter
 * @Description: 抽屉底部示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/InsideElementDemo.vue
-->
<template>
  <div class="drawer-container">
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer inside-element></t-drawer>
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

<style lang="scss" scoped>
.drawer-container {
  width: 100%;
  height: 400px;
  position: relative;
}
</style>