<!--
 * @Author: Quarter
 * @Date: 2022-03-01 05:16:57
 * @LastEditTime: 2022-03-01 10:40:20
 * @LastEditors: Quarter
 * @Description: 单选框组change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioGroupEmitChangeDemo.vue
-->
<template>
  <t-radio-group default-value="2" @change="handleChange">
    <t-radio value="1">选项一</t-radio>
    <t-radio value="2">选项二</t-radio>
    <t-radio value="3">选项三</t-radio>
    <t-radio value="4">选项四</t-radio>
  </t-radio-group>
</template>

<script lang="ts">
import Vue from "vue";

import type { RadioValue } from "packages/Radio";

export default Vue.extend({
  methods: {
    /**
     * @description: 处理 change 事件
     * @author: Quarter
     * @param {RadioValue} val 值
     * @return
     */
    handleChange(val: RadioValue): void {
      this.$message?.info("单选框值修改为【" + val + "】");
    },
  },
});
</script>