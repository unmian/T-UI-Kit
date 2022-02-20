<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:29:56
 * @LastEditTime: 2022-02-20 06:39:18
 * @LastEditors: Quarter
 * @Description: 抽屉标题示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/TitleDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称"></t-drawer>
</template>