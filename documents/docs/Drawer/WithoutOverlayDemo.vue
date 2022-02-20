<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:50:50
 * @LastEditTime: 2022-02-20 06:37:04
 * @LastEditors: Quarter
 * @Description: 抽屉不适用遮罩层示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/WithoutOverlayDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer without-overlay></t-drawer>
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