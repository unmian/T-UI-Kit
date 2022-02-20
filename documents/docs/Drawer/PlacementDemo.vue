<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:36:40
 * @LastEditors: Quarter
 * @Description: 抽屉位置示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/PlacementDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="handleClick('left')">左侧抽屉</t-button>
    <t-button theme="primary" @click="handleClick('top')">上侧抽屉</t-button>
    <t-button theme="primary" @click="handleClick('right')">右侧抽屉</t-button>
    <t-button theme="primary" @click="handleClick('bottom')">下侧抽屉</t-button>
    <t-drawer
      :visible.sync="visible"
      :placement="placement"
      title="标题名称"
      cancel-btn="返回"
      confirm-btn="提交"
      footer
    ></t-drawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      visible: false, // 是否可见
      placement: "right", // 抽屉位置
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
      this.placement = p;
      this.visible = true;
    },
  },
});
</script>