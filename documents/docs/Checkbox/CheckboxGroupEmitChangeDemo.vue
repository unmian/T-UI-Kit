<!--
 * @Author: Quarter
 * @Date: 2022-03-01 05:16:57
 * @LastEditTime: 2022-03-02 07:47:00
 * @LastEditors: Quarter
 * @Description: 复选框组change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Checkbox/CheckboxGroupEmitChangeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";

import type { MessageFunc } from "packages/Message";
import type { CheckboxValue } from "packages/Checkbox";

const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理 change 事件
 * @author: Quarter
 * @param {CheckboxValue[]} vals 值
 * @param {CheckboxValue} val 当前变化值
 * @param {boolean} checked 值
 * @return
 */
const handleChange = (vals: CheckboxValue[], val: CheckboxValue, checked: boolean): void => {
  if (checked) {
    $message?.info(`复选框值为【${vals.join("、")}】，本次勾选了【${val}】`);
  } else {
    $message?.info(`复选框值为【${vals.join("、")}】，本次移除了【${val}】`);
  }
};
</script>

<template>
  <t-checkbox-group :default-value="['2']" @change="handleChange">
    <t-checkbox value="1">选项一</t-checkbox>
    <t-checkbox value="2">选项二</t-checkbox>
    <t-checkbox value="3">选项三</t-checkbox>
    <t-checkbox value="4">选项四</t-checkbox>
  </t-checkbox-group>
</template>