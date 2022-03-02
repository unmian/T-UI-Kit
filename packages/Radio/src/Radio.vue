<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:30:54
 * @LastEditTime: 2022-03-01 11:42:47
 * @LastEditors: Quarter
 * @Description: 单选框
 * @FilePath: /t-ui-kit/packages/Radio/src/Radio.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/radio.scss";

import { computed, inject, onBeforeMount, PropType, ref, watch } from "vue";

import type { RadioGroupProvider, RadioValue } from "./type";

const props = defineProps({
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
  value: [String, Number, Boolean] as PropType<RadioValue | undefined>, // 单选框的值
});
const emits = defineEmits(["update:checked", "change"]);

// 单选框组供应
const radioGroup = inject<RadioGroupProvider | undefined>("tRadioGroup", undefined);
// 是否可以自我控制
const selfControl = ref<boolean>(true);

// 是否选中
const isChecked = ref<boolean>(false);

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
    if (radioGroup?.props.disabled) {
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
    if (radioGroup && validateValueType(radioGroup.value.value) && undefined !== value.value) {
      return radioGroup.value.value === value.value;
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
    classList.push("t-radio--checked");
  }
  if (disabled.value) {
    classList.push("t-radio--disabled");
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
  if (selfControl.value) {
    emits("change", isChecked.value, value.value);
  } else {
    if (undefined !== value.value) {
      radioGroup?.handleRadioChange(value.value);
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
  }
};

/**
 * @description: 挂载前
 * @author: Quarter
 * @return
 */
onBeforeMount((): void => {
  selfControl.value = !(radioGroup && radioGroup.name === "TRadioGroup");
  if (typeof props.defaultChecked === "boolean") {
    isChecked.value = props.defaultChecked;
  }
  if (typeof checked.value === "boolean") {
    isChecked.value = checked.value;
  }
});

/**
 * @description: 监听选中状态的变化
 * @author: Quarter
 * @return
 */
watch(isChecked, (val: boolean) => {
  checked.value = val;
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
  <label class="t-radio" :class="classNameList">
    <input
      type="radio"
      :name="name"
      :checked="isChecked"
      :disabled="disabled"
      :value="value"
      @change="handleChange"
      @click="handleClick"
    />
    <span class="t-radio__input"></span>
    <span class="t-radio__label">
      <slot></slot>
    </span>
  </label>
</template>