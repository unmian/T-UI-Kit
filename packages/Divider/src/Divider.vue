<!--
 * @Author: Quarter
 * @Date: 2022-01-11 05:47:23
 * @LastEditTime: 2022-03-03 10:47:04
 * @LastEditors: Quarter
 * @Description: 分割线
 * @FilePath: /t-ui-kit/packages/Divider/src/Divider.vue
-->
<template>
  <div class="t-divider" :class="classNameList">
    <span v-if="dividerLayout === 'horizontal' && hasDefaultSlot" class="t-divider__inner-text">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { DividerLayout, DividerAlign } from "./type";

import "packages/Style";
import "./style/divider.scss";

export default Vue.extend({
  name: "TDivider",
  props: {
    dashed: {
      // 虚线
      type: Boolean,
      default: false,
    },
    layout: {
      // 布局方式
      type: String,
      default: "horizontal",
    } as PropOptions<DividerLayout>,
    align: {
      // 对齐方式
      type: String,
      default: "center",
    } as PropOptions<DividerAlign>,
  },
  computed: {
    /**
     * @description: 布局方式
     * @author: Quarter
     * @return {DividerLayout}
     */
    dividerLayout(): DividerLayout {
      const layoutList: DividerLayout[] = ["horizontal", "vertical"];
      if (layoutList.includes(this.layout)) {
        return this.layout;
      }
      return "horizontal";
    },
    /**
     * @description: 布局方式
     * @author: Quarter
     * @return {DividerLayout}
     */
    dividerAlign(): DividerAlign {
      const alignList: DividerAlign[] = ["left", "center", "right"];
      if (alignList.includes(this.align)) {
        return this.align;
      }
      return "center";
    },
    /**
     * @description: 是否存在默认插槽内容
     * @author: Quarter
     * @return {boolean}
     */
    hasDefaultSlot(): boolean {
      if (undefined !== this.$scopedSlots.default) {
        return true;
      }
      if (Array.isArray(this.$slots.default)) {
        return this.$slots.default.length > 0;
      } else {
        return !!this.$slots.default;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-divider--${this.dividerLayout}`,
        `t-divider--${this.dividerAlign}`,
      ];
      if (this.dashed) {
        classList.push(`t-divider--dashed`);
      }
      if (this.hasDefaultSlot) {
        classList.push(`t-divider--with-text`);
      }
      return classList;
    },
  },
});
</script>