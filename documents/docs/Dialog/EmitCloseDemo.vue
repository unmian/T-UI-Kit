<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 03:32:57
 * @LastEditors: Quarter
 * @Description: 对话框关闭事件示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/EmitCloseDemo.vue
-->
<script lang="ts" setup>
import { inject, ref } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理关闭事件
 * @author: Quarter
 * @return
 */
const handleClose = (): void => {
  $message?.info("您关闭了对话框");
};
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开对话框</t-button>
  <t-dialog
    v-model:visible="visible"
    width="480px"
    title="我是主要信息"
    footer
    overlay-closable
    @close="handleClose"
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>