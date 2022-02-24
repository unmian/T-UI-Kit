<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:23:23
 * @LastEditTime: 2022-02-24 06:09:50
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/packages/Dialog/src/Dialog.vue
-->
<template>
  <teleport v-if="hasAttach" :to="attachNode">
    <div class="t-dialog" :class="classNameList" :style="{ zIndex: zIndex }">
      <transition name="fade">
        <div
          v-if="dialogVisible && !withoutOverlay"
          class="t-dialog__mask"
          @click="handleMaskClick"
        ></div>
      </transition>
      <transition name="scale">
        <div v-if="dialogVisible" ref="dialog" class="t-dialog__box" :style="styleList">
          <!-- 容器 -->
          <div class="t-dialog__container">
            <!-- 图标 -->
            <div v-if="'default' !== dialogTheme" class="t-dialog__icon">
              <icon :name="iconName"></icon>
            </div>
            <!-- 内容 -->
            <div class="t-dialog__content">
              <!-- 头部 -->
              <div class="t-dialog__header">
                <slot v-if="hasHeaderSlot" name="header"></slot>
                <template v-else>{{ title }}</template>
              </div>
              <!-- 主体内容 -->
              <div class="t-dialog__body">
                <slot></slot>
              </div>
            </div>
          </div>
          <!-- 底部 -->
          <div v-if="footer" class="t-dialog__footer">
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
          <span v-if="draggable" class="t-dialog__dragger" @mousedown="handleMouseDown"></span>
          <!-- 关闭按钮 -->
          <div class="t-dialog__close-btn" @click="handleClose">
            <icon name="close"></icon>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
  <div v-else class="t-dialog" :class="classNameList" :style="{ zIndex: zIndex }">
    <transition name="fade">
      <div v-if="dialogVisible && !withoutOverlay" class="t-dialog__mask" @click="handleMaskClick"></div>
    </transition>
    <transition name="scale">
      <div v-if="dialogVisible" ref="dialog" class="t-dialog__box" :style="styleList">
        <!-- 容器 -->
        <div class="t-dialog__container">
          <!-- 图标 -->
          <div v-if="'default' !== dialogTheme" class="t-dialog__icon">
            <icon :name="iconName"></icon>
          </div>
          <!-- 内容 -->
          <div class="t-dialog__content">
            <!-- 头部 -->
            <div class="t-dialog__header">
              <slot v-if="hasHeaderSlot" name="header"></slot>
              <template v-else>{{ title }}</template>
            </div>
            <!-- 主体内容 -->
            <div class="t-dialog__body">
              <slot></slot>
            </div>
          </div>
        </div>
        <!-- 底部 -->
        <div v-if="footer" class="t-dialog__footer">
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
        <span v-if="draggable" class="t-dialog__dragger" @mousedown="handleMouseDown"></span>
        <!-- 关闭按钮 -->
        <div class="t-dialog__close-btn" @click="handleClose">
          <icon name="close"></icon>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";
import { Teleport } from "packages/Global";

import type { DialogButtonConfig, DialogPlacement, DialogPosition, DialogSize, DialogTheme } from "./type";

import "packages/Style";
import "./style/dialog.scss";

export default Vue.extend({
  name: "TIcon",
  components: {
    Icon,
    Teleport,
  },
  props: {
    visible: { // 是否可见
      type: Boolean,
      default: false,
    },
    title: String, // 标题内容
    theme: { // 弹窗主题
      type: String,
      default: "default"
    } as PropOptions<DialogTheme>,
    placement: { // 弹窗定位
      type: String,
      default: "top",
    } as PropOptions<DialogPlacement>,
    footer: { // 是否需要底部
      type: Boolean,
      default: false,
    },
    cancelBtn: { // 取消按钮
      type: [String, Object],
      default: "取消",
    } as PropOptions<string | DialogButtonConfig>,
    confirmBtn: [String, Object] as PropOptions<string | DialogButtonConfig>, // 确认按钮
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
    attach: [String, Object], // 挂载节点
  },
  data() {
    return {
      dragging: false, // 正在拖拽
      dialogSize: { width: 0, height: 0, } as DialogSize, // 弹窗尺寸
      dialogPosition: undefined as DialogPosition | undefined, // 弹窗位置
      dragStartPos: { x: 0, y: 0 } as DialogPosition, // 拖拽开始的位置
      dragPos: { x: 0, y: 0 } as DialogPosition, // 本次拖拽相差的位置
    };
  },
  computed: {
    /**
     * @description: 是否可见
     * @author: Quarter
     * @return
     */
    dialogVisible: {
      get(): boolean {
        return !!this.visible;
      },
      set(val: boolean): void {
        this.$emit("update:visible", val);
      },
    },
    /**
     * @description: 主题
     * @author: Quarter
     * @return {DialogTheme}
     */
    dialogTheme(): DialogTheme {
      const placementList: DialogTheme[] = ["default", "info", "warning", "danger", "success"];
      if (placementList.includes(this.theme)) {
        return this.theme;
      }
      return "default";
    },
    /**
     * @description: 主题
     * @author: Quarter
     * @return {DialogTheme}
     */
    iconName(): string | undefined {
      if (typeof this.icon === "string" && this.icon) {
        return this.icon;
      }
      const iconMap: { [key: string]: string } = {
        info: "info-circle-filled",
        warning: "error-circle-filled",
        danger: "error-circle-filled",
        success: "check-circle-filled"
      };
      if (Reflect.has(iconMap, this.dialogTheme)) {
        return iconMap[this.dialogTheme];
      }
    },
    /**
     * @description: 定位
     * @author: Quarter
     * @return {DialogPlacement}
     */
    dialogPlacement(): DialogPlacement {
      const placementList: DialogPlacement[] = ["top", "center"];
      if (placementList.includes(this.placement)) {
        return this.placement;
      }
      return "top";
    },
    /**
     * @description: 自定义宽度
     * @author: Quarter
     * @return {string}
     */
    dialogWidth(): string | undefined {
      if (typeof this.width === "string") {
        const widthRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
        const str = this.width.replace(/[\s\n\t]+/g, "");
        if (widthRg.test(str)) return str;
      }
    },
    /**
     * @description: 取消按钮配置
     * @author: Quarter
     * @return {DialogButtonConfig}
     */
    cancelBtnConfig(): DialogButtonConfig {
      if (typeof this.cancelBtn === "string" && this.cancelBtn) {
        return {
          variant: "base",
          theme: "default",
          content: this.cancelBtn,
          loading: false,
        };
      } else if (this.cancelBtn instanceof Object) {
        const { variant, theme, content, loading } = this.cancelBtn;
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
    },
    /**
     * @description: 确认按钮配置
     * @author: Quarter
     * @return {DialogButtonConfig}
     */
    comfirmBtnConfig(): DialogButtonConfig {
      if (typeof this.confirmBtn === "string" && this.confirmBtn) {
        return {
          variant: "base",
          theme: "primary",
          content: this.confirmBtn,
          loading: false,
        };
      } else if (this.confirmBtn instanceof Object) {
        const { variant, theme, content, loading } = this.confirmBtn;
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
    },
    /**
     * @description: 挂载节点
     * @author: Quarter
     * @return {Element|string}
     */
    attachNode(): Element | string | undefined {
      if (this.attach instanceof Element) {
        return this.attach;
      } else if (typeof this.attach === "string") {
        return this.attach;
      }
    },
    /**
     * @description: 是否存在挂载节点
     * @author: Quarter
     * @return {boolean}
     */
    hasAttach(): boolean {
      return this.attachNode instanceof Element || typeof this.attachNode === "string";
    },
    /**
     * @description: 样式列表
     * @author: Quarter
     * @return {CSSProperties}
     */
    styleList(): { [name: string]: string | number | undefined } {
      const styles: { [name: string]: string | number | undefined } = {
        width: this.dialogWidth,
      };
      if (this.dialogPosition) {
        styles.top = this.dialogPosition.y + this.dragPos.y + "px";
        styles.left = this.dialogPosition.x + this.dragPos.x + "px";
      }
      return styles;
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-dialog--theme-${this.dialogTheme}`,
        `t-dialog--${this.dialogPlacement}`,
      ];
      if (this.dialogVisible) {
        classList.push("t-dialog--open");
      }
      if (this.draggable) {
        classList.push("t-dialog--draggable");
        if (this.dragging) {
          classList.push("t-dialog--is-dragging");
        }
      }
      return classList;
    },
    /**
     * @description: 是否存在头部插槽
     * @author: Quarter
     * @return {boolean}
     */
    hasHeaderSlot(): boolean {
      if (Array.isArray(this.$slots.header)) {
        return this.$slots.header.length > 0;
      } else {
        return !!this.$slots.header;
      }
    },
    /**
     * @description: 是否存在底部插槽
     * @author: Quarter
     * @return {boolean}
     */
    hasFooterSlot(): boolean {
      if (Array.isArray(this.$slots.footer)) {
        return this.$slots.footer.length > 0;
      } else {
        return !!this.$slots.footer;
      }
    },
  },
  methods: {
    /**
     * @description: 处理蒙层点击
     * @author: Quarter
     * @return
     */
    handleMaskClick(): void {
      if (this.overlayClosable) {
        this.dialogVisible = false;
      }
    },
    /**
     * @description: 处理关闭
     * @author: Quarter
     * @return
     */
    handleClose(): void {
      this.dialogVisible = false;
    },
    /**
     * @description: 处理取消操作
     * @author: Quarter
     * @return
     */
    handleCancel(): void {
      this.$emit("cancel");
    },
    /**
     * @description: 处理确认
     * @author: Quarter
     * @return
     */
    handleConfirm(): void {
      this.$emit("confirm");
    },
    /**
     * @description: 处理拖拽器鼠标点下事件
     * @author: Quarter
     * @return
     */
    handleMouseDown(e: MouseEvent): void {
      this.dragging = true;
      if (this.$refs.dialog instanceof HTMLElement) {
        const rect = this.$refs.dialog.getBoundingClientRect();
        const { width, height, x, y } = rect;
        this.dialogSize = { width, height, };
        this.dialogPosition = { x, y, };
        this.dragPos = {
          x: 0,
          y: 0,
        };
      }
      this.dragStartPos = {
        x: e.x,
        y: e.y,
      };
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
      window.addEventListener("mouseleave", this.handleMouseUp);
    },
    /**
     * @description: 处理拖拽鼠标点击移动事件
     * @author: Quarter
     * @return
     */
    handleMouseMove(e: MouseEvent): void {
      this.dragPos = this.overflowDetect({
        x: e.x - this.dragStartPos.x,
        y: e.y - this.dragStartPos.y,
      });
    },
    /**
     * @description: 处理拖拽鼠标点击抬起事件
     * @author: Quarter
     * @return
     */
    handleMouseUp(e: MouseEvent): void {
      this.dragging = false;
      this.dragPos = this.overflowDetect({
        x: e.x - this.dragStartPos.x,
        y: e.y - this.dragStartPos.y,
      });
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
      window.removeEventListener("mouseleave", this.handleMouseUp);
    },
    /**
     * @description: 溢出检测
     * @author: Quarter
     * @param {DialogPosition} pos 位置
     * @return {DialogPosition}
     */
    overflowDetect(pos: DialogPosition): DialogPosition {
      const rect = document.documentElement.getBoundingClientRect();
      if (this.dialogPosition) {
        if (this.dialogPosition.x + pos.x < 0) {
          pos.x = 0 - this.dialogPosition.x;
        } else if (this.dialogPosition.x + pos.x + this.dialogSize.width > rect.width) {
          pos.x = rect.width - this.dialogPosition.x - this.dialogSize.width;
        }
        if (this.dialogPosition.y + pos.y < 0) {
          pos.y = 0 - this.dialogPosition.y;
        } else if (this.dialogPosition.y + pos.y + this.dialogSize.height > rect.height) {
          pos.y = rect.height - this.dialogPosition.y - this.dialogSize.height;
        }
      }
      return pos;
    },
  },
  watch: {
    /**
     * @description: 监听可见性变化
     * @author: Quarter
     * @param {boolean} val 值
     * @return
     */
    dialogVisible: {
      immediate: true,
      handler(val: boolean, oldVal?: boolean | undefined): void {
        if (undefined !== oldVal && false === val) {
          this.$emit("close");
        }
        if (false === val) {
          this.dialogPosition = undefined;
          this.dragPos = { x: 0, y: 0 };
        }
      },
    }
  },
});
</script>