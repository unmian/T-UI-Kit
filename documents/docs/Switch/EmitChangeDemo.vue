<!--
 * @Author: Quarter
 * @Date: 2022-03-03 08:28:14
 * @LastEditTime: 2022-03-03 08:59:29
 * @LastEditors: Quarter
 * @Description: 开关 change 事件示例
 * @FilePath: /t-ui-kit/documents/docs/Switch/EmitChangeDemo.vue
-->
<template>
  <t-switch @change="handleChange"></t-switch>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 处理 change 事件
     * @author: Quarter
     * @param {boolean} val 值
     * @return
     */
    handleChange(val: boolean): void {
      if (val) {
        this.$message?.info("您打开了开关");
      } else {
        this.$message?.info("您关闭了开关");
      }
    },
  },
});
</script>