<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:23:23
 * @LastEditTime: 2022-02-24 05:40:46
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/packages/Dialog/src/Dialog.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/dialog.scss";

import { computed, CSSProperties, PropType, ref, useSlots, watch } from "vue";
import { Icon } from "packages/Icon";

import type { DialogButtonConfig, DialogPlacement, DialogPosition, DialogSize, DialogTheme } from "./type";

const props = defineProps({
  visible: { // 是否可见
    type: Boolean,
    default: false,
  },
  title: String, // 标题内容
  theme: { // 弹窗主题
    type: String as PropType<DialogTheme>,
    default: "default"
  },
  placement: { // 弹窗定位
    type: String as PropType<DialogPlacement>,
    default: "top",
  },
  footer: { // 是否需要底部
    type: Boolean,
    default: false,
  },
  cancelBtn: { // 取消按钮
    type: [String, Object] as PropType<string | DialogButtonConfig>,
    default: "取消",
  },
  confirmBtn: [String, Object] as PropType<string | DialogButtonConfig>, // 确认按钮
  width: String, // 宽度
  icon: String, // 图标
  withoutOverlay: { // 移除遮罩层
    type: Boolean,
    default: false,
  },
  overlayClosable: { // 遮罩层可关闭
    type: Boolean,
    default: false,
  },
  draggable: { // 是否可拖拽
    type: Boolean,
    default: false,
  },
  zIndex: Number, // 层级
  attach: [String, Element], // 挂载节点
});
const emits = defineEmits(["update:visible", "close", "confirm", "cancel"]);

// 正在拖拽
const dragging = ref<boolean>(false);
// 弹出框
const dialog = ref<HTMLDivElement>();
// 弹窗尺寸
let dialogSize: DialogSize = { width: 0, height: 0, };
// 弹窗位置
const dialogPosition = ref<DialogPosition | undefined>(undefined);
// 拖拽开始的位置
let dragStartPos: DialogPosition = { x: 0, y: 0 };
// 本次拖拽相差的位置
const dragPos = ref<DialogPosition>({ x: 0, y: 0 });

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
  },
});

/**
 * @description: 主题
 * @author: Quarter
 * @return {DialogTheme}
 */
const theme = computed<DialogTheme>(() => {
  const placementList: DialogTheme[] = ["default", "info", "warning", "danger", "success"];
  if (placementList.includes(props.theme)) {
    return props.theme;
  }
  return "default";
});

/**
 * @description: 主题
 * @author: Quarter
 * @return {DialogTheme}
 */
const iconName = computed<string | undefined>(() => {
  if (typeof props.icon === "string" && props.icon) {
    return props.icon;
  }
  const iconMap: { [key: string]: string } = {
    info: "info-circle-filled",
    warning: "error-circle-filled",
    danger: "error-circle-filled",
    success: "check-circle-filled"
  };
  if (Reflect.has(iconMap, theme.value)) {
    return iconMap[theme.value];
  }
});

/**
 * @description: 定位
 * @author: Quarter
 * @return {DialogPlacement}
 */
const placement = computed<DialogPlacement>(() => {
  const placementList: DialogPlacement[] = ["top", "center"];
  if (placementList.includes(props.placement)) {
    return props.placement;
  }
  return "top";
});

/**
 * @description: 自定义宽度
 * @author: Quarter
 * @return {string}
 */
const width = computed<string | undefined>(() => {
  if (typeof props.width === "string") {
    const widthRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
    const str = props.width.replace(/[\s\n\t]+/g, "");
    if (widthRg.test(str)) return str;
  }
});

/**
 * @description: 取消按钮配置
 * @author: Quarter
 * @return {DialogButtonConfig}
 */
const cancelBtnConfig = computed<DialogButtonConfig>(() => {
  if (typeof props.cancelBtn === "string" && props.cancelBtn) {
    return {
      variant: "base",
      theme: "default",
      content: props.cancelBtn,
      loading: false,
    };
  } else if (props.cancelBtn instanceof Object) {
    const { variant, theme, content, loading } = props.cancelBtn;
    return {
      variant: variant || "base",
      theme: theme || "default",
      content: content || "",
      loading: loading || false,
    };
  }
  return {
    variant: "base",
    theme: "default",
    content: "确认",
    loading: false,
  };
});

/**
 * @description: 确认按钮配置
 * @author: Quarter
 * @return {DialogButtonConfig}
 */
const comfirmBtnConfig = computed<DialogButtonConfig>(() => {
  if (typeof props.confirmBtn === "string" && props.confirmBtn) {
    return {
      variant: "base",
      theme: "primary",
      content: props.confirmBtn,
      loading: false,
    };
  } else if (props.confirmBtn instanceof Object) {
    const { variant, theme, content, loading } = props.confirmBtn;
    return {
      variant: variant || "base",
      theme: theme || "primary",
      content: content || "",
      loading: loading || false,
    };
  }
  return {
    variant: "base",
    theme: "primary",
    content: "确认",
    loading: false,
  };
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
 * @description: 样式列表
 * @author: Quarter
 * @return {CSSProperties}
 */
const styleList = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    width: width.value,
  };
  if (dialogPosition.value) {
    styles.top = dialogPosition.value.y + dragPos.value.y + "px";
    styles.left = dialogPosition.value.x + dragPos.value.x + "px";
  }
  return styles;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-dialog--theme-${theme.value}`,
    `t-dialog--${placement.value}`,
  ];
  if (visible.value) {
    classList.push("t-dialog--open");
  }
  if (props.draggable) {
    classList.push("t-dialog--draggable");
    if (dragging.value) {
      classList.push("t-dialog--is-dragging");
    }
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
  if (props.overlayClosable) {
    visible.value = false;
  }
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
  dragging.value = true;
  if (dialog.value instanceof HTMLElement) {
    const rect = dialog.value.getBoundingClientRect();
    const { width, height, x, y } = rect;
    dialogSize = { width, height, };
    dialogPosition.value = { x, y, };
    dragPos.value = {
      x: 0,
      y: 0,
    };
  }
  dragStartPos = {
    x: e.x,
    y: e.y,
  };
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseup", handleMouseUp);
  window.addEventListener("mouseleave", handleMouseUp);
};

/**
 * @description: 处理拖拽鼠标点击移动事件
 * @author: Quarter
 * @return
 */
const handleMouseMove = (e: MouseEvent): void => {
  dragPos.value = overflowDetect({
    x: e.x - dragStartPos.x,
    y: e.y - dragStartPos.y,
  });
};

/**
 * @description: 处理拖拽鼠标点击抬起事件
 * @author: Quarter
 * @return
 */
const handleMouseUp = (e: MouseEvent): void => {
  dragging.value = false;
  dragPos.value = overflowDetect({
    x: e.x - dragStartPos.x,
    y: e.y - dragStartPos.y,
  });
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
  window.removeEventListener("mouseleave", handleMouseUp);
};

/**
 * @description: 溢出检测
 * @author: Quarter
 * @param {DialogPosition} pos 位置
 * @return {DialogPosition}
 */
const overflowDetect = (pos: DialogPosition): DialogPosition => {
  const rect = document.documentElement.getBoundingClientRect();
  if (dialogPosition.value) {
    if (dialogPosition.value.x + pos.x < 0) {
      pos.x = 0 - dialogPosition.value.x;
    } else if (dialogPosition.value.x + pos.x + dialogSize.width > rect.width) {
      pos.x = rect.width - dialogPosition.value.x - dialogSize.width;
    }
    if (dialogPosition.value.y + pos.y < 0) {
      pos.y = 0 - dialogPosition.value.y;
    } else if (dialogPosition.value.y + pos.y + dialogSize.height > rect.height) {
      pos.y = rect.height - dialogPosition.value.y - dialogSize.height;
    }
  }
  return pos;
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
    dialogPosition.value = undefined;
    dragPos.value = { x: 0, y: 0 };
  }
}, {
  immediate: true,
});
</script>

<template>
  <teleport v-if="hasAttach" :to="attach">
    <div class="t-dialog" :class="classNameList" :style="{ zIndex: props.zIndex }">
      <transition name="fade">
        <div
          v-if="visible && !props.withoutOverlay"
          class="t-dialog__mask"
          @click="handleMaskClick"
        ></div>
      </transition>
      <transition name="scale">
        <div v-if="visible" ref="dialog" class="t-dialog__box" :style="styleList">
          <!-- 容器 -->
          <div class="t-dialog__container">
            <!-- 图标 -->
            <div v-if="'default' !== theme" class="t-dialog__icon">
              <icon :name="iconName"></icon>
            </div>
            <!-- 内容 -->
            <div class="t-dialog__content">
              <!-- 头部 -->
              <div class="t-dialog__header">
                <slot v-if="hasHeaderSlot" name="header"></slot>
                <template v-else>{{ props.title }}</template>
              </div>
              <!-- 主体内容 -->
              <div class="t-dialog__body">
                <slot></slot>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <div v-if="props.footer" class="t-dialog__footer">
            <slot v-if="hasFooterSlot" name="footer"></slot>
            <template v-else>
              <t-button
                :variant="cancelBtnConfig.variant"
                :theme="cancelBtnConfig.theme"
                :loading="cancelBtnConfig.loading"
                @click="handleCancel"
              >{{ cancelBtnConfig.content }}</t-button>
              <t-button
                :variant="comfirmBtnConfig.variant"
                :theme="comfirmBtnConfig.theme"
                :loading="comfirmBtnConfig.loading"
                @click="handleConfirm"
              >{{ comfirmBtnConfig.content }}</t-button>
            </template>
          </div>
          <!-- 拖拽器 -->
          <span v-if="props.draggable" class="t-dialog__dragger" @mousedown="handleMouseDown"></span>
          <!-- 关闭按钮 -->
          <div class="t-dialog__close-btn" @click="handleClose">
            <icon name="close"></icon>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
  <div v-else class="t-dialog" :class="classNameList" :style="{ zIndex: props.zIndex }">
    <transition name="fade">
      <div v-if="visible && !props.withoutOverlay" class="t-dialog__mask" @click="handleMaskClick"></div>
    </transition>
    <transition name="scale">
      <div v-if="visible" ref="dialog" class="t-dialog__box" :style="styleList">
        <!-- 容器 -->
        <div class="t-dialog__container">
          <!-- 图标 -->
          <div v-if="'default' !== theme" class="t-dialog__icon">
            <icon :name="iconName"></icon>
          </div>
          <!-- 内容 -->
          <div class="t-dialog__content">
            <!-- 头部 -->
            <div class="t-dialog__header">
              <slot v-if="hasHeaderSlot" name="header"></slot>
              <template v-else>{{ props.title }}</template>
            </div>
            <!-- 主体内容 -->
            <div class="t-dialog__body">
              <slot></slot>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div v-if="props.footer" class="t-dialog__footer">
          <slot v-if="hasFooterSlot" name="footer"></slot>
          <template v-else>
            <t-button
              :variant="cancelBtnConfig.variant"
              :theme="cancelBtnConfig.theme"
              :loading="cancelBtnConfig.loading"
              @click="handleCancel"
            >{{ cancelBtnConfig.content }}</t-button>
            <t-button
              :variant="comfirmBtnConfig.variant"
              :theme="comfirmBtnConfig.theme"
              :loading="comfirmBtnConfig.loading"
              @click="handleConfirm"
            >{{ comfirmBtnConfig.content }}</t-button>
          </template>
        </div>
        <!-- 拖拽器 -->
        <span v-if="props.draggable" class="t-dialog__dragger" @mousedown="handleMouseDown"></span>
        <!-- 关闭按钮 -->
        <div class="t-dialog__close-btn" @click="handleClose">
          <icon name="close"></icon>
        </div>
      </div>
    </transition>
  </div>
</template>