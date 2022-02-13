<!--
 * @Author: Quarter
 * @Date: 2022-01-11 02:17:01
 * @LastEditTime: 2022-02-13 02:20:11
 * @LastEditors: Quarter
 * @Description: 警告提醒
 * @FilePath: /t-ui-kit/packages/Alert/src/Alert.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/alert.scss";

import { computed, PropType, useSlots, VNode } from "@vue/runtime-core";
import { AlertTheme } from "./type";
import { Icon } from "packages/Icon";
import { ref } from "vue";

const props = defineProps({
  icon: String as PropType<string>, // 图标
  title: String as PropType<string>, // 标题
  theme: {
    // 主题
    type: String as PropType<AlertTheme>,
    default: "info",
  },
  closable: {
    // 可关闭
    type: Boolean as PropType<boolean>,
    default: false,
  },
  closeBtn: String as PropType<string>, // 关闭按钮文字
  maxLine: Number as PropType<number>, // 最大行数
});
const emits = defineEmits(["close"]);

// 展开状态
const collapse = ref<boolean>(false);

/**
 * @description: 主题
 * @author: Quarter
 * @return {AlertTheme}
 */
const theme = computed<AlertTheme>(() => {
  const themeLsit: AlertTheme[] = ["info", "success", "warning", "danger"];
  if (themeLsit.includes(props.theme)) {
    return props.theme;
  }
  return "info";
});

/**
 * @description: 默认插槽
 * @author: Quarter
 * @return {VNode[]}
 */
const defaultSlots = computed<VNode[]>(() => {
  const slots = useSlots();
  if (slots.default) {
    return slots.default();
  }
  return new Array();
});

/**
 * @description: 是否有相关操作
 * @author: Quarter
 * @return {boolean}
 */
const withOperation = computed<boolean>(() => {
  return !!useSlots().operation;
});

/**
 * @description: 是否有展开
 * @author: Quarter
 * @return {boolean}
 */
const withCollapse = computed<boolean>(() => {
  if (
    Number.isInteger(props.maxLine) &&
    (props.maxLine as number) > 0 &&
    (props.maxLine as number) < defaultSlots.value.length
  ) {
    return true;
  }
  return false;
});

/**
 * @description: 可见的消息
 * @author: Quarter
 * @return {VNode[]}
 */
const visibleMessages = computed<VNode[]>(() => {
  if (withCollapse.value) {
    if (collapse.value) {
      return defaultSlots.value;
    } else {
      return defaultSlots.value.slice(0, props.maxLine);
    }
  } else {
    return defaultSlots.value;
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-alert--${theme.value}`];
  if (props.title) {
    classList.push("t-alert--with-title");
  }
  if (defaultSlots.value.length <= 1) {
    classList.push("t-alert--single-line");
  }
  return classList;
});

/**
 * @description: 处理关闭
 * @author: Quarter
 * @return
 */
const handleClose = (): void => {
  emits("close");
};
</script>

<template>
  <div class="t-alert" :class="classNameList">
    <div v-if="props.icon" class="t-alert__icon">
      <icon :name="props.icon"></icon>
    </div>
    <div class="t-alert__content">
      <div v-if="props.title" class="t-alert__title">
        <div class="t-alert__title-content" v-text="title"></div>
        <div v-if="withOperation" class="t-alert__operation">
          <slot name="operation"></slot>
        </div>
      </div>
      <div class="t-alert__message">
        <div class="t-alert__description">
          <div
            v-for="node of visibleMessages"
            :key="`slot-item-${node.scopeId}`"
          >
            <Component :is="node"></Component>
          </div>
        </div>
        <div v-if="withCollapse" class="t-alert__operation-list">
          <div class="t-alert__collapse" @click="collapse = !collapse">
            {{ collapse ? "收起" : "展开更多" }}
          </div>
          <div v-if="!props.title && withOperation" class="t-alert__operation">
            <slot name="operation"></slot>
          </div>
        </div>
        <template v-else>
          <div v-if="!props.title && withOperation" class="t-alert__operation">
            <slot name="operation"></slot>
          </div>
        </template>
      </div>
    </div>
    <div v-if="props.closable" class="t-alert__close" @click="handleClose">
      <template v-if="props.closeBtn">{{ props.closeBtn }}</template>
      <div v-else class="t-alert__close-btn">
        <icon name="close"></icon>
      </div>
    </div>
  </div>
</template>