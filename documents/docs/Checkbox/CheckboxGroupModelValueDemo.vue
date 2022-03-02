<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-02 07:35:25
 * @LastEditors: Quarter
 * @Description: 复选框组值示例
 * @FilePath: /t-ui-kit/documents/docs/Checkbox/CheckboxGroupModelValueDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

import type { CheckboxValue } from "packages/Checkbox";

// 复选框的值
const modelValue = ref<CheckboxValue[]>(["3"]);
</script>

<template>
  <div>选中值：{{ modelValue }}</div>
  <t-checkbox-group v-model="modelValue" style="margin-top: 24px;">
    <t-checkbox value="1">选项一</t-checkbox>
    <t-checkbox value="2">选项二</t-checkbox>
    <t-checkbox value="3">选项三</t-checkbox>
    <t-checkbox value="4" disabled>选项四</t-checkbox>
  </t-checkbox-group>
</template>