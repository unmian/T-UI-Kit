<!--
 * @Author: Quarter
 * @Date: 2022-02-16 05:27:18
 * @LastEditTime: 2022-02-16 06:19:06
 * @LastEditors: Quarter
 * @Description: 骨架屏加载状态示例
 * @FilePath: /t-ui-kit/documents/docs/Skeleton/LoadingDemo.vue
-->
<script lang="ts" setup>
import { ref } from "@vue/runtime-dom";

// 加载状态
const loading = ref<boolean>(true);
</script>

<template>
  <t-skeleton :loading="loading"></t-skeleton>
</template>