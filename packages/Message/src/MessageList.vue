<!--
 * @Author: Quarter
 * @Date: 2022-01-06 12:22:22
 * @LastEditTime: 2022-02-22 11:57:33
 * @LastEditors: Quarter
 * @Description: 全局提示列表
 * @FilePath: /t-ui-kit/packages/Message/src/MessageList.vue
-->
<template>
  <transition name="fade">
    <transition-group
      :name="transitionName"
      tag="div"
      v-if="messages.length > 0"
      class="t-message__list"
      :class="classNameList"
    >
      <message
        v-for="message of messages"
        :key="`message-item-${message.index}`"
        :theme="message.config.theme"
        :close-btn="message.config.closeBtn"
        :duration="message.config.duration"
        @close="remove(message.index)"
        @duration-end="remove(message.index)"
      >{{ message.config.text }}</message>
    </transition-group>
  </transition>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Message } from "packages/Message";

import type { MessageConfig, MessagePlacement } from "./type";

import "packages/Style";
import "./style/messageList.scss";

interface MessageListData {
  messageSet: { [key: number]: { index: number, config: MessageConfig } };
};

export default Vue.extend({
  name: "TMessageList",
  components: {
    Message,
  },
  props: {
    placement: {
      // 放置位置
      type: String,
      default: "top",
    } as PropOptions<MessagePlacement>,
  },
  data() {
    return {
      messageSet: new Object(), // 消息集合
    } as MessageListData;
  },
  computed: {
    /**
     * @description: 消息列表放置位置
     * @author: Quarter
     * @return {MessagePlacement}
     */
    messageListPlacement(): MessagePlacement {
      const placementList: MessagePlacement[] = [
        "top-left",
        "top",
        "top-right",
        "left",
        "center",
        "right",
        "bottom-left",
        "bottom",
        "bottom-right",
      ];
      if (placementList.includes(this.placement)) {
        return this.placement;
      }
      return "top";
    },
    /**
     * @description: 过渡动画名称
     * @author: Quarter
     * @return {string}
     */
    transitionName(): string {
      if (this.messageListPlacement.includes("top")) {
        return "slide-bottom-top";
      } else if (this.messageListPlacement.includes("bottom")) {
        return "slide-top-bottom";
      } else if (this.messageListPlacement.includes("left")) {
        return "slide-right-left";
      } else if (this.messageListPlacement.includes("right")) {
        return "slide-left-right";
      } else {
        return "slide-bottom-top";
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-message__list--${this.messageListPlacement}`];
      return classList;
    },
    /**
     * @description: 消息列表
     * @author: Quarter
     * @return {Object[]}
     */
    messages(): { index: number; config: MessageConfig }[] {
      return [
        ...Object.values(this.messageSet),
      ];
    }
  },
  methods: {
    /**
     * @description: 插入指定消息
     * @author: Quarter
     * @param {number} index 索引
     * @param {MessageConfig} cfg 消息配置
     * @return
     */
    push(index: number, cfg: MessageConfig): void {
      this.$set(this.messageSet, index, {
        index,
        config: cfg,
      });
    },
    /**
     * @description: 移除指定消息
     * @author: Quarter
     * @param {number} index
     * @return
     */
    remove(index: number): void {
      if (Reflect.has(this.messageSet, index)) {
        const {
          config: { onClose },
        } = Reflect.get(this.messageSet, index) || { config: {} };
        if (typeof onClose === "function") {
          onClose();
        }
        this.$delete(this.messageSet, index);
      }
    },
    /**
     * @description: 清除所有消息
     * @author: Quarter
     * @return
     */
    clear(): void {
      Object.values(this.messageSet).forEach(({ index }) => {
        this.remove(index);
      });
    },
  },
});
</script>