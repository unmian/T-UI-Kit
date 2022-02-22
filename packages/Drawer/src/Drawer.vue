<!--
 * @Author: Quarter
 * @Date: 2022-01-11 06:23:23
 * @LastEditTime: 2022-02-21 09:08:11
 * @LastEditors: Quarter
 * @Description: 抽屉
 * @FilePath: /t-ui-kit/packages/Drawer/src/Drawer.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/drawer.scss";

import { computed, CSSProperties, PropType, ref, useSlots, watch } from "vue";
import { Icon } from "packages/Icon";
import { Button as TButton } from "packages/Button";

import type { DrawerPlacement } from "./type";

const props = defineProps({
  visible: { // 是否可见
    type: Boolean,
    default: false,
  },
  placement: { // 位置
    type: String as PropType<DrawerPlacement>,
    default: "right",
  },
  title: String, // 标题名称
  footer: { // 是否显示底部
    type: Boolean,
    default: false,
  },
  cancelBtn: { // 关闭按钮文本
    type: String,
    default: "取消",
  },
  confirmBtn: { // 确定按钮文本
    type: String,
    default: "确定",
  },
  size: String, // 尺寸
  sizeDraggable: { // 是否可以拖拽调整尺寸
    type: Boolean,
    default: false,
  },
  withoutOverlay: { // 禁用蒙层
    type: Boolean,
    default: false,
  },
  disableOverlayClose: {
    type: Boolean, // 蒙层关闭
    default: false,
  },
  attach: [String, Element], // 挂载节点
  insideElement: { // 仅在中显示
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:visible", "close", "cancel", "confirm"]);

// 抽屉元素
const drawer = ref<HTMLDivElement>();
// 拖拽开始的位置
const dragStartPos = ref<number>(0);
// 拖拽开始尺寸
const dragStartSize = ref<number>(0);
// 拖拽尺寸
const dragSize = ref<number | undefined>();

/**
 * @description: 是否可见
 * @author: Quarter
 * @return
 */
const visible = computed<boolean>({
  get: (): boolean => {
    return !!props.visible;
  },
  set: (val: boolean): void => {
    emits("update:visible", val);
  }
});

/**
 * @description: 定位
 * @author: Quarter
 * @return {DrawerPlacement}
 */
const placement = computed<DrawerPlacement>(() => {
  const placementList: DrawerPlacement[] = ["left", "right", "top", "bottom"];
  if (placementList.includes(props.placement)) {
    return props.placement;
  }
  return "right";
});

/**
 * @description: 自定义尺寸
 * @author: Quarter
 * @return {string}
 */
const size = computed<string | undefined>(() => {
  if (typeof props.size === "string") {
    const sizeRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
    const str = props.size.replace(/[\s\n\t]+/g, "");
    if (sizeRg.test(str)) return str;
  }
});

/**
 * @description: 挂载节点
 * @author: Quarter
 * @return {Element|string}
 */
const attach = computed<Element | string | undefined>(() => {
  if (props.attach instanceof Element) {
    return props.attach;
  } else if (typeof props.attach === "string") {
    return props.attach;
  }
});

/**
 * @description: 是否存在挂载节点
 * @author: Quarter
 * @return {boolean}
 */
const hasAttach = computed<boolean>(() => {
  return attach.value instanceof Element || typeof attach.value === "string";
});

/**
 * @description: 过渡动画名称
 * @author: Quarter
 * @return {String}
 */
const transitionName = computed<string>(() => {
  return `slide-${placement.value}-all`;
});

/**
 * @description: 样式列表
 * @author: Quarter
 * @return {CSSProperties}
 */
const styleList = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if ("left" === placement.value || "right" === placement.value) {
    if (typeof dragSize.value === "number") {
      styles.width = dragSize.value + "px";
    } else if (size.value) {
      styles.width = size.value;
    }
  } else if ("top" === placement.value || "bottom" === placement.value) {
    if (typeof dragSize.value === "number") {
      styles.height = dragSize.value + "px";
    } else if (size.value) {
      styles.height = size.value;
    }
  }
  return styles;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [`t-drawer--${placement.value}`];
  if (visible.value) {
    classList.push("t-drawer--open");
  }
  if (props.insideElement) {
    classList.push("t-drawer--inside-element");
  }
  return classList;
});

/**
 * @description: 是否存在头部插槽
 * @author: Quarter
 * @return {boolean}
 */
const hasHeaderSlot = computed<boolean>(() => {
  const slots = useSlots();
  if (Array.isArray(slots.header)) {
    return slots.header.length > 0;
  } else {
    return !!slots.header;
  }
});

/**
 * @description: 是否存在底部插槽
 * @author: Quarter
 * @return {boolean}
 */
const hasFooterSlot = computed<boolean>(() => {
  const slots = useSlots();
  if (Array.isArray(slots.footer)) {
    return slots.footer.length > 0;
  } else {
    return !!slots.footer;
  }
});

/**
 * @description: 处理蒙层点击
 * @author: Quarter
 * @return
 */
const handleMaskClick = (): void => {
  if (props.disableOverlayClose) {
    return;
  }
  visible.value = false;
};

/**
 * @description: 处理关闭
 * @author: Quarter
 * @return
 */
const handleClose = (): void => {
  visible.value = false;
};

/**
 * @description: 处理取消操作
 * @author: Quarter
 * @return
 */
const handleCancel = (): void => {
  emits("cancel");
};

/**
 * @description: 处理确认
 * @author: Quarter
 * @return
 */
const handleConfirm = (): void => {
  emits("confirm");
};

/**
 * @description: 处理拖拽器鼠标点下事件
 * @author: Quarter
 * @return
 */
const handleMouseDown = (e: MouseEvent): void => {
  if (drawer.value instanceof HTMLDivElement) {
    const drawerRect = drawer.value.getBoundingClientRect();
    dragStartSize.value = drawerRect.width;
  }
  if ("left" === placement.value || "right" === placement.value) {
    dragStartPos.value = e.x;
  } else if ("top" === placement.value || "bottom" === placement.value) {
    dragStartPos.value = e.y;
  }
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
};

/**
 * @description: 处理拖拽鼠标点击移动事件
 * @author: Quarter
 * @return
 */
const handleMouseMove = (e: MouseEvent): void => {
  if ("left" === placement.value) {
    dragSize.value = e.x - dragStartPos.value + dragStartSize.value;
  } else if ("right" === placement.value) {
    dragSize.value = dragStartPos.value - e.x + dragStartSize.value;
  } else if ("top" === placement.value) {
    dragSize.value = e.y - dragStartPos.value + dragStartSize.value;
  } else if ("bottom" === placement.value) {
    dragSize.value = dragStartPos.value - e.y + dragStartSize.value;
  }
};

/**
 * @description: 处理拖拽鼠标点击抬起事件
 * @author: Quarter
 * @return
 */
const handleMouseUp = (e: MouseEvent): void => {
  if ("left" === placement.value) {
    dragSize.value = e.x - dragStartPos.value + dragStartSize.value;
  } else if ("right" === placement.value) {
    dragSize.value = dragStartPos.value - e.x + dragStartSize.value;
  } else if ("top" === placement.value) {
    dragSize.value = e.y - dragStartPos.value + dragStartSize.value;
  } else if ("bottom" === placement.value) {
    dragSize.value = dragStartPos.value - e.y + dragStartSize.value;
  }
  dragStartPos.value = 0;
  dragStartSize.value = 0;
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
};

/**
 * @description: 监听可见性变化
 * @author: Quarter
 * @param {boolean} val 值
 * @return
 */
watch(visible, (val: boolean, oldVal?: boolean) => {
  if (undefined !== oldVal && false === val) {
    emits("close");
  }
  if (false === val) {
    dragSize.value = undefined;
  }
}, {
  immediate: true,
});
</script>

<template>
  <teleport v-if="hasAttach" :to="attach">
    <div class="t-drawer" :class="classNameList">
      <transition name="fade">
        <div
          v-if="visible && !props.withoutOverlay"
          class="t-drawer__mask"
          @click="handleMaskClick"
        ></div>
      </transition>
      <transition :name="transitionName">
        <div v-if="visible" ref="drawer" class="t-drawer__content" :style="styleList">
          <!-- 头部 -->
          <div class="t-drawer__header">
            <div class="t-drawer__title">
              <slot v-if="hasHeaderSlot" name="header"></slot>
              <template v-else>{{ props.title }}</template>
            </div>
            <div class="t-drawer__close-btn" @click="handleClose">
              <icon name="close"></icon>
            </div>
          </div>
          <!-- 主体内容 -->
          <div class="t-drawer__body">
            <slot></slot>
          </div>
          <!-- 底部 -->
          <div v-if="props.footer" class="t-drawer__footer">
            <slot v-if="hasFooterSlot" name="footer"></slot>
            <template v-else>
              <template v-if="placement === 'right'">
                <t-button theme="primary" @click="handleConfirm">{{ props.confirmBtn }}</t-button>
                <t-button @click="handleCancel">{{ props.cancelBtn }}</t-button>
              </template>
              <template v-else>
                <t-button @click="handleCancel">{{ props.cancelBtn }}</t-button>
                <t-button theme="primary" @click="handleConfirm">{{ props.confirmBtn }}</t-button>
              </template>
            </template>
          </div>
          <!-- 拖拽器 -->
          <span v-if="props.sizeDraggable" class="t-drawer__dragger" @mousedown="handleMouseDown"></span>
        </div>
      </transition>
    </div>
  </teleport>
  <div v-else class="t-drawer" :class="classNameList">
    <transition name="fade">
      <div v-if="visible && !props.withoutOverlay" class="t-drawer__mask" @click="handleMaskClick"></div>
    </transition>
    <transition :name="transitionName">
      <div v-if="visible" ref="drawer" class="t-drawer__content" :style="styleList">
        <!-- 头部 -->
        <div class="t-drawer__header">
          <div class="t-drawer__title">
            <slot v-if="hasHeaderSlot" name="header"></slot>
            <template v-else>{{ props.title }}</template>
          </div>
          <div class="t-drawer__close-btn" @click="handleClose">
            <icon name="close"></icon>
          </div>
        </div>
        <!-- 主体内容 -->
        <div class="t-drawer__body">
          <slot></slot>
        </div>
        <!-- 底部 -->
        <div v-if="props.footer" class="t-drawer__footer">
          <slot v-if="hasFooterSlot" name="footer"></slot>
          <template v-else>
            <template v-if="placement === 'right'">
              <t-button theme="primary" @click="handleConfirm">{{ props.confirmBtn }}</t-button>
              <t-button @click="handleCancel">{{ props.cancelBtn }}</t-button>
            </template>
            <template v-else>
              <t-button @click="handleCancel">{{ props.cancelBtn }}</t-button>
              <t-button theme="primary" @click="handleConfirm">{{ props.confirmBtn }}</t-button>
            </template>
          </template>
        </div>
        <!-- 拖拽器 -->
        <span v-if="props.sizeDraggable" class="t-drawer__dragger" @mousedown="handleMouseDown"></span>
      </div>
    </transition>
  </div>
</template>