<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:54:13
 * @LastEditTime: 2022-03-02 09:04:01
 * @LastEditors: Quarter
 * @Description: 复选框change事件示例
 * @FilePath: /t-ui-kit/documents/docs/Checkbox/CheckboxEmitChangeDemo.vue
-->
<template>
  <t-checkbox value="1" @change="handleChange">选项一</t-checkbox>
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
        this.$message?.info("您勾选了本复选框");
      } else {
        this.$message?.info("您取消了本复选框的勾选");
      }
    },
  },
});
</script>