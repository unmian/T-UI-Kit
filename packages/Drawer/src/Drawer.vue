<!--
 * @Author: Quarter
 * @Date: 2022-01-11 06:23:23
 * @LastEditTime: 2022-02-20 06:27:17
 * @LastEditors: Quarter
 * @Description: 抽屉
 * @FilePath: /t-ui-kit/packages/Drawer/src/Drawer.vue
-->
<template>
  <teleport v-if="hasAttach" :to="drawerAttach">
    <div class="t-drawer" :class="classNameList">
      <transition name="fade">
        <div
          v-if="drawerVisible && !withoutOverlay"
          class="t-drawer__mask"
          @click="handleMaskClick"
        ></div>
      </transition>
      <transition :name="transitionName">
        <div v-if="drawerVisible" ref="drawer" class="t-drawer__content" :style="styleList">
          <!-- 头部 -->
          <div class="t-drawer__header">
            <div class="t-drawer__title">
              <slot v-if="hasHeaderSlot" name="header"></slot>
              <template v-else>{{ title }}</template>
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
          <div v-if="footer" class="t-drawer__footer">
            <slot v-if="hasFooterSlot" name="footer"></slot>
            <template v-else>
              <template v-if="drawerPlacement === 'right'">
                <t-button theme="primary" @click="handleConfirm">{{ confirmBtn }}</t-button>
                <t-button @click="handleCancel">{{ cancelBtn }}</t-button>
              </template>
              <template v-else>
                <t-button @click="handleCancel">{{ cancelBtn }}</t-button>
                <t-button theme="primary" @click="handleConfirm">{{ confirmBtn }}</t-button>
              </template>
            </template>
          </div>
          <!-- 拖拽器 -->
          <span v-if="sizeDraggable" class="t-drawer__dragger" @mousedown="handleMouseDown"></span>
        </div>
      </transition>
    </div>
  </teleport>
  <div v-else class="t-drawer" :class="classNameList">
    <transition name="fade">
      <div v-if="drawerVisible && !withoutOverlay" class="t-drawer__mask" @click="handleMaskClick"></div>
    </transition>
    <transition :name="transitionName">
      <div v-if="drawerVisible" ref="drawer" class="t-drawer__content" :style="styleList">
        <!-- 头部 -->
        <div class="t-drawer__header">
          <div class="t-drawer__title">
            <slot v-if="hasHeaderSlot" name="header"></slot>
            <template v-else>{{ title }}</template>
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
        <div v-if="footer" class="t-drawer__footer">
          <slot v-if="hasFooterSlot" name="footer"></slot>
          <template v-else>
            <template v-if="drawerPlacement === 'right'">
              <t-button theme="primary" @click="handleConfirm">{{ confirmBtn }}</t-button>
              <t-button @click="handleCancel">{{ cancelBtn }}</t-button>
            </template>
            <template v-else>
              <t-button @click="handleCancel">{{ cancelBtn }}</t-button>
              <t-button theme="primary" @click="handleConfirm">{{ confirmBtn }}</t-button>
            </template>
          </template>
        </div>
        <!-- 拖拽器 -->
        <span v-if="sizeDraggable" class="t-drawer__dragger" @mousedown="handleMouseDown"></span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";
import { Button as TButton } from "packages/Button";
import { Teleport } from "packages/Global";
import { DrawerPlacement } from "./type";

import "packages/Style";
import "./style/drawer.scss";

export default Vue.extend({
  name: "TDrawer",
  components: {
    Icon,
    TButton,
    Teleport,
  },
  props: {
    visible: { // 是否可见
      type: Boolean,
      default: false,
    },
    placement: { // 位置
      type: String,
      default: "right",
    } as PropOptions<DrawerPlacement>,
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
    attach: [String, Object], // 挂载节点
    insideElement: { // 仅在中显示
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dragStartPos: 0, // 拖拽开始的位置
      dragStartSize: 0, // 拖拽开始尺寸
      dragSize: undefined as number | undefined, // 拖拽尺寸
    };
  },
  computed: {
    /**
     * @description: 是否可见
     * @author: Quarter
     * @return
     */
    drawerVisible: {
      get(): boolean {
        return !!this.visible;
      },
      set(val: boolean): void {
        this.$emit("update:visible", val);
      }
    },
    /**
     * @description: 定位
     * @author: Quarter
     * @return {DrawerPlacement}
     */
    drawerPlacement: function (): DrawerPlacement {
      const placementList: DrawerPlacement[] = ["left", "right", "top", "bottom"];
      if (placementList.includes(this.placement)) {
        return this.placement;
      }
      return "right";
    },
    /**
     * @description: 自定义尺寸
     * @author: Quarter
     * @return {string}
     */
    drawerSize(): string | undefined {
      if (typeof this.size === "string") {
        const sizeRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
        const str = this.size.replace(/[\s\n\t]+/g, "");
        if (sizeRg.test(str)) return str;
      }
    },
    /**
     * @description: 挂载节点
     * @author: Quarter
     * @return {Element|string}
     */
    drawerAttach(): Element | string | undefined {
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
      return this.drawerAttach instanceof Element || typeof this.drawerAttach === "string";
    },
    /**
     * @description: 过渡动画名称
     * @author: Quarter
     * @return {String}
     */
    transitionName(): string {
      return `slide-${this.drawerPlacement}-all`;
    },
    /**
     * @description: 样式列表
     * @author: Quarter
     * @return {object}
     */
    styleList(): { [name: string]: string | undefined } {
      const styles: { [name: string]: string | undefined } = {};
      if ("left" === this.drawerPlacement || "right" === this.drawerPlacement) {
        if (typeof this.dragSize === "number") {
          styles.width = this.dragSize + "px";
        } else if (this.drawerSize) {
          styles.width = this.drawerSize;
        }
      } else if ("top" === this.drawerPlacement || "bottom" === this.drawerPlacement) {
        if (typeof this.dragSize === "number") {
          styles.height = this.dragSize + "px";
        } else if (this.drawerSize) {
          styles.height = this.drawerSize;
        }
      }
      return styles;
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-drawer--${this.drawerPlacement}`];
      if (this.drawerVisible) {
        classList.push("t-drawer--open");
      }
      if (this.insideElement) {
        classList.push("t-drawer--inside-element");
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
      if (this.disableOverlayClose) {
        return;
      }
      this.drawerVisible = false;
    },
    /**
     * @description: 处理关闭
     * @author: Quarter
     * @return
     */
    handleClose(): void {
      this.drawerVisible = false;
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
      if (this.$refs.drawer instanceof HTMLDivElement) {
        const drawerRect = this.$refs.drawer.getBoundingClientRect();
        this.dragStartSize = drawerRect.width;
      }
      if ("left" === this.drawerPlacement || "right" === this.drawerPlacement) {
        this.dragStartPos = e.x;
      } else if ("top" === this.drawerPlacement || "bottom" === this.drawerPlacement) {
        this.dragStartPos = e.y;
      }
      window.addEventListener("mousemove", this.handleMouseMove);
      window.addEventListener("mouseup", this.handleMouseUp);
    },
    /**
     * @description: 处理拖拽鼠标点击移动事件
     * @author: Quarter
     * @return
     */
    handleMouseMove(e: MouseEvent): void {
      if ("left" === this.drawerPlacement) {
        this.dragSize = e.x - this.dragStartPos + this.dragStartSize;
      } else if ("right" === this.drawerPlacement) {
        this.dragSize = this.dragStartPos - e.x + this.dragStartSize;
      } else if ("top" === this.drawerPlacement) {
        this.dragSize = e.y - this.dragStartPos + this.dragStartSize;
      } else if ("bottom" === this.drawerPlacement) {
        this.dragSize = this.dragStartPos - e.y + this.dragStartSize;
      }
    },
    /**
     * @description: 处理拖拽鼠标点击抬起事件
     * @author: Quarter
     * @return
     */
    handleMouseUp(e: MouseEvent): void {
      if ("left" === this.drawerPlacement) {
        this.dragSize = e.x - this.dragStartPos + this.dragStartSize;
      } else if ("right" === this.drawerPlacement) {
        this.dragSize = this.dragStartPos - e.x + this.dragStartSize;
      } else if ("top" === this.drawerPlacement) {
        this.dragSize = e.y - this.dragStartPos + this.dragStartSize;
      } else if ("bottom" === this.drawerPlacement) {
        this.dragSize = this.dragStartPos - e.y + this.dragStartSize;
      }
      this.dragStartPos = 0;
      this.dragStartSize = 0;
      window.removeEventListener("mousemove", this.handleMouseMove);
      window.removeEventListener("mouseup", this.handleMouseUp);
    },
  },
  watch: {
    /**
     * @description: 监听可见性变化
     * @author: Quarter
     * @param {boolean} val 值
     * @return
     */
    drawerVisible: {
      immediate: true,
      handler(val: boolean, oldVal?: boolean) {
        if (undefined !== oldVal && false === val) {
          this.$emit("close");
        }
        if (false === val) {
          this.dragSize = undefined;
        }
      },
    },
  },
});
</script>