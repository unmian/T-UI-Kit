<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:30:54
 * @LastEditTime: 2022-03-02 08:49:40
 * @LastEditors: Quarter
 * @Description: 单选框
 * @FilePath: /t-ui-kit/packages/Checkbox/src/Checkbox.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/checkbox.scss";

import { computed, inject, onBeforeMount, PropType, ref, watch } from "vue";

import type { CheckboxGroupProvider, CheckboxValue } from "./type";

const props = defineProps({
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
    type: [String, Number, Boolean] as PropType<CheckboxValue | undefined>,
    default: undefined,
  },
});
const emits = defineEmits(["update:checked", "change"]);

// 单选框组供应
const checkboxGroup = inject<CheckboxGroupProvider | undefined>("tCheckboxGroup", undefined);
// 是否可以自我控制
const selfControl = ref<boolean>(true);

// 是否选中
const isChecked = ref<boolean>(false);

/**
 * @description: 单选框值
 * @author: Quarter
 * @return {CheckboxValue}
 */
const value = computed<CheckboxValue | undefined>((): CheckboxValue | undefined => {
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
  if (typeof checkboxGroup?.props.name === "string") {
    return checkboxGroup?.props.name;
  }
  if (typeof props.name === "string") {
    return props.name;
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
    if (checkboxGroup?.props.disabled) {
      return true;
    }
  }
  return false;
});

/**
 * @description: 是否选中
 * @author: Quarter
 * @return {Boolean}
 */
const checked = computed<boolean | undefined>({
  get: (): boolean | undefined => {
    if (checkboxGroup && Array.isArray(checkboxGroup.value.value) && undefined !== value.value) {
      return checkboxGroup.value.value.includes(value.value);
    }
    if (typeof props.checked === "boolean") {
      return props.checked;
    }
  },
  set: (val: boolean | undefined): void => {
    if (typeof val === "boolean") {
      emits("update:checked", val);
    }
  },
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [];
  if (isChecked.value) {
    classList.push("t-checkbox--checked");
  }
  if (props.indeterminate) {
    classList.push("t-checkbox--indeterminate");
  }
  if (disabled.value) {
    classList.push("t-checkbox--disabled");
  }
  return classList;
});

/**
 * @description: 验证值类型
 * @author: Quarter
 * @param {CheckboxValue} val 值
 * @return {boolean}
 */
const validateValueType = (val: CheckboxValue | undefined): boolean => {
  return (typeof val === "string" || typeof val === "number" || typeof val === "boolean");
}

/**
 * @description: 处理选中状态变化
 * @author: Quarter
 * @return
 */
const handleChange = (e: Event): void => {
  if (selfControl.value) {
    emits("change", isChecked.value, value.value);
  } else {
    if (undefined !== value.value) {
      checkboxGroup?.handleCheckboxChange(value.value, !isChecked.value);
    }
  }
};

/**
 * @description: 处理选中状态变化
 * @author: Quarter
 * @return
 */
const handleClick = (e: MouseEvent): void => {
  if (selfControl.value) {
    const target = e.target as HTMLInputElement;
    isChecked.value = target.checked;
    checked.value = isChecked.value;
  }
};

/**
 * @description: 挂载前
 * @author: Quarter
 * @return
 */
onBeforeMount((): void => {
  selfControl.value = !(checkboxGroup && checkboxGroup.name === "TCheckboxGroup");
  if (typeof props.defaultChecked === "boolean") {
    isChecked.value = props.defaultChecked;
  }
  if (typeof checked.value === "boolean") {
    isChecked.value = checked.value;
  } else {
    checked.value = isChecked.value;
  }
});

/**
 * @description: 监听参数选中状态的变化
 * @author: Quarter
 * @return
 */
watch(checked, (val: boolean | undefined) => {
  if (typeof val === "boolean" && val !== isChecked.value) {
    isChecked.value = val;
  }
});
</script>

<template>
  <label class="t-checkbox" :class="classNameList">
    <input
      type="checkbox"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      :indeterminate="props.indeterminate"
      :value="value"
      @change="handleChange"
      @click="handleClick"
    />
    <span class="t-checkbox__input"></span>
    <span class="t-checkbox__label">
      <slot></slot>
    </span>
  </label>
</template>