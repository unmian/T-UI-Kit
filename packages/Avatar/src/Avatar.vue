<!--
 * @Author: Quarter
 * @Date: 2022-02-17 01:07:43
 * @LastEditTime: 2022-02-22 11:52:23
 * @LastEditors: Quarter
 * @Description: 头像
 * @FilePath: /t-ui-kit/packages/Avatar/src/Avatar.vue
-->
<template>
  <div ref="avatar" class="t-avatar" :class="classNameList" :style="avatarStyle">
    <img
      v-if="image && false === loadError"
      :src="image"
      :alt="alt"
      :style="{ width: customSize, height: customSize }"
      @error="handleImageLoadError"
    />
    <icon ref="text" v-else-if="icon" :name="icon" :style="iconStyle"></icon>
    <span ref="text" v-else :style="textStyle">{{ alt }}</span>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";

import type { AvatarShape, AvatarSize } from "./type";

import "packages/Style";
import "./style/avatar.scss";

export default Vue.extend({
  name: "TAvatar",
  components: {
    Icon,
  },
  props: {
    image: String, // 图片地址
    icon: String, // 图标名称
    alt: String, // 文字内容
    size: { // 头像尺寸
      type: String,
      default: "large",
    } as PropOptions<AvatarSize | string>,
    shape: { // 头像形状
      type: String,
      default: "circle",
    } as PropOptions<AvatarShape>,
  },
  data() {
    return {
      isGroup: false, // 是否群组
      loadError: false, // 加载失败
      resizeObserver: undefined as ResizeObserver | undefined, // 尺寸观察者
      avatarWidth: 0,// 头像宽度
      textFontSize: undefined as number | undefined, // 文本字号
      scale: 1, // 缩放比例
    };
  },
  computed: {
    /**
     * @description: 自定义尺寸
     * @author: Quarter
     * @return {string}
     */
    customSize(): string | undefined {
      if (typeof this.size === "string") {
        const sizeRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
        const str = this.size.replace(/[\s\n\t]+/g, "");
        if (sizeRg.test(str)) return str;
      }
    },
    /**
     * @description: 内置尺寸
     * @author: Quarter
     * @return {AvatarSize}
     */
    buildInSize(): AvatarSize | undefined {
      if (undefined === this.customSize) {
        const sizeList: AvatarSize[] = ["small", "medium", "large"];
        if (sizeList.includes(this.size as AvatarSize)) {
          return this.size as AvatarSize;
        }
        return "large";
      }
    },
    /**
     * @description: 头像形状
     * @author: Quarter
     * @return {AvatarShape}
     */
    avatarShape(): AvatarShape {
      const shapeList: AvatarShape[] = ["circle", "round"];
      if (shapeList.includes(this.shape)) {
        return this.shape;
      }
      return "circle";
    },
    /**
     * @description: 仅文本
     * @author: Quarter
     * @return {boolean}
     */
    onlyText(): boolean {
      if (this.loadError) {
        if (!this.icon) return true;
        return false;
      } else {
        if (this.image || this.icon) return false;
        return true;
      }
    },
    /**
     * @description: 文本显示区域比例
     * @author: Quarter
     * @return {number}
     */
    textScale(): number {
      if (typeof this.alt === "string" && 1 === this.alt.length) {
        return 0.618;
      } else {
        return 0.8;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList = [`t-avatar--${this.avatarShape}`];
      if (this.buildInSize) classList.push(`t-avatar--size-${this.buildInSize}`);
      if (this.onlyText) classList.push("t-avatar--text");
      return classList;
    },
    /**
     * @description: 头像样式
     * @author: Quarter
     * @return {object}
     */
    avatarStyle(): { [name: string]: string | undefined } {
      const styles: { [name: string]: string | undefined } = {
        width: this.customSize,
        height: this.customSize,
      };
      if (this.isGroup) styles.marginLeft = `-${this.avatarWidth / 4}px`;
      return styles;
    },
    /**
     * @description: 图标样式
     * @author: Quarter
     * @return {object}
     */
    iconStyle(): { [name: string]: string | undefined } {
      const styles: { [name: string]: string | undefined } = {};
      if (undefined !== this.textFontSize) styles.fontSize = `${this.textFontSize * 1.2}px`;
      if (undefined !== this.scale) styles.transform = `scale(${this.scale})`;
      return styles;
    },
    /**
     * @description: 文本样式
     * @author: Quarter
     * @return {object}
     */
    textStyle(): { [name: string]: string | undefined } {
      const styles: { [name: string]: string | undefined } = {};
      if (undefined !== this.textFontSize) styles.fontSize = `${this.textFontSize}px`;
      if (undefined !== this.scale) styles.transform = `scale(${this.scale})`;
      return styles;
    },
  },
  created(): void {
    this.resizeObserver = new ResizeObserver(() => this.calcScale);
  },
  mounted(): void {
    this.calcScale();
    if (this.$refs.avatar instanceof Element) this.resizeObserver?.observe(this.$refs.avatar);
  },
  beforeDestroy(): void {
    if (this.$refs.avatar instanceof Element) this.resizeObserver?.unobserve(this.$refs.avatar);
  },
  methods: {
    /**
     * @description: 处理图片加载失败
     * @author: Quarter
     * @return
     */
    handleImageLoadError(): void {
      this.loadError = true;
      this.$emit("error");
    },
    /**
     * @description: 计算缩放比例
     * @author: Quarter
     * @return
     */
    calcScale(): void {
      this.$nextTick(() => {
        if (this.$refs.avatar instanceof HTMLElement) {
          const avatarRect = this.$refs.avatar.getBoundingClientRect();
          this.avatarWidth = avatarRect.width;
          if (undefined === this.buildInSize) {
            this.textFontSize = avatarRect.width / 2;
          } else {
            this.textFontSize = undefined;
          }
        }
        if (this.onlyText && typeof this.alt === "string" && this.alt.length > 1) {
          if (this.$refs.avatar instanceof HTMLElement && this.$refs.text instanceof HTMLElement) {
            const avatarRect = this.$refs.avatar.getBoundingClientRect();
            const textRect = this.$refs.text.getBoundingClientRect();
            this.scale = avatarRect.width * this.textScale / textRect.width;
          } else {
            this.scale = 1;
          }
        } else {
          this.scale = 1;
        }
      });
    }
  },
  watch: {
    /**
     * @description: 监听图片地址的变化
     * @author: Quarter
     * @return
     */
    image() {
      this.loadError = false;
      this.calcScale();
    },
    /**
     * @description: 监听入参的变化
     * @author: Quarter
     * @return
     */
    $props() {
      this.calcScale();
    },
    /**
     * @description: 监听父组件变化
     * @author: Quarter
     * @return
     */
    $parent: {
      immediate: true,
      handler(parent: Vue) {
        if (parent.$options.name === "TAvatarGroup") {
          if (Array.isArray(parent.$children) && parent.$children[0] !== this) {
            this.isGroup = true;
          }
        }
      },
    },
  },
});
</script>