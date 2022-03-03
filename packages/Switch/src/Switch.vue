<!--
 * @Author: Quarter
 * @Date: 2022-03-03 02:44:57
 * @LastEditTime: 2022-03-03 10:40:31
 * @LastEditors: Quarter
 * @Description: 开关组件
 * @FilePath: /t-ui-kit/packages/Switch/src/Switch.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/switch.scss";

import { computed, PropType, ref, useSlots, watch } from "vue";

import type { SwitchSize, SwitchValue } from "./type";

const props = defineProps({
  modelValue: { // 值
    type: [String, Number, Boolean] as PropType<SwitchValue | undefined>,
    default: undefined,
  },
  customValue: { // 自定义值
    type: Array as PropType<SwitchValue[] | undefined>,
    default: undefined,
  },
  label: { // 自定义文本
    type: Array as PropType<string[] | undefined>,
    default: undefined,
  },
  loading: { // 是否正在加载中
    type: Boolean,
    default: false,
  },
  size: { // 开关尺寸
    type: String as PropType<SwitchSize>,
    default: "medium",
  },
  disabled: { // 是否禁用
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["update:modelValue", "change"]);

// 是否选中
const isActive = ref<boolean>(false);

/**
 * @description: 值
 * @author: Quarter
 * @return {SwitchValue}
 */
const modelValue = computed<SwitchValue | undefined>({
  get: (): SwitchValue | undefined => {
    if (verifyValueType(props.modelValue)) {
      return props.modelValue as SwitchValue;
    }
  },
  set: (val: SwitchValue | undefined) => {
    if (verifyValueType(val)) {
      emits("update:modelValue", val);
    }
  }
});

/**
 * @description: 激活的值
 * @author: Quarter
 * @return {SwitchValue}
 */
const activeValue = computed<SwitchValue>(() => {
  if (Array.isArray(props.customValue) && verifyValueType(props.customValue[0])) {
    return props.customValue[0];
  }
  return true;
});

/**
 * @description: 未激活的值
 * @author: Quarter
 * @return {SwitchValue}
 */
const inactiveValue = computed<SwitchValue>(() => {
  if (Array.isArray(props.customValue) && verifyValueType(props.customValue[1])) {
    return props.customValue[1];
  }
  return false;
});

/**
 * @description: 开关尺寸
 * @author: Quarter
 * @return {SwitchSize}
 */
const size = computed<SwitchSize>(() => {
  const sizeList: SwitchSize[] = ["small", "medium", "large"];
  if (sizeList.includes(props.size)) {
    return props.size;
  }
  return "medium";
});

/**
 * @description: 是否禁用
 * @author: Quarter
 * @return {SwitchSize}
 */
const disabled = computed<boolean>(() => {
  if (props.loading) {
    return true;
  }
  if (props.disabled) {
    return true;
  }
  return false;
});

/**
 * @description: 激活时的文本信息
 * @author: Quarter
 * @return {string}
 */
const activeLabel = computed<string | undefined>(() => {
  if (Array.isArray(props.label) && typeof props.label[0] === "string") {
    return props.label[0];
  }
});

/**
 * @description: 未激活时的文本信息
 * @author: Quarter
 * @return {string}
 */
const inactiveLabel = computed<string | undefined>(() => {
  if (Array.isArray(props.label) && typeof props.label[1] === "string") {
    return props.label[1];
  }
});

/**
 * @description: 是否有文案插槽
 * @author: Quarter
 * @return {boolean}
 */
const hasLabelSlot = computed<boolean>(() => {
  const slots = useSlots();
  if (slots.label) {
    return true;
  }
  return false;
});

/**
 * @description: 是否有文本
 * @author: Quarter
 * @return {boolean}
 */
const hasLabel = computed<boolean>(() => {
  if (hasLabelSlot.value) {
    return true;
  }
  if (undefined !== activeLabel.value || undefined !== inactiveLabel.value) {
    return true;
  }
  return false;
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList: string[] = [
    `t-switch--${size.value}`,
  ];
  if (isActive.value) {
    classList.push("t-switch--active");
  }
  if (props.loading) {
    classList.push("t-switch--loading");
  }
  if (disabled.value) {
    classList.push("t-switch--disabled");
  }
  return classList;
});

/**
 * @description: 验证数据类型
 * @author: Quarter
 * @param {SwitchValue} val 值
 * @return {boolean}
 */
const verifyValueType = (val: SwitchValue | undefined): boolean => {
  if (typeof val === "string" || typeof val === "number" || typeof val === "boolean") {
    return true;
  }
  return false;
};

/**
 * @description: 处理点击事件
 * @author: Quarter
 * @return
 */
const handleClick = (): void => {
  if (disabled.value) return;
  isActive.value = !isActive.value;
  modelValue.value = isActive.value ? activeValue.value : inactiveValue.value;
  emits("change", isActive.value ? activeValue.value : inactiveValue.value);
};

/**
 * @description: 监听值变化
 * @author: Quarter
 * @param {SwitchValue} val 值
 * @return
 */
watch(
  modelValue,
  (val: SwitchValue | undefined): void => {
    if (undefined !== val && activeValue.value === val) {
      isActive.value = true;
    } else {
      isActive.value = false;
    }
  },
  {
    immediate: true,
  },
);

/**
 * @description: 监听选中值的变化
 * @author: Quarter
 * @param {SwitchValue} val 值
 * @return
 */
watch(
  activeValue,
  (val: SwitchValue): void => {
    if (true === isActive.value) {
      modelValue.value = val;
    }
  },
  {
    immediate: true,
  },
);

/**
 * @description: 监听未选中值的变化
 * @author: Quarter
 * @param {SwitchValue} val 值
 * @return
 */
watch(
  inactiveValue,
  (val: SwitchValue): void => {
    if (false === isActive.value) {
      modelValue.value = val;
    }
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <div class="t-switch" :class="classNameList" @click="handleClick">
    <!-- 文本 -->
    <div v-if="hasLabel" class="t-switch__label">
      <span>
        <slot name="label" :value="isActive">{{ isActive ? activeLabel : inactiveLabel }}</slot>
      </span>
    </div>
    <!-- 控制器 -->
    <div class="t-switch__handle"></div>
  </div>
</template>