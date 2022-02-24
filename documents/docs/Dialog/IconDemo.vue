<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-23 07:00:08
 * @LastEditors: Quarter
 * @Description: 对话框自定义图标示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/IconDemo.vue
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
    theme="info"
    icon="logo-chrome-filled"
    title="我是主要信息"
    footer
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>