<!--
 * @Author: Quarter
 * @Date: 2022-02-18 07:11:45
 * @LastEditTime: 2022-02-20 06:39:22
 * @LastEditors: Quarter
 * @Description: 抽屉可见性示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/VisibleDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible"></t-drawer>
</template>