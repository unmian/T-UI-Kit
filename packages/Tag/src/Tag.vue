<!--
 * @Author: Quarter
 * @Date: 2022-01-08 05:27:23
 * @LastEditTime: 2022-02-20 09:37:06
 * @LastEditors: Quarter
 * @Description: 标签
 * @FilePath: /t-ui-kit/packages/Tag/src/Tag.vue
-->
<template>
  <span class="t-tag" :class="classNameList">
    <span v-if="icon" class="t-tag__icon">
      <icon :name="icon"></icon>
    </span>
    <span class="t-tag__text" :style="{ maxWidth }">
      <slot></slot>
    </span>
    <span
      v-if="closable"
      class="t-tag__close-btn"
      @click="close"
      @mousedown="isActive = true"
      @mouseup="isActive = false"
      @mouseenter="isHover = true"
      @mouseout="isHover = false; isActive = false"
    >
      <icon name="close"></icon>
    </span>
  </span>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";
import { TagSize, TagTheme, TagVariant } from "./type";

import "packages/Style";
import "./style/tag.scss";

export default Vue.extend({
  name: "TTag",
  components: {
    Icon,
  },
  props: {
    size: {
      // 标签尺寸
      type: String,
      default: "medium",
    } as PropOptions<TagSize>,
    theme: {
      // 标签主题
      type: String,
      default: "default",
    } as PropOptions<TagTheme>,
    variant: {
      // 标签变体
      type: String,
      default: "dark",
    } as PropOptions<TagVariant>,
    icon: String, // 图标
    closable: Boolean, // 是否可关闭
    disabled: Boolean, // 是否禁用
    maxWidth: String, // 最大宽度
  },
  data() {
    return {
      isHover: false, // 是否悬浮
      isActive: false, // 是否点击
    };
  },
  computed: {
    /**
     * @description: 标签尺寸
     * @author: Quarter
     * @return {TagSize}
     */
    tagSize(): TagSize {
      if (["small", "medium", "large"].includes(this.size)) {
        return this.size;
      }
      return "medium";
    },
    /**
     * @description: 标签主题
     * @author: Quarter
     * @return {TagTheme}
     */
    tagTheme(): TagTheme {
      const themeList: TagTheme[] = [
        "default",
        "primary",
        "success",
        "warning",
        "danger",
      ];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "default";
    },
    /**
     * @description: 标签变体
     * @author: Quarter
     * @return {TagVariant}
     */
    tagVariant(): TagVariant {
      if (["dark", "light", "plain"].includes(this.variant)) {
        return this.variant;
      }
      return "dark";
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-tag--${this.tagSize}`,
        `t-tag--${this.tagTheme}`,
        `t-tag--${this.tagVariant}`,
      ];
      if (this.closable) {
        classList.push("t-tag--closable");
        if (this.disabled) {
          classList.push("t-tag--disabled");
        } else {
          if (this.isActive) {
            classList.push("t-tag--active");
          } else if (this.isHover) {
            classList.push("t-tag--hover");
          }
        }
      }
      return classList;
    },
  },
  methods: {
    /**
     * @description: 关闭标签
     * @author: Quarter
     * @return
     */
    close(): void {
      this.$emit("close");
    },
  },
});
</script>