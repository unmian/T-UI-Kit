<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:36:45
 * @LastEditors: Quarter
 * @Description: 抽屉大小示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/SizeDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="handleClick">打开抽屉</t-button>
    <t-drawer :visible.sync="visible" title="标题名称" size="280px" footer></t-drawer>
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
     * @param {DrawerPlacement} p 位置 
     * @return
     */
    handleClick(p: string): void {
      this.visible = true;
    },
  },
});
</script>