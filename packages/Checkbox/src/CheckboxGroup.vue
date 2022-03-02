<!--
 * @Author: Quarter
 * @Date: 2022-02-25 05:31:14
 * @LastEditTime: 2022-03-02 08:55:12
 * @LastEditors: Quarter
 * @Description: 复选按钮组
 * @FilePath: /t-ui-kit/packages/Checkbox/src/CheckboxGroup.vue
-->
<script lang="ts" setup>
import "packages/Style";

import { computed, onBeforeMount, PropType, provide, ref, watch } from "vue";
import { isArrayEqual } from "packages/Global";

import type { CheckboxGroupProvider, CheckboxValue } from "./type";

const props = defineProps({
  modelValue: { // 选中值
    type: Array as PropType<CheckboxValue[] | undefined>,
    default: undefined,
  },
  defaultValue: { // 默认值
    type: Array as PropType<CheckboxValue[] | undefined>,
    default: undefined,
  },
  name: String, // 名称
  disabled: Boolean, // 禁用
});
const emits = defineEmits(["update:modelValue", "change"]);

// 选中的值
const checkedValue = ref<CheckboxValue[]>([]);

/**
 * @description: 选中的值
 * @author: Quarter
 * @return {CheckboxValue}
 */
const modelValue = computed<CheckboxValue[] | undefined>({
  get: (): CheckboxValue[] | undefined => {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.filter((val: CheckboxValue) => validateValueType(val));
    }
  },
  set: (val: CheckboxValue[] | undefined): void => {
    if (Array.isArray(val)) {
      emits("update:modelValue", val);
    }
  },
});

/**
 * @description: 挂载前
 * @author: Quarter
 * @return
 */
onBeforeMount((): void => {
  if (Array.isArray(props.defaultValue)) {
    checkedValue.value = props.defaultValue.filter((val: CheckboxValue) => validateValueType(val));
  }
  if (Array.isArray(modelValue.value)) {
    checkedValue.value = modelValue.value;
  } else {
    modelValue.value = checkedValue.value;
  }
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
 * @description: 处理选项变化
 * @author: Quarter
 * @return
 */
const handleCheckboxChange = (val: CheckboxValue, checked: boolean = true): void => {
  if (validateValueType(val)) {
    if (checkedValue.value.includes(val)) {
      if (!checked) {
        checkedValue.value.splice(checkedValue.value.indexOf(val), 1);
        emits("change", checkedValue.value, val, !!checked);
      }
    } else if (checked) {
      checkedValue.value.push(val);
      modelValue.value = checkedValue.value;
      emits("change", checkedValue.value, val, !!checked);
    }
  }
};

/**
 * @description: 监听入参选中值的变化
 * @author: Quarter
 * @return
 */
watch(modelValue, (val: CheckboxValue[] | undefined) => {
  if (Array.isArray(val)) {
    if (!isArrayEqual(val, [...checkedValue.value])) {
      checkedValue.value = val;
    }
  } else {
    if (checkedValue.value.length !== 0) {
      checkedValue.value = [];
    }
  }
});

provide<CheckboxGroupProvider>("tCheckboxGroup", {
  name: "TCheckboxGroup",
  props,
  value: checkedValue,
  handleCheckboxChange,
});
</script>

<template>
  <div class="t-radio-group">
    <slot></slot>
  </div>
</template>