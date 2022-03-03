<!--
 * @Author: Quarter
 * @Date: 2022-03-03 05:48:04
 * @LastEditTime: 2022-03-03 10:34:00
 * @LastEditors: Quarter
 * @Description: 开关自定义文本
 * @FilePath: /t-ui-kit/documents/docs/Switch/LabelSlotDemo.vue
-->
<template>
  <t-switch>
    <template #label="{ value }">
      <t-icon v-if="value" name="check"></t-icon>
      <t-icon v-else name="close"></t-icon>
    </template>
  </t-switch>
</template>