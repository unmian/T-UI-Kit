<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-02 05:51:02
 * @LastEditors: Quarter
 * @Description: 单选框组值示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupModelValue Demo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 单选框的值
const modelValue = ref<string>("3");
</script>

<template>
  <div>选中值：{{ modelValue }}</div>
  <t-radio-group v-model="modelValue" style="margin-top: 24px;">
    <t-radio value="1">选项一</t-radio>
    <t-radio value="2">选项二</t-radio>
    <t-radio value="3">选项三</t-radio>
    <t-radio value="4" disabled>选项四</t-radio>
  </t-radio-group>
  <t-radio-group v-model="modelValue" style="margin-top: 24px;">
    <t-radio-button value="1">选项一</t-radio-button>
    <t-radio-button value="2">选项二</t-radio-button>
    <t-radio-button value="3">选项三</t-radio-button>
    <t-radio-button value="4" disabled>选项四</t-radio-button>
  </t-radio-group>
</template>