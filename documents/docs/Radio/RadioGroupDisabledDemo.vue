<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-01 10:42:51
 * @LastEditors: Quarter
 * @Description: 单选框组禁用示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupDisabledDemo.vue
-->
<template>
  <div>
    <t-radio-group disabled>
      <t-radio value="1">选项一</t-radio>
      <t-radio value="2">选项二</t-radio>
      <t-radio value="3">选项三</t-radio>
      <t-radio value="4">选项四</t-radio>
    </t-radio-group>
    <t-radio-group disabled style="margin-top: 24px;">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3">选项三</t-radio-button>
      <t-radio-button value="4">选项四</t-radio-button>
    </t-radio-group>
  </div>
</template>