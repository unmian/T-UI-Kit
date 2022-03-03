<!--
 * @Author: Quarter
 * @Date: 2022-03-03 02:44:57
 * @LastEditTime: 2022-03-03 10:34:31
 * @LastEditors: Quarter
 * @Description: 开关组件
 * @FilePath: /t-ui-kit/packages/Switch/src/Switch.vue
-->
<template>
  <div class="t-switch" :class="classNameList" @click="handleClick">
    <!-- 文本 -->
    <div v-if="hasLabel" class="t-switch__label">
      <span>
        <slot name="label" :value="isActive">{{ isActive ? activeLabel : inactiveLabel }}</slot>
      </span>
    </div>
    <!-- 控制器 -->
    <div class="t-switch__handle"></div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { SwitchSize, SwitchValue } from "./type";

import "packages/Style";
import "./style/switch.scss";

export default Vue.extend({
  name: "TSwitch",
  props: {
    value: { // 值
      type: [String, Number, Boolean],
      default: undefined,
    } as PropOptions<SwitchValue | undefined>,
    customValue: { // 自定义值
      type: Array,
      default: undefined,
    } as PropOptions<SwitchValue[] | undefined>,
    label: { // 自定义文本
      type: Array,
      default: undefined,
    } as PropOptions<string[] | undefined>,
    loading: { // 是否正在加载中
      type: Boolean,
      default: false,
    },
    size: { // 开关尺寸
      type: String,
      default: "medium",
    } as PropOptions<SwitchSize>,
    disabled: { // 是否禁用
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false, // 是否选中
    };
  },
  computed: {
    /**
     * @description: 值
     * @author: Quarter
     * @return {SwitchValue}
     */
    switchValue: {
      get(): SwitchValue | undefined {
        if (this.verifyValueType(this.value)) {
          return this.value as SwitchValue;
        }
      },
      set(val: SwitchValue | undefined): void {
        if (this.verifyValueType(val)) {
          this.$emit("update:value", val);
          this.$emit("input", val);
        }
      }
    },
    /**
     * @description: 激活的值
     * @author: Quarter
     * @return {SwitchValue}
     */
    activeValue(): SwitchValue {
      if (Array.isArray(this.customValue) && this.verifyValueType(this.customValue[0])) {
        return this.customValue[0];
      }
      return true;
    },
    /**
     * @description: 未激活的值
     * @author: Quarter
     * @return {SwitchValue}
     */
    inactiveValue(): SwitchValue {
      if (Array.isArray(this.customValue) && this.verifyValueType(this.customValue[1])) {
        return this.customValue[1];
      }
      return false;
    },
    /**
     * @description: 开关尺寸
     * @author: Quarter
     * @return {SwitchSize}
     */
    switchSize(): SwitchSize {
      const sizeList: SwitchSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "medium";
    },
    /**
     * @description: 是否禁用
     * @author: Quarter
     * @return {SwitchSize}
     */
    switchDisabled(): boolean {
      if (this.loading) {
        return true;
      }
      if (this.disabled) {
        return true;
      }
      return false;
    },
    /**
     * @description: 激活时的文本信息
     * @author: Quarter
     * @return {string}
     */
    activeLabel(): string | undefined {
      if (Array.isArray(this.label) && typeof this.label[0] === "string") {
        return this.label[0];
      }
    },
    /**
     * @description: 未激活时的文本信息
     * @author: Quarter
     * @return {string}
     */
    inactiveLabel(): string | undefined {
      if (Array.isArray(this.label) && typeof this.label[1] === "string") {
        return this.label[1];
      }
    },
    /**
     * @description: 是否有文案插槽
     * @author: Quarter
     * @return {boolean}
     */
    hasLabelSlot(): boolean {
      if (undefined !== this.$scopedSlots.label) {
        return true;
      }
      if (Array.isArray(this.$slots.label)) {
        return this.$slots.label.length > 0;
      } else {
        return !!this.$slots.label;
      }
    },
    /**
     * @description: 是否有文本
     * @author: Quarter
     * @return {boolean}
     */
    hasLabel(): boolean {
      if (this.hasLabelSlot) {
        return true;
      }
      if (undefined !== this.activeLabel || undefined !== this.inactiveLabel) {
        return true;
      }
      return false;
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-switch--${this.switchSize}`,
      ];
      if (this.isActive) {
        classList.push("t-switch--active");
      }
      if (this.loading) {
        classList.push("t-switch--loading");
      }
      if (this.switchDisabled) {
        classList.push("t-switch--disabled");
      }
      return classList;
    },
  },
  methods: {
    /**
     * @description: 验证数据类型
     * @author: Quarter
     * @param {SwitchValue} val 值
     * @return {boolean}
     */
    verifyValueType(val: SwitchValue | undefined): boolean {
      if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
        return true;
      }
      return false;
    },
    /**
     * @description: 处理点击事件
     * @author: Quarter
     * @return
     */
    handleClick(): void {
      if (this.switchDisabled) return;
      this.isActive = !this.isActive;
      this.switchValue = this.isActive ? this.activeValue : this.inactiveValue;
      this.$emit("change", this.isActive ? this.activeValue : this.inactiveValue);
    },
  },
  watch: {
    /**
     * @description: 监听值变化
     * @author: Quarter
     * @param {SwitchValue} val 值
     * @return
     */
    switchValue: {
      immediate: true,
      handler(val: SwitchValue | undefined): void {
        if (undefined !== val && this.activeValue === val) {
          this.isActive = true;
        } else {
          this.isActive = false;
        }
      },
    },
    /**
     * @description: 监听选中值的变化
     * @author: Quarter
     * @param {SwitchValue} val 值
     * @return
     */
    activeValue: {
      immediate: true,
      handler(val: SwitchValue): void {
        if (true === this.isActive) {
          this.switchValue = val;
        }
      },
    },
    /**
     * @description: 监听未选中值的变化
     * @author: Quarter
     * @param {SwitchValue} val 值
     * @return
     */
    inactiveValue: {
      immediate: true,
      handler(val: SwitchValue): void {
        if (false === this.isActive) {
          this.switchValue = val;
        }
      },
    },
  },
});
</script>