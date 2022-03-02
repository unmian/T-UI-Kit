<!--
 * @Author: Quarter
 * @Date: 2022-02-16 07:32:02
 * @LastEditTime: 2022-03-02 05:41:16
 * @LastEditors: Quarter
 * @Description: 骨架屏尺寸示例
 * @FilePath: /t-ui-kit/documents/docs/Skeleton/SizeDemo.vue
-->
<template>
  <div>
    <t-radio-group v-model="size">
      <t-radio-button value="small">小尺寸</t-radio-button>
      <t-radio-button value="medium">中尺寸</t-radio-button>
      <t-radio-button value="large">大尺寸（默认）</t-radio-button>
    </t-radio-group>
    <div style="margin-top: 36px;">文本</div>
    <t-skeleton theme="text" :size="size" loading style="margin-top: 16px;"></t-skeleton>
    <div style="margin-top: 24px;">段落</div>
    <t-skeleton theme="paragraph" :size="size" loading style="margin-top: 16px;"></t-skeleton>
    <div style="margin-top: 24px;">头像</div>
    <t-skeleton theme="avatar" :size="size" loading style="margin-top: 16px;"></t-skeleton>
    <div style="margin-top: 24px;">头像和描述</div>
    <t-skeleton theme="avatar-text" :size="size" loading style="margin-top: 16px;"></t-skeleton>
    <div style="margin-top: 24px;">选项卡</div>
    <t-skeleton theme="tab" :size="size" loading style="margin-top: 16px;"></t-skeleton>
    <div style="margin-top: 24px;">文章</div>
    <t-skeleton theme="article" :size="size" loading style="margin-top: 16px;"></t-skeleton>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import type { SkeletonSize } from "packages/Skeleton";

export default Vue.extend({
  data() {
    return {
      size: "large" as SkeletonSize, // 尺寸
    };
  },
});
</script>