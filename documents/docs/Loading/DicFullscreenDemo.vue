<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:16:05
 * @LastEditTime: 2022-02-14 09:17:33
 * @LastEditors: Quarter
 * @Description: 加载指令示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/DicFullscreenDemo.vue
-->
<template>
  <div>
    <div v-loading.fullscreen="loading" style="max-width: 130px">
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
    <div style="margin-top: 14px">
      <t-button size="small" theme="primary" @click="showLoading">开始加载</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    /**
     * @description: 显示加载动画
     * @author: Quarter
     * @return
     */
    showLoading(): void {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
});
</script>