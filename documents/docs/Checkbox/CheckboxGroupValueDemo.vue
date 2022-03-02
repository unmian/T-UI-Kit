<!--
 * @Author: Quarter
 * @Date: 2022-03-01 02:29:29
 * @LastEditTime: 2022-03-02 09:07:19
 * @LastEditors: Quarter
 * @Description: 复选框组值示例
 * @FilePath: /t-ui-kit/documents/docs/Checkbox/CheckboxGroupValueDemo.vue
-->
<template>
  <div>
    <div>选中值：{{ value }}</div>
    <t-checkbox-group v-model="value" style="margin-top: 24px;">
      <t-checkbox value="1">选项一</t-checkbox>
      <t-checkbox value="2">选项二</t-checkbox>
      <t-checkbox value="3">选项三</t-checkbox>
      <t-checkbox value="4" disabled>选项四</t-checkbox>
    </t-checkbox-group>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import type { CheckboxValue } from "packages/Checkbox";

export default Vue.extend({
  data() {
    return {
      value: ["3"] as CheckboxValue[], // 复选框的值
    };
  },
});
</script>