<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:42
 * @LastEditTime: 2022-03-01 08:13:27
 * @LastEditors: Quarter
 * @Description: 单选按钮
 * @FilePath: /t-ui-kit/packages/Radio/src/RadioButton.vue
-->
<script lang="ts" setup>
import { computed, inject, onBeforeMount, PropType, ref, watch } from "vue";

import type { RadioGroupProvider, RadioValue } from "./type";

const props = defineProps({
  disabled: Boolean, // 是否禁用
  value: [String, Number, Boolean] as PropType<RadioValue | undefined>, // 单选框的值
});

// 单选框组供应
const radioGroup = inject<RadioGroupProvider | undefined>("tRadioGroup", undefined);
// 是否存在单选框组
const radioGroupExist = ref<boolean>(false);

/**
 * @description: 单选框值
 * @author: Quarter
 * @return {RadioValue}
 */
const value = computed<RadioValue | undefined>((): RadioValue | undefined => {
  if (validateValueType(props.value)) {
    return props.value;
  }
});

/**
 * @description: 名称
 * @author: Quarter
 * @return {string}
 */
const name = computed<string | undefined>((): string | undefined => {
  if (typeof radioGroup?.props.name === "string") {
    return radioGroup?.props.name;
  }
});

/**
 * @description: 是否禁用
 * @author: Quarter
 * @return {boolean}
 */
const disabled = computed<boolean>((): boolean => {
  if (props.disabled) {
    return true;
  } else {
    if (radioGroup?.props.disabled) {
      return true;
    }
  }
  return false;
});

/**
 * @description: 是否选中
 * @author: Quarter
 * @return {boolean}
 */
const checked = computed<boolean>((): boolean => {
  if (radioGroup && validateValueType(radioGroup.value.value) && undefined !== value.value) {
    return radioGroup.value.value === value.value;
  }
  return false;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [];
  if (checked.value) {
    classList.push("t-radio-button--checked");
  }
  if (disabled.value) {
    classList.push("t-radio-button--disabled");
  }
  return classList;
});

/**
 * @description: 验证值类型
 * @author: Quarter
 * @param {string|number|boolean} val 值
 * @return {boolean}
 */
const validateValueType = (val: RadioValue | undefined): boolean => {
  return (typeof val === "string" || typeof val === "number" || typeof val === "boolean");
}

/**
 * @description: 处理选中状态变化
 * @author: Quarter
 * @return
 */
const handleChange = (e: Event): void => {
  if (undefined !== value.value) {
    radioGroup?.handleRadioChange(value.value);
  }
};

/**
 * @description: 挂载前
 * @author: Quarter
 * @return
 */
onBeforeMount((): void => {
  radioGroupExist.value = !!(radioGroup && radioGroup.name === "TRadioGroup");
  if (radioGroupExist.value && radioGroup) {
    radioGroup.isRadioButton.value = true;
  }
});
</script>

<template>
  <label class="t-radio-button" :class="classNameList">
    <input
      type="radio"
      :name="name"
      :checked="checked"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
    />
    <span class="t-radio-button__label">
      <slot></slot>
    </span>
  </label>
</template>