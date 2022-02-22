<!--
 * @Author: Quarter
 * @Date: 2022-01-05 01:51:50
 * @LastEditTime: 2022-02-22 11:57:28
 * @LastEditors: Quarter
 * @Description: 全局提示组件
 * @FilePath: /t-ui-kit/packages/Message/src/Message.vue
-->
<template>
  <transition name="fade">
    <div class="t-message" :class="classNameList">
      <span v-if="theme === 'loading'" class="t-message__loading"></span>
      <span v-else class="t-message__icon">
        <icon :name="iconName"></icon>
      </span>
      <slot></slot>
      <span v-if="closeBtn" class="t-message__close" @click="handleClose">
        <icon name="close"></icon>
      </span>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";

import type { MessageTheme } from "./type";

import "packages/Style";
import "./style/message.scss";

interface MessageData {
  isMounted: boolean;
  timeout?: ReturnType<typeof setTimeout>;
};

export default Vue.extend({
  name: "TMessage",
  components: {
    Icon,
  },
  props: {
    theme: {
      // 提示主题
      type: String,
      default: "info",
    } as PropOptions<MessageTheme>,
    closeBtn: {
      // 是否显示关闭按钮
      type: Boolean,
      default: false,
    },
    duration: Number, // 延迟时间
  },
  data() {
    return {
      isMounted: false, // 是否挂载
      timeout: undefined, // 计时器
    } as MessageData;
  },
  computed: {
    /**
     * @description: 主题类名
     * @author: Quarter
     * @return {String}
     */
    messageTheme(): MessageTheme {
      const themeList: MessageTheme[] = [
        "info",
        "success",
        "warning",
        "danger",
        "question",
        "loading",
      ];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "info";
    },
    /**
     * @description: 图标名称
     * @author: Quarter
     * @return {string}
     */
    iconName(): string | undefined {
      const iconMap = {
        info: "info-circle-filled",
        success: "check-circle-filled",
        warning: "error-circle-filled",
        danger: "error-circle-filled",
        question: "help-circle-filled",
        loading: "help-circle-filled",
      };
      return iconMap[this.messageTheme];
    },
    /**
     * @description: 延迟时间
     * @author: Quarter
     * @return {number}
     */
    messageDuration(): number {
      if (
        typeof this.duration === "number" &&
        Number.isInteger(this.duration) &&
        this.duration >= 0
      ) {
        return this.duration;
      }
      return 3000;
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-message--${this.messageTheme}`];
      if (this.closeBtn) {
        classList.push("t-message--closable");
      }
      return classList;
    },
  },
  watch: {
    /**
     * @description: 监听延迟时间变化
     * @author: Quarter
     * @return
     */
    messageDuration() {
      if (true === this.isMounted) {
        this.consumeTime();
      }
    },
  },
  /**
   * @description: 生命周期函数
   * @author: Quarter
   * @return
   */
  mounted(): void {
    this.isMounted = true;
    this.consumeTime();
  },
  /**
   * @description: 生命周期函数
   * @author: Quarter
   * @return
   */
  beforeDestroy(): void {
    if (typeof this.timeout === "number") {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.isMounted = false;
  },
  methods: {
    /**
     * @description: 消耗时间
     * @author: Quarter
     * @return
     */
    consumeTime(): void {
      if (typeof this.timeout === "number") {
        clearTimeout(this.timeout);
        this.timeout = undefined;
      }
      if (this.messageDuration > 0) {
        this.timeout = setTimeout(() => {
          this.timeout = undefined;
          this.$emit("duration-end");
        }, this.messageDuration);
      }
    },
    /**
     * @description: 处理关闭
     * @author: Quarter
     * @return
     */
    handleClose(): void {
      this.$emit("close");
    },
  },
});
</script>