<!--
 * @Author: Quarter
 * @Date: 2022-02-16 03:22:10
 * @LastEditTime: 2022-02-16 08:58:01
 * @LastEditors: Quarter
 * @Description: 骨架屏
 * @FilePath: /t-ui-kit/packages/Skeleton/src/Skeleton.vue
-->
<template>
  <div v-if="loading" class="t-skeleton" :class="classNameList">
    <template v-if="skeletonTheme === 'text'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </template>
    <template v-else-if="skeletonTheme === 'paragraph'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </template>
    <template v-else-if="skeletonTheme === 'avatar'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__circle"></div>
      </div>
    </template>
    <template v-else-if="skeletonTheme === 'avatar-text'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__circle"></div>
        <div class="t-skeleton__col"></div>
      </div>
    </template>
    <template v-else-if="skeletonTheme === 'tab'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
    </template>
    <template v-else-if="skeletonTheme === 'article'">
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
      <div class="t-skeleton__row">
        <div class="t-skeleton__col"></div>
        <div class="t-skeleton__col"></div>
      </div>
    </template>
  </div>
  <slot-node v-else>
    <slot></slot>
  </slot-node>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SlotNode } from "packages/Global";
import { SkeletonTheme, SkeletonAnimation, SkeletonSize } from "./type";

import "packages/Style";
import "./style/skeleton.scss";

export default Vue.extend({
  name: "TSkeleton",
  components: {
    SlotNode,
  },
  props: {
    loading: { // 加载状态
      type: Boolean,
      default: false,
    },
    theme: { // 骨架屏主题
      type: String,
      default: "text",
    } as PropOptions<SkeletonTheme>,
    animation: { // 动画类型
      type: String,
      default: "SkeletonAnimation",
    } as PropOptions<SkeletonAnimation>,
    size: { // 骨架屏尺寸
      type: String,
      default: "large",
    } as PropOptions<SkeletonSize>,
  },
  computed: {
    /**
     * @description: 骨架屏主题
     * @author: Quarter
     * @return {SkeletonTheme}
     */
    skeletonTheme(): SkeletonTheme {
      const themeList: SkeletonTheme[] = ["text", "paragraph", "avatar", "avatar-text", "tab", "article"];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "text";
    },
    /**
     * @description: 骨架屏尺寸
     * @author: Quarter
     * @return {SkeletonSize}
     */
    skeletonSize(): SkeletonSize {
      const sizeList: SkeletonSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "large";
    },
    /**
     * @description: 骨架屏动画
     * @author: Quarter
     * @return {SkeletonSize}
     */
    skeletonAnimation(): SkeletonAnimation {
      const animationList: SkeletonAnimation[] = ["gradient", "flashed"];
      if (animationList.includes(this.animation)) {
        return this.animation;
      }
      return "gradient";
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      return [
        `t-skeleton--theme-${this.skeletonTheme}`,
        `t-skeleton--size-${this.skeletonSize}`,
        `t-skeleton--${this.skeletonAnimation}`,
      ];
    },
  },
});
</script>