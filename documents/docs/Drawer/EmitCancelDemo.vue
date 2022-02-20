<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:38:27
 * @LastEditors: Quarter
 * @Description: 抽屉取消事件示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/EmitCancelDemo.vue
-->
<script lang="ts" setup>
import { inject, ref } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示函数
const $message = inject<MessageFunc>("$message");
// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理取消事件
 * @author: Quarter
 * @return
 */
const handleCancel = (): void => {
  $message?.warning("您点击了抽屉的取消按钮");
};
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" footer @cancel="handleCancel"></t-drawer>
</template>