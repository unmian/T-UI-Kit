<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:30:54
 * @LastEditTime: 2022-03-02 09:11:53
 * @LastEditors: Quarter
 * @Description: 单选框
 * @FilePath: /t-ui-kit/packages/Checkbox/src/Checkbox.vue
-->
<template>
  <label class="t-checkbox" :class="classNameList">
    <input
      type="checkbox"
      :name="checkboxName"
      :checked="isChecked"
      :disabled="checkboxDisabled"
      :indeterminate="indeterminate"
      :value="checkboxValue"
      @change="handleChange"
      @click="handleClick"
    />
    <span class="t-checkbox__input"></span>
    <span class="t-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { CheckboxGroupProvider, CheckboxValue } from "./type";

import "packages/Style";
import "./style/checkbox.scss";

export default Vue.extend({
  name: "TCheckbox",
  inject: {
    tCheckboxGroup: {
      from: "tCheckboxGroup",
      default: undefined,
    },
  },
  props: {
    checked: { // 是否选中
      type: Boolean,
      default: undefined,
    },
    defaultChecked: { // 默认是否选中
      type: Boolean,
      default: false,
    },
    indeterminate: { // 是否半选
      type: Boolean,
      default: false,
    },
    name: String, // 名称
    disabled: Boolean, // 是否禁用
    value: { // 单选框的值
      type: [String, Number, Boolean],
      default: undefined,
    } as PropOptions<CheckboxValue | undefined>,
  },
  data() {
    return {
      isChecked: false, // 是否选中
    };
  },
  computed: {
    /**
     * @description: 按钮组
     * @author: Quarter
     * @return {CheckboxGroupProvider}
     */
    checkboxGroup(): CheckboxGroupProvider | undefined {
      if ((this as any).tCheckboxGroup instanceof Function) {
        return (this as any).tCheckboxGroup();
      }
    },
    /**
     * @description: 是否自主控制
     * @author: Quarter
     * @return {boolean}
     */
    selfControl(): boolean {
      if (this.checkboxGroup && this.checkboxGroup.name === "TCheckboxGroup") {
        return false;
      }
      return true;
    },/**
     * @description: 单选框值
     * @author: Quarter
     * @return {CheckboxValue}
     */
    checkboxValue(): CheckboxValue | undefined {
      if (this.validateValueType(this.value)) {
        return this.value;
      }
    },
    /**
     * @description: 名称
     * @author: Quarter
     * @return {string}
     */
    checkboxName(): string | undefined {
      if (typeof this.checkboxGroup?.props.name === "string") {
        return this.checkboxGroup?.props.name;
      }
      if (typeof this.name === "string") {
        return this.name;
      }
    },
    /**
     * @description: 是否禁用
     * @author: Quarter
     * @return {boolean}
     */
    checkboxDisabled(): boolean {
      if (this.disabled) {
        return true;
      } else {
        if (this.checkboxGroup?.props.disabled) {
          return true;
        }
      }
      return false;
    },
    /**
     * @description: 是否选中
     * @author: Quarter
     * @return {boolean}
     */
    checkboxChecked: {
      get(): boolean | undefined {
        if (this.checkboxGroup && Array(this.checkboxGroup.value) && undefined !== this.checkboxValue) {
          return this.checkboxGroup.value.includes(this.checkboxValue);
        }
        if (typeof this.checked === "boolean") {
          return this.checked;
        }
      },
      set(val: boolean | undefined): void {
        if (typeof val === "boolean") {
          this.$emit("update:checked", val);
          this.$emit("input", val);
        }
      },
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [];
      if (this.isChecked) {
        classList.push("t-checkbox--checked");
      }
      if (this.checkboxDisabled) {
        classList.push("t-checkbox--disabled");
      }
      if (this.indeterminate) {
        classList.push("t-checkbox--indeterminate");
      }
      return classList;
    },
  },
  created() {
    if (typeof this.defaultChecked === "boolean") {
      this.isChecked = this.defaultChecked;
    }
    if (typeof this.checkboxChecked === "boolean") {
      this.isChecked = this.checkboxChecked;
    }
  },
  methods: {
    /**
     * @description: 验证值类型
     * @author: Quarter
     * @param {string|number|boolean} val 值
     * @return {boolean}
     */
    validateValueType(val: CheckboxValue | undefined): boolean {
      return (typeof val === "string" || typeof val === "number" || typeof val === "boolean");
    },
    /**
     * @description: 处理选中状态变化
     * @author: Quarter
     * @return
     */
    handleChange(e: Event): void {
      if (this.selfControl) {
        this.$emit("change", this.isChecked, this.checkboxValue);
      } else {
        if (undefined !== this.checkboxValue) {
          const target = e.target as HTMLInputElement;
          this.checkboxGroup?.handleCheckboxChange(this.checkboxValue, !!target.checked);
        }
      }
    },
    /**
     * @description: 处理选中状态变化
     * @author: Quarter
     * @return
     */
    handleClick(e: MouseEvent): void {
      if (this.selfControl) {
        const target = e.target as HTMLInputElement;
        this.isChecked = target.checked;
      }
    },
  },
  watch: {
    /**
     * @description: 监听选中状态的变化
     * @author: Quarter
     * @return
     */
    isChecked(val: boolean): void {
      this.checkboxChecked = val;
    },
    /**
     * @description: 监听参数选中状态的变化
     * @author: Quarter
     * @return
     */
    checkboxChecked(val: boolean | undefined): void {
      if (typeof val === "boolean" && val !== this.isChecked) {
        this.isChecked = val;
      }
    },
  },
});
</script>