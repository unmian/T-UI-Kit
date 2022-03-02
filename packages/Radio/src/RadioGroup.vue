<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:14
 * @LastEditTime: 2022-03-02 05:45:04
 * @LastEditors: Quarter
 * @Description: 单选按钮组
 * @FilePath: /t-ui-kit/packages/Radio/src/RadioGroup.vue
-->
<template>
  <div class="t-radio-group" :class="classNameList">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

import type { RadioGroupSize, RadioGroupVariant, RadioValue } from "./type";

import "packages/Style";
import "./style/radioGroup.scss";

export default Vue.extend({
  name: "TRadioGroup",
  provide() {
    return {
      tRadioGroup: () => ({
        name: "TRadioGroup",
        props: {
          value: this.value,
          defaultValue: this.defaultValue,
          name: this.name,
          size: this.size,
          variant: this.variant,
          disabled: this.disabled,
        },
        value: this.checkedValue,
        setRadioButtonGroup: this.setRadioButtonGroup,
        handleRadioChange: this.handleRadioChange,
      }),
    };
  },
  props: {
    value: { // 选中值
      type: [String, Number, Boolean],
      default: undefined,
    } as PropOptions<RadioValue | undefined>,
    defaultValue: { // 默认值
      type: [String, Number, Boolean],
      default: undefined,
    } as PropOptions<RadioValue | undefined>,
    name: String, // 名称
    size: { // 单选框组尺寸
      type: String,
      default: "medium",
    } as PropOptions<RadioGroupSize>,
    variant: { // 单选框组形式
      type: String,
      default: "outline",
    } as PropOptions<RadioGroupVariant>,
    disabled: Boolean, // 禁用
  },
  data() {
    return {
      isRadioButton: false, // 是否单选按钮
      checkedValue: undefined as RadioValue | undefined, // 选中的值
    };
  },
  computed: {
    /**
     * @description: 选中的值
     * @author: Quarter
     * @return {RadioValue}
     */
    radioValue: {
      get(): RadioValue | undefined {
        if (this.validateValueType(this.value)) {
          return this.value;
        }
      },
      set(val: RadioValue | undefined): void {
        if (this.validateValueType(val)) {
          this.$emit("update:value", val);
          this.$emit("input", val);
        }
      },
    },
    /**
     * @description: 单选按钮组尺寸
     * @author: Quarter
     * @return {RadioGroupSize}
     */
    radioSize(): RadioGroupSize {
      const sizeList: RadioGroupSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "medium";
    },
    /**
     * @description: 单选按钮组形式
     * @author: Quarter
     * @return {RadioGroupVariant}
     */
    radioVariant(): RadioGroupVariant {
      const variantList: RadioGroupVariant[] = ["outline", "default-filled", "primary-filled"];
      if (variantList.includes(this.variant)) {
        return this.variant;
      }
      return "outline";
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-radio-group--${this.radioSize}`,
        `t-radio-group--${this.radioVariant}`,
      ];
      if (this.isRadioButton) {
        classList.push("t-radio-button-group");
      }
      return classList;
    },
  },
  created() {
    if (this.validateValueType(this.defaultValue)) {
      this.checkedValue = this.defaultValue;
    }
    if (this.validateValueType(this.radioValue)) {
      this.checkedValue = this.radioValue;
    }
  },
  methods: {
    /**
     * @description: 设置为单选按钮组
     * @author: Quarter
     * @return
     */
    setRadioButtonGroup(): void {
      this.isRadioButton = true;
    },
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
     * @description: 处理选项变化
     * @author: Quarter
     * @return
     */
    handleRadioChange(val: RadioValue): void {
      if (this.validateValueType(val)) {
        this.checkedValue = val;
        this.$emit("change", this.checkedValue);
      }
    },
  },
  watch: {
    /**
     * @description: 监听选中值的变化
     * @param {RadioValue} val 变化的值
     * @author: Quarter
     * @return
     */
    checkedValue(val: RadioValue | undefined): void {
      this.radioValue = val;
    },
    /**
     * @description: 监听入参选中值的变化
     * @param {RadioValue} val 变化的值
     * @author: Quarter
     * @return
     */
    radioValue(val: RadioValue | undefined): void {
      if (this.validateValueType(val) && val !== this.checkedValue) {
        this.checkedValue = val;
      }
    },
  },
});
</script>