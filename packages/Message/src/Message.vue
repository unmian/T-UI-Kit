<!--
 * @Author: Quarter
 * @Date: 2022-01-05 01:51:50
 * @LastEditTime: 2022-02-13 02:36:08
 * @LastEditors: Quarter
 * @Description: 全局提示组件
 * @FilePath: /t-ui-kit/packages/Message/src/Message.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/message.scss";

import { computed, PropType } from "@vue/runtime-core";
import { MessageTheme } from "./type";
import { Icon } from "packages/Icon";
import { onBeforeUnmount, onMounted, ref, watch } from "vue";

const props = defineProps({
  theme: {
    // 提示主题
    type: String as PropType<MessageTheme>,
    default: "info",
  },
  closeBtn: {
    // 是否显示关闭按钮
    type: Boolean,
    default: false,
  },
  duration: Number as PropType<number>, // 延迟时间
});
const emits = defineEmits(["close", "duration-end"]);

// 是否已经挂载
let isMounted: boolean = false;
// 计时器
let timeout: ReturnType<typeof setTimeout> | undefined;

/**
 * @description: 主题类名
 * @author: Quarter
 * @return {MessageTheme}
 */
const theme = computed<MessageTheme>(() => {
  const themeList: MessageTheme[] = [
    "info",
    "success",
    "warning",
    "danger",
    "question",
    "loading",
  ];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "info";
});

/**
 * @description: 图标名称
 * @author: Quarter
 * @return {string}
 */
const iconName = computed<string | undefined>(() => {
  const iconMap = {
    info: "info-circle-filled",
    success: "check-circle-filled",
    warning: "error-circle-filled",
    danger: "error-circle-filled",
    question: "help-circle-filled",
    loading: "help-circle-filled",
  };
  return iconMap[theme.value];
});

/**
 * @description: 延迟时间
 * @author: Quarter
 * @return {number}
 */
const duration = computed<number>(() => {
  if (
    typeof props.duration === "number" &&
    Number.isInteger(props.duration) &&
    props.duration >= 0
  ) {
    return props.duration;
  }
  return 3000;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-message--${theme.value}`];
  if (props.closeBtn) {
    classList.push("t-message--closable");
  }
  return classList;
});

/**
 * @description: 生命周期函数
 * @author: Quarter
 * @return
 */
onMounted(() => {
  isMounted = true;
  consumeTime();
});

/**
 * @description: 生命周期函数
 * @author: Quarter
 * @return
 */
onBeforeUnmount(() => {
  if (typeof timeout === "number") {
    clearTimeout(timeout);
    timeout = undefined;
  }
  isMounted = false;
});

/**
 * @description: 监听延迟时间变化
 * @author: Quarter
 * @return
 */
watch(duration, () => {
  if (isMounted === true) {
    consumeTime();
  }
});

/**
 * @description: 消耗时间
 * @author: Quarter
 * @return
 */
const consumeTime = () => {
  if (typeof timeout === "number") {
    clearTimeout(timeout);
    timeout = undefined;
  }
  if (duration.value > 0) {
    timeout = setTimeout(() => {
      timeout = undefined;
      emits("duration-end");
    }, duration.value);
  }
};

/**
 * @description: 处理关闭
 * @author: Quarter
 * @return
 */
const handleClose = () => {
  emits("close");
};
</script>

<template>
  <transition name="fade">
    <div class="t-message" :class="classNameList">
      <span v-if="theme === 'loading'" class="t-message__loading"></span>
      <span v-else class="t-message__icon">
        <icon :name="iconName"></icon>
      </span>
      <slot></slot>
      <span v-if="props.closeBtn" class="t-message__close" @click="handleClose">
        <icon name="close"></icon>
      </span>
    </div>
  </transition>
</template>