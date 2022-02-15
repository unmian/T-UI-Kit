<!--
 * @Author: Quarter
 * @Date: 2022-01-11 02:23:32
 * @LastEditTime: 2022-02-14 01:28:44
 * @LastEditors: Quarter
 * @Description: 消息通知
 * @FilePath: /t-ui-kit/packages/Notification/src/Notification.vue
-->
<template>
  <div class="t-notification" :class="classNameList">
    <div v-if="icon" class="t-notification__icon">
      <Icon :name="icon"></Icon>
    </div>
    <div class="t-notification__main">
      <div class="t-notification__header">
        <div class="t-notification__title">{{ title }}</div>
        <div v-if="closeBtn" class="t-notification__close-btn" @click="handleClose">
          <icon name="close"></icon>
        </div>
      </div>
      <div class="t-notification__content">
        <template v-if="Array.isArray(defaultSlots)">
          <render-node
            v-for="(node, index) of defaultSlots"
            :key="`default-slot-node-${String(node.key || index)}`"
            :node="node"
          ></render-node>
        </template>
        <template v-else>{{ content }}</template>
      </div>
      <div v-if="Array.isArray(footerSlots)" class="t-notification__footer">
        <render-node
          v-for="(node, index) of footerSlots"
          :key="`footer-slot-node-${String(node.key || index)}`"
          :node="node"
        ></render-node>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";
import { RenderNode } from "packages/Global"
import { NotificationTheme } from "./type";
import { VNode } from "vue/types/umd";

import "packages/Style";
import "./style/notification.scss";

export default Vue.extend({
  name: "TNotification",
  components: {
    Icon,
    RenderNode,
  },
  props: {
    theme: {
      // 主题
      type: String,
      default: "info",
    } as PropOptions<NotificationTheme>,
    icon: String, // 图标
    closeBtn: Boolean, // 关闭按钮
    title: String, // 消息标题
    content: String, // 内容
    duration: Number, // 延迟时间
  },
  data() {
    return {
      isMounted: false,
      timeout: undefined as ReturnType<typeof setTimeout> | undefined,
    };
  },
  computed: {
    /**
     * @description: 主题
     * @author: Quarter
     * @return {NotificationTheme}
     */
    notificationTheme(): NotificationTheme {
      const themeList: NotificationTheme[] = [
        "info",
        "success",
        "warning",
        "danger",
      ];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "info";
    },
    /**
     * @description: 延迟时间
     * @author: Quarter
     * @return {number}
     */
    notificationDuration(): number {
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
     * @description: 内容
     * @author: Quarter
     * @return {VNode[]}
     */
    defaultSlots(): VNode[] | undefined {
      if (this.$slots.default) {
        return this.$slots.default;
      }
    },
    /**
     * @description: 底部内容
     * @author: Quarter
     * @return {VNode[]}
     */
    footerSlots(): VNode[] | undefined {
      if (this.$slots.footer) {
        return this.$slots.footer;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-notification--${this.notificationTheme}`];
      return classList;
    },
  },
  watch: {
    /**
     * @description: 监听延迟时间变化
     * @author: Quarter
     * @return
     */
    notificationDuration(): void {
      if (this.isMounted === true) {
        this.consumeTime();
      }
    },
  },
  mounted(): void {
    this.isMounted = true;
    this.consumeTime();
  },
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
      if (this.notificationDuration > 0) {
        this.timeout = setTimeout(() => {
          this.timeout = undefined;
          this.$emit("duration-end");
        }, this.notificationDuration);
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