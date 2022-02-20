<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:36:21
 * @LastEditors: Quarter
 * @Description: 抽屉默认插槽示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/FooterSlotDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer>
      抽屉内容
      <template #footer>自定义底部内容</template>
    </t-drawer>
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