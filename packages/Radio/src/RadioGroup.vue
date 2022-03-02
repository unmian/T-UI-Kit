<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:14
 * @LastEditTime: 2022-03-02 05:49:06
 * @LastEditors: Quarter
 * @Description: 单选按钮组
 * @FilePath: /t-ui-kit/packages/Radio/src/RadioGroup.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/radioGroup.scss";

import { computed, onBeforeMount, PropType, provide, ref, watch } from "vue";

import type { RadioGroupProvider, RadioGroupSize, RadioGroupVariant, RadioValue } from "./type";

const props = defineProps({
  modelValue: { // 选中值
    type: [String, Number, Boolean] as PropType<RadioValue | undefined>,
    default: undefined,
  },
  defaultValue: { // 默认值
    type: [String, Number, Boolean] as PropType<RadioValue | undefined>,
    default: undefined,
  },
  name: String, // 名称
  size: { // 单选框组尺寸
    type: String as PropType<RadioGroupSize>,
    default: "medium",
  },
  variant: { // 单选框组形式
    type: String as PropType<RadioGroupVariant>,
    default: "outline",
  },
  disabled: Boolean, // 禁用
});
const emits = defineEmits(["update:modelValue", "change"]);

// 是否单选按钮
const isRadioButton = ref<boolean>(false);
// 选中的值
const checkedValue = ref<RadioValue | undefined>(undefined);

/**
 * @description: 选中的值
 * @author: Quarter
 * @return {RadioValue}
 */
const modelValue = computed<RadioValue | undefined>({
  get: (): RadioValue | undefined => {
    if (validateValueType(props.modelValue)) {
      return props.modelValue;
    }
  },
  set: (val: RadioValue | undefined): void => {
    if (validateValueType(val)) {
      emits("update:modelValue", val);
    }
  },
});

/**
 * @description: 单选按钮组尺寸
 * @author: Quarter
 * @return {RadioGroupSize}
 */
const size = computed<RadioGroupSize>((): RadioGroupSize => {
  const sizeList: RadioGroupSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 单选按钮组形式
 * @author: Quarter
 * @return {RadioGroupVariant}
 */
const variant = computed<RadioGroupVariant>((): RadioGroupVariant => {
  const variantList: RadioGroupVariant[] = ["outline", "default-filled", "primary-filled"];
  if (variantList.includes(props.variant)) {
    return props.variant;
  }
  return "outline";
});


/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>((): string[] => {
  const classList: string[] = [
    `t-radio-group--${size.value}`,
    `t-radio-group--${variant.value}`,
  ];
  if (isRadioButton.value) {
    classList.push("t-radio-button-group");
  }
  return classList;
});

/**
 * @description: 挂载前
 * @author: Quarter
 * @return
 */
onBeforeMount((): void => {
  if (validateValueType(props.defaultValue)) {
    checkedValue.value = props.defaultValue;
  }
  if (validateValueType(modelValue.value)) {
    checkedValue.value = modelValue.value;
  }
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
 * @description: 处理选项变化
 * @author: Quarter
 * @return
 */
const handleRadioChange = (val: RadioValue): void => {
  if (validateValueType(val)) {
    checkedValue.value = val;
    emits("change", checkedValue.value);
  }
};

/**
 * @description: 监听选中值的变化
 * @author: Quarter
 * @return
 */
watch(checkedValue, (val: RadioValue | undefined) => {
  modelValue.value = val;
});

/**
 * @description: 监听入参选中值的变化
 * @author: Quarter
 * @return
 */
watch(modelValue, (val: RadioValue | undefined) => {
  if (validateValueType(val) && val !== checkedValue.value) {
    checkedValue.value = val;
  }
});

provide<RadioGroupProvider>("tRadioGroup", {
  name: "TRadioGroup",
  props,
  value: checkedValue,
  isRadioButton,
  handleRadioChange,
});
</script>

<template>
  <div class="t-radio-group" :class="classNameList">
    <slot></slot>
  </div>
</template>