<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:36:50
 * @LastEditors: Quarter
 * @Description: 抽屉位置示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/SizeDraggableDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="handleClick">打卡抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" footer size-draggable></t-drawer>
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
     * @description: 处理点击事件
     * @author: Quarter
     * @return
     */
    handleClick(): void {
      this.visible = true;
    },
  },
});
</script>