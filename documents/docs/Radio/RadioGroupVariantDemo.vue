<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-02 03:30:54
 * @LastEditors: Quarter
 * @Description: 单选框组形式示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupVariantDemo.vue
-->
<template>
  <div>
    <t-radio-group v-model="value" variant="outline">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="value" variant="default-filled" style="margin-top: 24px;">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="value" variant="primary-filled" style="margin-top: 24px;">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      value: "4", // 单选框的值
    };
  },
});
</script>