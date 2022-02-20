<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:39:02
 * @LastEditors: Quarter
 * @Description: 抽屉位置示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/PlacementDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 抽屉位置
const placement = ref<string>("right");
// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理点击事件
 * @author: Quarter
 * @param {DrawerPlacement} p 位置 
 * @return
 */
const handleClick = (p: string): void => {
  placement.value = p;
  visible.value = true;
};
</script>

<template>
  <t-button theme="primary" @click="handleClick('left')">左侧抽屉</t-button>
  <t-button theme="primary" @click="handleClick('top')">上侧抽屉</t-button>
  <t-button theme="primary" @click="handleClick('right')">右侧抽屉</t-button>
  <t-button theme="primary" @click="handleClick('bottom')">下侧抽屉</t-button>
  <t-drawer
    v-model:visible="visible"
    :placement="placement"
    title="标题名称"
    cancel-btn="返回"
    confirm-btn="提交"
    footer
  ></t-drawer>
</template>