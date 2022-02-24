<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-23 07:04:45
 * @LastEditors: Quarter
 * @Description: 对话框挂载节点示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/AttachDemo.vue
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
    attach="body"
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>