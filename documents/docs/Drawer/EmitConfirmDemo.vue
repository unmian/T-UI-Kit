<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:36:07
 * @LastEditors: Quarter
 * @Description: 抽屉确认事件示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/EmitConfirmDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer @confirm="handleConfirm"></t-drawer>
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
      this.$message?.success("您点击了抽屉的确认按钮");
    },
  },
});
</script>