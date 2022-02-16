<!--
 * @Author: Quarter
 * @Date: 2022-02-16 05:27:18
 * @LastEditTime: 2022-02-16 08:49:47
 * @LastEditors: Quarter
 * @Description: 骨架屏加载状态示例
 * @FilePath: /t-ui-kit/documents/docs/Skeleton/LoadingDemo.vue
-->
<template>
  <t-skeleton :loading="loading"></t-skeleton>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      loading: true,
    };
  },
});
</script>