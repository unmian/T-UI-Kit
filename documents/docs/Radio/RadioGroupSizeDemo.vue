<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-02 03:30:39
 * @LastEditors: Quarter
 * @Description: 单选框组尺寸示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupSizeDemo.vue
-->
<template>
  <div>
    <t-radio-group v-model="size" variant="outline">
      <t-radio-button value="small">小尺寸</t-radio-button>
      <t-radio-button value="medium">中尺寸（默认）</t-radio-button>
      <t-radio-button value="large">大尺寸</t-radio-button>
    </t-radio-group>
    <t-radio-group v-model="value" :size="size" variant="outline" style="margin-top: 36px;">
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
    <t-radio-group
      v-model="value"
      :size="size"
      variant="default-filled"
      style="margin-top: 24px;"
    >
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
    <t-radio-group
      v-model="value"
      :size="size"
      variant="primary-filled"
      style="margin-top: 24px;"
    >
      <t-radio-button value="1">选项一</t-radio-button>
      <t-radio-button value="2">选项二</t-radio-button>
      <t-radio-button value="3" disabled>选项三</t-radio-button>
      <t-radio-button value="4" disabled>选项四</t-radio-button>
    </t-radio-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import type { RadioGroupSize } from "packages/Radio";

export default Vue.extend({
  data() {
    return {
      size: "medium" as RadioGroupSize, // 尺寸
      value: "4", // 单选框的值
    };
  },
});
</script>