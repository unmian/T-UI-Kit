<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:47:47
 * @LastEditTime: 2022-02-20 06:35:56
 * @LastEditors: Quarter
 * @Description: 禁用抽屉遮罩层关闭示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/DisableOverlayCloseDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer disable-overlay-close></t-drawer>
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