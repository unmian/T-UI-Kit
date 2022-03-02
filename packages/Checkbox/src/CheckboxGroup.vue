<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:14
 * @LastEditTime: 2022-03-02 09:10:02
 * @LastEditors: Quarter
 * @Description: 复选按钮组
 * @FilePath: /t-ui-kit/packages/Checkbox/src/CheckboxGroup.vue
-->
<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { isArrayEqual } from "packages/Global";

import type { CheckboxGroupProvider, CheckboxValue } from "./type";

import "packages/Style";

export default Vue.extend({
  name: "TCheckboxGroup",
  provide() {
    return {
      tCheckboxGroup: () => ({
        name: "TCheckboxGroup",
        props: {
          value: this.value,
          defaultValue: this.defaultValue,
          name: this.name,
          disabled: this.disabled,
        },
        value: this.checkedValue,
        handleCheckboxChange: this.handleCheckboxChange,
      }),
    };
  },
  props: {
    value: { // 选中值
      type: Array,
      default: undefined,
    } as PropOptions<CheckboxValue[] | undefined>,
    defaultValue: { // 默认值
      type: Array,
      default: undefined,
    } as PropOptions<CheckboxValue[] | undefined>,
    name: String, // 名称
    disabled: Boolean, // 禁用
  },
  data() {
    return {
      checkedValue: [] as CheckboxValue[], // 选中的值
    };
  },
  computed: {
    /**
     * @description: 选中的值
     * @author: Quarter
     * @return {CheckboxValue[]}
     */
    checkboxValue: {
      get(): CheckboxValue[] | undefined {
        if (Array.isArray(this.value)) {
          return this.value.filter((val: CheckboxValue) => this.validateValueType(val));
        }
      },
      set(val: CheckboxValue[] | undefined): void {
        if (Array.isArray(val)) {
          this.$emit("update:value", val);
          this.$emit("input", val);
        }
      },
    },
  },
  created() {
    if (Array.isArray(this.defaultValue)) {
      this.checkedValue = this.defaultValue.filter((val: CheckboxValue) => this.validateValueType(val));
    }
    if (Array.isArray(this.checkboxValue)) {
      this.checkedValue = this.checkboxValue;
    } else {
      this.checkboxValue = this.checkedValue;
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
     * @description: 处理选项变化
     * @param {CheckboxValue} val 值
     * @param {boolean} checked 是否选中
     * @author: Quarter
     * @return
     */
    handleCheckboxChange(val: CheckboxValue, checked: boolean = true): void {
      if (this.validateValueType(val)) {
        if (this.checkedValue.includes(val)) {
          if (!checked) {
            this.checkedValue.splice(this.checkedValue.indexOf(val), 1);
            this.$emit("change", this.checkedValue, val, !!checked);
          }
        } else if (checked) {
          this.checkedValue.push(val);
          this.checkboxValue = this.checkedValue;
          this.$emit("change", this.checkedValue, val, !!checked);
        }
      }
    },
  },
  watch: {
    /**
     * @description: 监听入参选中值的变化
     * @param {CheckboxValue} val 变化的值
     * @author: Quarter
     * @return
     */
    checkboxValue(val: CheckboxValue | undefined): void {
      if (Array.isArray(val)) {
        if (!isArrayEqual(val, this.checkedValue)) {
          this.checkedValue = val;
        }
      } else {
        if (this.checkedValue.length !== 0) {
          this.checkedValue = [];
        }
      }
    },
  },
});
</script>