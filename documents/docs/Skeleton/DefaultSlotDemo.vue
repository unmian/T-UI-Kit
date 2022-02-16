<!--
 * @Author: Quarter
 * @Date: 2022-02-16 08:03:11
 * @LastEditTime: 2022-02-16 08:48:30
 * @LastEditors: Quarter
 * @Description: 默认插槽示例
 * @FilePath: /t-ui-kit/documents/docs/Skeleton/DefaultSlotDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="startLoad" :disabled="loading">重新加载</t-button>
    <t-skeleton theme="paragraph" :loading="loading" style="margin-top: 24px;">
      <p>骨架屏组件，是指当网络较慢时，在页面真实数据加载之前，给用户展示出页面的大致结构。 一方面让用户对页面有一定的心理预期，另一方面可以改善长期停留在空白屏给用户带来的枯燥和不适感。它可以为用户提供更好视觉效果和使用体验。</p>
    </t-skeleton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      loading: false, // 加载状态
    };
  },
  methods: {
    /**
     * @description: 加载
     * @author: Quarter
     * @return
     */
    startLoad(): void {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
});
</script>