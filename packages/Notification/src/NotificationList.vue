<!--
 * @Author: Quarter
 * @Date: 2022-01-06 12:22:22
 * @LastEditTime: 2022-02-13 02:36:22
 * @LastEditors: Quarter
 * @Description: 通知通知列表
 * @FilePath: /t-ui-kit/packages/Notification/src/NotificationList.vue
-->
<script setup lang="ts">
import "packages/Style";
import "./style/notificationList.scss";

import { computed, PropType } from "@vue/runtime-core";
import { NotifyConfig, NotificationPlacement } from "./type";
import { Notification } from "packages/Notification";
import { ref } from "vue";

const props = defineProps({
  placement: {
    // 放置位置
    type: String as PropType<NotificationPlacement>,
    default: "top-right",
  },
});
// 通知集合
const notificationSet = ref(
  new Map<number, { index: number; config: NotifyConfig }>()
);

/**
 * @description: 通知放置位置
 * @author: Quarter
 * @return {NotificationPlacement}
 */
const placement = computed<NotificationPlacement>(() => {
  const placementList: NotificationPlacement[] = [
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ];
  if (placementList.includes(props.placement)) {
    return props.placement;
  }
  return "top-right";
});

/**
 * @description: 过渡动画名称
 * @author: Quarter
 * @return {string}
 */
const transitionName = computed<string>(() => {
  if (placement.value.includes("left")) {
    return "slide-left-half";
  } else {
    return "slide-right-half";
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-notification__list--${placement.value}`];
  return classList;
});

/**
 * @description: 通知列表
 * @author: Quarter
 * @return {Object[]}
 */
const notifications = computed<{ index: number; config: NotifyConfig }[]>(
  () => [...notificationSet.value.values()]
);

/**
 * @description: 插入指定通知
 * @author: Quarter
 * @param {number} index 索引
 * @param {NotifyConfig} 通知配置
 * @return
 */
const push = (index: number, cfg: NotifyConfig) => {
  notificationSet.value.set(index, {
    index,
    config: cfg,
  });
};

/**
 * @description: 移除指定通知
 * @author: Quarter
 * @param {number} index
 * @return
 */
const remove = (index: number) => {
  if (notificationSet.value.has(index)) {
    const {
      config: { onClose },
    } = notificationSet.value.get(index) || { config: {} };
    if (typeof onClose === "function") {
      onClose();
    }
    notificationSet.value.delete(index);
  }
};

/**
 * @description: 清除所有通知
 * @author: Quarter
 * @return
 */
const clear = () => {
  notificationSet.value.forEach(({ index }) => {
    remove(index);
  });
};

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
      v-if="notifications.length > 0"
      class="t-notification__list"
      :class="classNameList"
    >
      <notification
        v-for="notification of notifications"
        :key="`notification-item-${notification.index}`"
        :theme="notification.config.theme"
        :icon="notification.config.icon"
        :title="notification.config.title"
        :content="notification.config.content"
        :duration="notification.config.duration"
        :close-btn="notification.config.closeBtn"
        @close="remove(notification.index)"
        @duration-end="remove(notification.index)"
      ></notification>
    </transition-group>
  </transition>
</template>