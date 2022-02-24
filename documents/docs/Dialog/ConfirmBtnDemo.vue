<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-23 06:59:55
 * @LastEditors: Quarter
 * @Description: 对话框确认按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/ConfirmBtnDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible1 = ref<boolean>(false);
// 是否可见
const visible2 = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible1 = true">按钮文本</t-button>
  <t-button theme="primary" @click="visible2 = true">按钮配置</t-button>
  <t-dialog
    v-model:visible="visible1"
    width="480px"
    theme="info"
    title="我是主要信息"
    footer
    confirm-btn="确认删除"
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
  <t-dialog
    v-model:visible="visible2"
    width="480px"
    theme="info"
    title="我是主要信息"
    footer
    :confirm-btn="{ variant: 'outline', theme: 'danger', content: '确认删除', loading: true }"
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>