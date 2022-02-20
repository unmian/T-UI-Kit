<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:36:00
 * @LastEditors: Quarter
 * @Description: 抽屉取消事件示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/EmitCancelDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer @cancel="handleCancel"></t-drawer>
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
      this.$message?.warning("您点击了抽屉的取消按钮");
    },
  },
});
</script>