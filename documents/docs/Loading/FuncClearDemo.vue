<!--
 * @Author: Quarter
 * @Date: 2022-01-10 10:58:28
 * @LastEditTime: 2022-02-14 09:25:00
 * @LastEditors: Quarter
 * @Description: 函数调用关闭示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/FuncClearDemo.vue
-->
<template>
  <div>
    <div style="display: flex">
      <div ref="container1" style="max-width: 130px; position: relative">
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
      </div>
      <div ref="container2" style="max-width: 130px; position: relative; margin-left: 30px">
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
        <div>这是一行占位文本</div>
      </div>
    </div>
    <div style="margin-top: 14px">
      <t-button size="small" theme="primary" @click="showLoading">开始加载</t-button>
      <t-button size="small" theme="primary" @click="clearLoading">清空加载</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { LoadingFunc } from "packages/Loading";

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
          size: "small",
          showOverlay: true,
          attach: this.$refs.container1,
          duration: 0,
        });
        this.$loading({
          size: "small",
          showOverlay: true,
          attach: this.$refs.container2,
          duration: 0,
        });
      }
    },
    /**
     * @description: 清空加载动画
     * @author: Quarter
     * @return
     */
    clearLoading(): void {
      this.$loading?.clear();
    },
  },
});
</script>