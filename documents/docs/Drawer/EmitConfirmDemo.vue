<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:38:34
 * @LastEditors: Quarter
 * @Description: 抽屉确认事件示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/EmitConfirmDemo.vue
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
  $message?.success("您点击了抽屉的确认按钮");
};
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" footer @confirm="handleConfirm"></t-drawer>
</template>