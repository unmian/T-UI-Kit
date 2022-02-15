<!--
 * @Author: Quarter
 * @Date: 2021-12-29 07:36:34
 * @LastEditTime: 2022-02-04 02:58:23
 * @LastEditors: Quarter
 * @Description: 按钮
 * @FilePath: /t-ui-kit/packages/Button/src/Button.vue
-->
<template>
  <button class="t-button" :class="classNameList" :disabled="buttonDisabled" @click="handleClick">
    <div v-if="loading && !icon" class="t-button__loading"></div>
    <div v-if="icon" class="t-button__icon">
      <icon :name="icon"></icon>
    </div>
    <div v-if="!circle" class="t-button__text">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";

import "packages/Style";
import "./style/button.scss";

import { ButtonSize, ButtonTheme, ButtonVariant } from "./type";

export default Vue.extend({
  name: "TButton",
  components: {
    Icon,
  },
  props: {
    variant: {
      // 按钮变体
      type: String,
      default: "base",
    } as PropOptions<ButtonVariant>,
    disabled: {
      // 按钮类型
      type: Boolean,
      default: false,
    },
    loading: {
      // 加载中
      type: Boolean,
      default: false,
    },
    size: {
      // 按钮大小
      type: String,
      default: "medium",
    } as PropOptions<ButtonSize>,
    ghost: {
      // 是否👻按钮
      type: Boolean,
      default: false,
    },
    theme: {
      // 按钮主题样式
      type: String,
      default: "default",
    } as PropOptions<ButtonTheme>,
    icon: String, // 图标
    circle: {
      // 是否圆形图标
      type: Boolean,
      default: false,
    },
    block: {
      // 是否块级按钮
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /**
     * @description: 禁用状态
     * @author: Quarter
     * @return {Boolean}
     */
    buttonDisabled(): boolean {
      if (this.disabled || this.loading) {
        return true;
      }
      return false;
    },
    /**
     * @description: 按钮尺寸
     * @author: Quarter
     * @return {ButtonSize}
     */
    buttonSize(): ButtonSize {
      const sizeList: ButtonSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "medium";
    },
    /**
     * @description: 按钮变体
     * @author: Quarter
     * @return {ButtonVariant}
     */
    buttonVariant(): ButtonVariant {
      const variantList: ButtonVariant[] = ["base", "outline", "dashed", "text"];
      if (variantList.includes(this.variant)) {
        return this.variant;
      }
      return "base";
    },
    /**
     * @description: 按钮主题
     * @author: Quarter
     * @return {ButtonTheme}
     */
    buttonTheme(): ButtonTheme {
      const themeList: ButtonTheme[] = [
        "default",
        "primary",
        "warning",
        "danger",
        "success",
      ];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "default";
    },
    /**
     * @description: 按钮类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-button--${this.buttonSize}`,
        `t-button--${this.buttonVariant}`,
        `t-button--${this.buttonTheme}`,
      ];
      if (this.ghost) {
        classList.push("t-button--ghost");
      }
      if (!!this.icon && this.circle) {
        classList.push("t-button--circle");
      } else {
        if (this.loading) {
          classList.push("t-button--loading");
        }
        if (this.block) {
          classList.push("t-button--block");
        }
      }
      return classList;
    },
  },
  methods: {
    /**
     * @description: 点击事件
     * @author: Quarter
     * @param {MouseEvent} e 事件
     * @return
     */
    handleClick(e: MouseEvent) {
      if (this.buttonDisabled === false) {
        this.$emit("click", e);
      }
    },
  }
});
</script>