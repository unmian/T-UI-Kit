<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:38:30
 * @LastEditors: Quarter
 * @Description: 抽屉关闭事件示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/EmitCloseDemo.vue
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
  $message?.info("您关闭了抽屉");
};
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" footer @close="handleClose"></t-drawer>
</template>