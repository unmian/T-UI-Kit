<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:54:13
 * @LastEditTime: 2022-03-01 10:41:34
 * @LastEditors: Quarter
 * @Description: 单选框change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Radio/RadioEmitChangeDemo.vue
-->
<template>
  <t-radio value="1" @change="handleChange">选项一</t-radio>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 处理 change 事件
     * @author: Quarter
     * @param {boolean} val 是否选中
     * @return
     */
    handleChange(val: boolean): void {
      if (val) {
        this.$message?.info("您选中了本单选框");
      }
    },
  },
});
</script>