<!--
 * @Author: Quarter
 * @Date: 2022-01-11 02:17:01
 * @LastEditTime: 2022-02-05 02:06:16
 * @LastEditors: Quarter
 * @Description: 警告提醒
 * @FilePath: /t-ui-kit/packages/Alert/src/Alert.vue
-->
<template>
  <div class="t-alert" :class="classNameList">
    <div v-if="icon" class="t-alert__icon">
      <icon :name="icon"></icon>
    </div>
    <div class="t-alert__content">
      <div v-if="title" class="t-alert__title">
        <div class="t-alert__title-content" v-text="title"></div>
        <div v-if="withOperation" class="t-alert__operation">
          <slot name="operation"></slot>
        </div>
      </div>
      <div class="t-alert__message">
        <div class="t-alert__description">
          <div
            v-for="(node, index) of visibleMessages"
            :key="`slot-item-${String(node.key || index)}`"
          >
            <render-node :node="node"></render-node>
          </div>
        </div>
        <div v-if="withCollapse" class="t-alert__operation-list">
          <div
            class="t-alert__collapse"
            @click="collapse = !collapse"
          >{{ collapse ? "收起" : "展开更多" }}</div>
          <div v-if="!title && withOperation" class="t-alert__operation">
            <slot name="operation"></slot>
          </div>
        </div>
        <template v-else>
          <div v-if="!title && withOperation" class="t-alert__operation">
            <slot name="operation"></slot>
          </div>
        </template>
      </div>
    </div>
    <div v-if="closable" class="t-alert__close" @click="handleClose">
      <template v-if="closeBtn">{{ closeBtn }}</template>
      <div v-else class="t-alert__close-btn">
        <icon name="close"></icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions, VNode } from "vue";
import { Icon } from "packages/Icon";
import { RenderNode } from "packages/Global";
import { AlertTheme } from "./type";

import "packages/Style";
import "./style/alert.scss";

export default Vue.extend({
  name: "TAlert",
  components: {
    Icon,
    RenderNode,
  },
  props: {
    icon: String, // 图标
    title: String, // 标题
    theme: {
      // 主题
      type: String,
      default: "info",
    } as PropOptions<AlertTheme>,
    closable: {
      // 可关闭
      type: Boolean,
      default: false,
    },
    closeBtn: String, // 关闭按钮文字
    maxLine: Number, // 最大行数
  },
  data() {
    return {
      collapse: false, // 展开状态
    };
  },
  computed: {
    /**
     * @description: 主题
     * @author: Quarter
     * @return {AlertTheme}
     */
    alertTheme(): AlertTheme {
      const themeLsit: AlertTheme[] = ["info", "success", "warning", "danger"];
      if (themeLsit.includes(this.theme)) {
        return this.theme;
      }
      return "info";
    },
    /**
     * @description: 默认插槽
     * @author: Quarter
     * @return {VNode[]}
     */
    defaultSlots(): VNode[] {
      if (this.$slots.default) {
        return this.$slots.default;
      }
      return new Array();
    },
    /**
     * @description: 是否有相关操作
     * @author: Quarter
     * @return {boolean}
     */
    withOperation(): boolean {
      return !!this.$slots.operation;
    },
    /**
     * @description: 是否有展开
     * @author: Quarter
     * @return {boolean}
     */
    withCollapse(): boolean {
      if (
        Number.isInteger(this.maxLine) &&
        (this.maxLine as number) > 0 &&
        (this.maxLine as number) < this.defaultSlots.length
      ) {
        return true;
      }
      return false;
    },
    /**
     * @description: 最大长度
     * @author: Quarter
     * @return {VNode[]}
     */
    alertMaxLine(): number | undefined {
      if (typeof this.maxLine === "number" && Number.isInteger(this.maxLine) && this.maxLine > 0) {
        return this.maxLine;
      }
    },
    /**
     * @description: 可见的消息
     * @author: Quarter
     * @return {VNode[]}
     */
    visibleMessages(): VNode[] {
      if (this.withCollapse && typeof this.alertMaxLine === "number") {
        if (this.collapse) {
          return this.defaultSlots;
        } else {
          return this.defaultSlots.slice(0, this.alertMaxLine);
        }
      } else {
        return this.defaultSlots;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-alert--${this.alertTheme}`];
      if (this.title) {
        classList.push("t-alert--with-title");
      }
      if (this.defaultSlots.length <= 1) {
        classList.push("t-alert--single-line");
      }
      return classList;
    },
  },
  methods: {
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