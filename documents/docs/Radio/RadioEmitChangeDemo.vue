<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:54:13
 * @LastEditTime: 2022-03-01 07:42:18
 * @LastEditors: Quarter
 * @Description: 单选框change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioEmitChangeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";

import type { MessageFunc } from "packages/Message";

// 全局消息通知
const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理 change 事件
 * @author: Quarter
 * @param {boolean} val 是否选中
 * @return
 */
const handleChange = (val: boolean): void => {
  if (val) {
    $message?.info("您选中了本单选框");
  }
};
</script>

<template>
  <t-radio value="1" @change="handleChange">选项一</t-radio>
</template>