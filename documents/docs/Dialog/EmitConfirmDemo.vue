<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 03:32:10
 * @LastEditors: Quarter
 * @Description: 对话框点击确认按钮示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/EmitConfirmDemo.vue
-->
<script lang="ts" setup>
import { inject, ref } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理确认事件
 * @author: Quarter
 * @return
 */
const handleConfirm = (): void => {
  $message?.success("您点击了对话框的确认按钮");
};
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开对话框</t-button>
  <t-dialog
    v-model:visible="visible"
    width="480px"
    title="我是主要信息"
    footer
    @confirm="handleConfirm"
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>