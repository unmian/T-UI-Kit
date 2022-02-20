<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:50:50
 * @LastEditTime: 2022-02-20 06:39:25
 * @LastEditors: Quarter
 * @Description: 抽屉不适用遮罩层示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/WithoutOverlayDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" footer without-overlay></t-drawer>
</template>