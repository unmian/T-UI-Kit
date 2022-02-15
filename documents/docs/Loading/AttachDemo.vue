<!--
 * @Author: Quarter
 * @Date: 2022-01-08 02:57:24
 * @LastEditTime: 2022-02-15 08:14:40
 * @LastEditors: Quarter
 * @Description: 附着节点加载示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/AttachDemo.vue
-->
<template>
  <div>
    <t-loading :loading="loading" text="加载中..." size="small" attach="body" fullscreen></t-loading>
    <t-button size="small" theme="primary" @click="showLoading">挂载到 body 节点，1 秒后自动关闭</t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      loading: false, // 加载动画
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