<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:16:05
 * @LastEditTime: 2022-02-14 09:18:46
 * @LastEditors: Quarter
 * @Description: 加载指令示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/DirectiveDemo.vue
-->
<template>
  <div>
    <div v-loading="loading" style="max-width: 130px">
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
    <div style="margin-top: 14px">
      <t-button size="small" theme="primary" @click="loading = true">开始加载</t-button>
      <t-button size="small" theme="primary" @click="loading = false">加载完成</t-button>
    </div>
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
});
</script>

