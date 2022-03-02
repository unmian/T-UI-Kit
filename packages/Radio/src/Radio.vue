<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:30:54
 * @LastEditTime: 2022-03-02 05:44:44
 * @LastEditors: Quarter
 * @Description: 单选框
 * @FilePath: /t-ui-kit/packages/Radio/src/Radio.vue
-->
<template>
  <label class="t-radio" :class="classNameList">
    <input
      type="radio"
      :name="radioName"
      :checked="isChecked"
      :disabled="radioDisabled"
      :value="radioValue"
      @change="handleChange"
      @click="handleClick"
    />
    <span class="t-radio__input"></span>
    <span class="t-radio__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { RadioGroupProvider, RadioValue } from "./type";

import "packages/Style";
import "./style/radio.scss";

export default Vue.extend({
  name: "TRadio",
  inject: {
    tRadioGroup: {
      from: "tRadioGroup",
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
    disabled: Boolean, // 是否禁用
    name: String, // 名称
    value: [String, Number, Boolean] as PropOptions<RadioValue | undefined>, // 单选框的值
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
     * @return {RadioGroupProvider}
     */
    radioGroup(): RadioGroupProvider | undefined {
      if ((this as any).tRadioGroup instanceof Function) {
        return (this as any).tRadioGroup();
      }
    },
    /**
     * @description: 是否自主控制
     * @author: Quarter
     * @return {boolean}
     */
    selfControl(): boolean {
      if (this.radioGroup && this.radioGroup.name === "TRadioGroup") {
        return false;
      }
      return true;
    },
    /**
     * @description: 单选框值
     * @author: Quarter
     * @return {RadioValue}
     */
    radioValue(): RadioValue | undefined {
      if (this.validateValueType(this.value)) {
        return this.value;
      }
    },
    /**
     * @description: 名称
     * @author: Quarter
     * @return {string}
     */
    radioName(): string | undefined {
      if (typeof this.radioGroup?.props.name === "string") {
        return this.radioGroup?.props.name;
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
    radioDisabled(): boolean {
      if (this.disabled) {
        return true;
      } else {
        if (this.radioGroup?.props.disabled) {
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
    radioChecked: {
      get(): boolean | undefined {
        if (this.radioGroup && this.validateValueType(this.radioGroup.value) && undefined !== this.radioValue) {
          return this.radioGroup.value === this.radioValue;
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
        classList.push("t-radio--checked");
      }
      if (this.radioDisabled) {
        classList.push("t-radio--disabled");
      }
      return classList;
    },
  },
  created() {
    if (typeof this.defaultChecked === "boolean") {
      this.isChecked = this.defaultChecked;
    }
    if (typeof this.radioChecked === "boolean") {
      this.isChecked = this.radioChecked;
    }
  },
  methods: {
    /**
     * @description: 验证值类型
     * @author: Quarter
     * @param {string|number|boolean} val 值
     * @return {boolean}
     */
    validateValueType(val: RadioValue | undefined): boolean {
      return (typeof val === "string" || typeof val === "number" || typeof val === "boolean");
    },
    /**
     * @description: 处理选中状态变化
     * @author: Quarter
     * @return
     */
    handleChange(e: Event): void {
      if (this.selfControl) {
        this.$emit("change", this.isChecked, this.radioValue);
      } else {
        if (undefined !== this.radioValue) {
          this.radioGroup?.handleRadioChange(this.radioValue);
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
      this.radioChecked = val;
    },
    /**
     * @description: 监听参数选中状态的变化
     * @author: Quarter
     * @return
     */
    radioChecked(val: boolean | undefined): void {
      if (typeof val === "boolean" && val !== this.isChecked) {
        this.isChecked = val;
      }
    },
  },
});
</script>