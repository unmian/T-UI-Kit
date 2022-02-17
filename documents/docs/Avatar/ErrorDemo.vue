<!--
 * @Author: Quarter
 * @Date: 2022-02-17 08:28:53
 * @LastEditTime: 2022-02-17 08:31:41
 * @LastEditors: Quarter
 * @Description: 头像加载错误示例
 * @FilePath: /t-ui-kit/documents/docs/Avatar/ErrorDemo.vue
-->
<script lang="ts" setup>
import { inject, ref } from "vue";
import { MessageFunc } from "packages/Message";

// 全局消息
const $message = inject<MessageFunc>("$message");

// 是否可见
const visible = ref<boolean>(false);

/**
 * @description: 处理错误
 * @author: Quarter
 * @return
 */
const handleError = (): void => {
  $message?.danger("头像加载失败了");
};
</script>

<template>
  <div>
    <t-avatar v-if="visible" image="/404" icon="error" @error="handleError"></t-avatar>
  </div>
  <div style="margin-top: 24px">
    <t-button theme="primary" @click="visible = !visible">{{ visible ? '隐藏' : '显示' }}头像</t-button>
  </div>
</template>