<!--
 * @Author: Quarter
 * @Date: 2022-01-08 03:16:05
 * @LastEditTime: 2022-02-22 12:04:08
 * @LastEditors: Quarter
 * @Description: 加载指令示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/DicSizeDemo.vue
-->
<template>
  <div>
    <div v-loading:[size]="loading" style="max-width: 130px">
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
    <div style="margin-top: 14px">
      <t-button size="small" theme="primary" @click="size = 'small'">小尺寸</t-button>
      <t-button size="small" theme="primary" @click="size = 'medium'">中尺寸</t-button>
      <t-button size="small" theme="primary" @click="size = 'large'">大尺寸</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import type { LoadingSize } from "packages/Loading";

export default Vue.extend({
  data() {
    return {
      loading: true,
      size: "small" as LoadingSize,
    };
  },
});
</script>