<!--
 * @Author: Quarter
 * @Date: 2022-03-03 08:28:14
 * @LastEditTime: 2022-03-03 08:30:57
 * @LastEditors: Quarter
 * @Description: 开关 change 事件示例
 * @FilePath: /t-ui-kit/documents/docs/Switch/EmitChangeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";

import type { MessageFunc } from "packages/Message";

// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理 change 事件
 * @author: Quarter
 * @param {boolean} val 值
 * @return
 */
const handleChange = (val: boolean): void => {
  if (val) {
    $message?.info("您打开了开关");
  } else {
    $message?.info("您关闭了开关");
  }
};
</script>

<template>
  <t-switch @change="handleChange"></t-switch>
</template>