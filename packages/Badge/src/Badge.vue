<!--
 * @Author: Quarter
 * @Date: 2022-02-17 10:39:58
 * @LastEditTime: 2022-02-17 11:46:22
 * @LastEditors: Quarter
 * @Description: 徽标组件
 * @FilePath: /t-ui-kit/packages/Badge/src/Badge.vue
-->
<template>
  <div class="t-badge" :class="classNameList">
    <slot></slot>
    <template v-if="badgeCount">
      <sup v-if="dot" class="t-badge__dot" :style="{ backgroundColor: badgeColor }"></sup>
      <sup v-else class="t-badge__count" :style="{ backgroundColor: badgeColor }">{{ badgeCount }}</sup>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { BadgeShape, BadgeSize } from "./type";

import "packages/Style";
import "./style/badge.scss";

export default Vue.extend({
  props: {
    count: [Number, String], // 计数
    dot: { // 是否点状显示
      type: Boolean,
      default: false,
    },
    size: { // 尺寸
      type: String,
      default: "medium",
    } as PropOptions<BadgeSize>,
    shape: { // 形状
      type: String,
      default: "circle",
    } as PropOptions<BadgeShape>,
    color: String, // 颜色
  },
  computed: {
    /**
     * @description: 计数内容
     * @author: Quarter
     * @return {string|number}
     */
    badgeCount(): number | string | undefined {
      if (typeof this.count === "number") {
        if (this.count > 99) {
          return "99+";
        }
      }
      return this.count;
    },
    /**
     * @description: 徽标尺寸
     * @author: Quarter
     * @return {BadgeSize}
     */
    badgeSize(): BadgeSize {
      const sizeList: BadgeSize[] = ["small", "medium"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "medium"
    },
    /**
     * @description: 徽标形状
     * @author: Quarter
     * @return {BadgeShape}
     */
    badgeShape(): BadgeShape {
      const shapeList: BadgeShape[] = ["circle", "round"];
      if (shapeList.includes(this.shape)) {
        return this.shape;
      }
      return "circle";
    },
    /**
     * @description: 徽标颜色
     * @author: Quarter
     * @return {string}
     */
    badgeColor(): string | undefined {
      const colorRg: RegExp = new RegExp(/^(#[0-9a-fA-F]{6})|(#[0-9a-fA-F]{8})|(rgb\(([0-9]{1,3},){2}[0-9]{1,3}\))|(rgba\(([0-9]{1,3},){3}((0(\.[0-9]+){0,1})|1)\))$/);
      if (typeof this.color === "string" && colorRg.test(this.color)) {
        return this.color;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-badge--${this.badgeSize}`,
        `t-badge--${this.badgeShape}`
      ];
      if (this.dot) classList.push("t-badge--dot");
      return classList;
    },
  },
});
</script>