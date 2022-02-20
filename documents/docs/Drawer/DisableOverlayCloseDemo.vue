<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:47:47
 * @LastEditTime: 2022-02-20 06:38:24
 * @LastEditors: Quarter
 * @Description: 禁用抽屉遮罩层关闭示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/DisableOverlayCloseDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" footer disable-overlay-close></t-drawer>
</template>