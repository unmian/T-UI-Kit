<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 03:23:59
 * @LastEditors: Quarter
 * @Description: 可拖拽对话框示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/DraggableDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开对话框</t-button>
  <t-dialog
    v-model:visible="visible"
    width="480px"
    title="我是主要信息"
    footer
    draggable
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>