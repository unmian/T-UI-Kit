<!--
 * @Author: Quarter
 * @Date: 2022-03-01 05:16:57
 * @LastEditTime: 2022-03-02 05:52:37
 * @LastEditors: Quarter
 * @Description: 单选按钮禁用示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioButtonDisabledDemo.vue
-->
<template>
  <t-radio-group model-value="4">
    <t-radio-button value="1">选项一</t-radio-button>
    <t-radio-button value="2">选项二</t-radio-button>
    <t-radio-button value="3" disabled>选项三</t-radio-button>
    <t-radio-button value="4" disabled>选项四</t-radio-button>
  </t-radio-group>
</template>