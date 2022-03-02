<!--
 * @Author: Quarter
 * @Date: 2022-03-01 05:16:57
 * @LastEditTime: 2022-03-01 07:31:11
 * @LastEditors: Quarter
 * @Description: 单选框组change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupEmitChangeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";

import type { MessageFunc } from "packages/Message";
import type { RadioValue } from "packages/Radio";

const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理 change 事件
 * @author: Quarter
 * @param {RadioValue} val 值
 * @return
 */
const handleChange = (val: RadioValue): void => {
  $message?.info("单选框值修改为【" + val + "】");
};
</script>

<template>
  <t-radio-group default-value="2" @change="handleChange">
    <t-radio value="1">选项一</t-radio>
    <t-radio value="2">选项二</t-radio>
    <t-radio value="3">选项三</t-radio>
    <t-radio value="4">选项四</t-radio>
  </t-radio-group>
</template>