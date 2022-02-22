<!--
 * @Author: Quarter
 * @Date: 2022-01-11 02:23:32
 * @LastEditTime: 2022-02-21 09:07:06
 * @LastEditors: Quarter
 * @Description: 消息通知
 * @FilePath: /t-ui-kit/packages/Notification/src/Notification.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/notification.scss";

import {
  computed,
  onBeforeUnmount,
  onMounted,
  PropType,
  useSlots,
  Slot,
  watch,
} from "vue";
import { Icon } from "packages/Icon";

import type { NotificationTheme } from "./type";

const props = defineProps({
  theme: {
    // 主题
    type: String as PropType<NotificationTheme>,
    default: "info",
  },
  icon: String as PropType<string>, // 图标
  closeBtn: Boolean as PropType<boolean>, // 关闭按钮
  title: String as PropType<string>, // 消息标题
  content: String as PropType<string>, // 内容
  duration: Number as PropType<number>, // 延迟时间
});
const emits = defineEmits(["duration-end", "close"]);

// 是否已经挂载
let isMounted: boolean = false;
// 计时器
let timeout: ReturnType<typeof setTimeout> | undefined;

/**
 * @description: 主题
 * @author: Quarter
 * @return {NotificationTheme}
 */
const theme = computed<NotificationTheme>(() => {
  const themeList: NotificationTheme[] = [
    "info",
    "success",
    "warning",
    "danger",
  ];
  if (themeList.includes(props.theme)) {
    return props.theme;
  }
  return "info";
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
 * @description: 内容
 * @author: Quarter
 * @return {Slot}
 */
const content = computed<Slot | undefined>(() => {
  const slots = useSlots();
  if (slots.default) {
    return slots.default;
  }
});

/**
 * @description: 底部内容
 * @author: Quarter
 * @return {Slot}
 */
const footer = computed<Slot | undefined>(() => {
  const slots = useSlots();
  if (slots.footer) {
    return slots.footer;
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-notification--${theme.value}`];
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
  <div class="t-notification" :class="classNameList">
    <div v-if="props.icon" class="t-notification__icon">
      <icon :name="props.icon"></icon>
    </div>
    <div class="t-notification__main">
      <div class="t-notification__header">
        <div class="t-notification__title">{{ props.title }}</div>
        <div v-if="props.closeBtn" class="t-notification__close-btn" @click="handleClose">
          <Icon name="close"></Icon>
        </div>
      </div>
      <div class="t-notification__content">
        <Component v-if="content" :is="content"></Component>
        <template v-else>{{ props.content }}</template>
      </div>
      <div v-if="footer" class="t-notification__footer">
        <Component :is="footer"></Component>
      </div>
    </div>
  </div>
</template>