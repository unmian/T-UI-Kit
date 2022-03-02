<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:54:13
 * @LastEditTime: 2022-03-02 07:15:44
 * @LastEditors: Quarter
 * @Description: 复选框change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Checkbox/CheckboxEmitChangeDemo.vue
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
    $message?.info("您勾选了本复选框");
  } else {
    $message?.info("您取消了本复选框的勾选");
  }
};
</script>

<template>
  <t-checkbox value="1" @change="handleChange">选项一</t-checkbox>
</template>