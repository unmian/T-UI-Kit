<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 05:20:56
 * @LastEditors: Quarter
 * @Description: 对话框底部插槽示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/FooterSlotDemo.vue
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
  >
    <template #header>这是一个自定义的标题</template>
    <template #default>我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</template>
    <template #footer>
      <t-button theme="primary">自定义按钮</t-button>
    </template>
  </t-dialog>
</template>