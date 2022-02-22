<!--
 * @Author: Quarter
 * @Date: 2022-01-06 12:22:22
 * @LastEditTime: 2022-02-21 09:07:20
 * @LastEditors: Quarter
 * @Description: 全局提示列表
 * @FilePath: /t-ui-kit/packages/Message/src/MessageList.vue
-->
<script setup lang="ts">
import "packages/Style";
import "./style/messageList.scss";

import { computed, PropType, ref } from "vue";
import { Message } from "packages/Message";

import type { MessageConfig, MessagePlacement } from "./type";

const props = defineProps({
  placement: {
    // 放置位置
    type: String as PropType<MessagePlacement>,
    default: "top-center",
  },
});

// 消息集合
const messageSet = ref(
  new Map<number, { index: number; config: MessageConfig }>()
);

/**
 * @description: 消息放置位置
 * @author: Quarter
 * @return {MessagePlacement}
 */
const placement = computed<MessagePlacement>(() => {
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
  if (placementList.includes(props.placement)) {
    return props.placement;
  }
  return "top";
});

/**
 * @description: 过渡动画名称
 * @author: Quarter
 * @return {string}
 */
const transitionName = computed<string>(() => {
  if (placement.value.includes("top")) {
    return "slide-bottom-top";
  } else if (placement.value.includes("bottom")) {
    return "slide-top-bottom";
  } else if (placement.value.includes("left")) {
    return "slide-right-left";
  } else if (placement.value.includes("right")) {
    return "slide-left-right";
  } else {
    return "slide-bottom-top";
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-message__list--${placement.value}`];
  return classList;
});

/**
 * @description: 消息列表
 * @author: Quarter
 * @return {Object[]}
 */
const messages = computed<{ index: number; config: MessageConfig }[]>(() => [
  ...messageSet.value.values(),
]);

/**
 * @description: 插入指定消息
 * @author: Quarter
 * @param {number} index 索引
 * @param {MessageConfig} cfg 消息配置
 * @return
 */
const push = (index: number, cfg: MessageConfig) => {
  messageSet.value.set(index, {
    index,
    config: cfg,
  });
};

/**
 * @description: 移除指定消息
 * @author: Quarter
 * @param {number} index
 * @return
 */
const remove = (index: number) => {
  if (messageSet.value.has(index)) {
    const {
      config: { onClose },
    } = messageSet.value.get(index) || { config: {} };
    if (typeof onClose === "function") {
      onClose();
    }
    messageSet.value.delete(index);
  }
};

/**
 * @description: 清除所有消息
 * @author: Quarter
 * @return
 */
const clear = () => {
  messageSet.value.forEach(({ index }) => {
    remove(index);
  });
};

/**
 * @description: 属性暴露
 * @author: Quarter
 * @return
 */
defineExpose({
  push,
  remove,
  clear,
});
</script>

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
        >{{ message.config.text }}</message
      >
    </transition-group>
  </transition>
</template>