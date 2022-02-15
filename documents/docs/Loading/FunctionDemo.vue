<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:29:13
 * @LastEditTime: 2022-02-15 09:01:18
 * @LastEditors: Quarter
 * @Description: 加载函数式调用示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/FunctionDemo.vue
-->
<template>
  <t-button theme="primary" @click="showLoading">打开加载动画</t-button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 显示加载动画
     * @author: Quarter
     * @return
     */
    showLoading(): void {
      if (this.$loading) {
        this.$loading({
          duration: 1000,
          fullscreen: true,
        });
      }
    },
  },
});
</script>