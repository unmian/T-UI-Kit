<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:39:09
 * @LastEditors: Quarter
 * @Description: 抽屉大小示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/SizeDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理点击事件
 * @author: Quarter
 * @param {DrawerPlacement} p 位置 
 * @return
 */
const handleClick = (p: string): void => {
  visible.value = true;
};
</script>

<template>
  <t-button theme="primary" @click="handleClick">打开抽屉</t-button>
  <t-drawer
    v-model:visible="visible"
    title="标题名称"
    size="280px"
    footer
  ></t-drawer>
</template>