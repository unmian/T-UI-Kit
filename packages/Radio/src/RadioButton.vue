<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:42
 * @LastEditTime: 2022-03-02 05:26:28
 * @LastEditors: Quarter
 * @Description: 单选按钮
 * @FilePath: /t-ui-kit/packages/Radio/src/RadioButton.vue
-->
<template>
  <label class="t-radio-button" :class="classNameList">
    <input
      type="radio"
      :name="radioName"
      :checked="radioChecked"
      :disabled="radioDisabled"
      :value="radioValue"
      @change="handleChange"
    />
    <span class="t-radio-button__label">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { RadioGroupProvider, RadioValue } from "./type";

export default Vue.extend({
  name: "TRadioButton",
  inject: {
    tRadioGroup: {
      from: "tRadioGroup",
      default: undefined,
    },
  },
  props: {
    disabled: Boolean, // 是否禁用
    value: [String, Number, Boolean] as PropOptions<RadioValue | undefined>, // 单选框的值
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
    radioChecked(): boolean {
      if (this.radioGroup && this.validateValueType(this.radioGroup.value) && undefined !== this.radioValue) {
        return this.radioGroup.value === this.radioValue;
      }
      return false;
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [];
      if (this.radioChecked) {
        classList.push("t-radio-button--checked");
      }
      if (this.radioDisabled) {
        classList.push("t-radio-button--disabled");
      }
      return classList;
    },
  },
  created() {
    this.radioGroup?.setRadioButtonGroup();
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
      if (undefined !== this.radioValue) {
        this.radioGroup?.handleRadioChange(this.radioValue);
      }
    },
  },
});
</script>