<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:31:39
 * @LastEditTime: 2022-02-20 06:39:14
 * @LastEditors: Quarter
 * @Description: 抽屉位置示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/SizeDraggableDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理点击事件
 * @author: Quarter
 * @return
 */
const handleClick = (): void => {
  visible.value = true;
};
</script>

<template>
  <t-button theme="primary" @click="handleClick">打卡抽屉</t-button>
  <t-drawer
    v-model:visible="visible"
    title="标题名称"
    footer
    size-draggable
  ></t-drawer>
</template>