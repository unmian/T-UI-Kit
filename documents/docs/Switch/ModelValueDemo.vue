<!--
 * @Author: Quarter
 * @Date: 2022-03-03 02:35:06
 * @LastEditTime: 2022-03-03 05:25:00
 * @LastEditors: Quarter
 * @Description: 开关值示例
 * @FilePath: /t-ui-kit/documents/docs/Switch/ModelValueDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

import type { SwitchValue } from "packages/Switch";

// 开关的值
const modelValue = ref<SwitchValue>(false);
</script>

<template>
  <div style="display: flex;align-items: center;">
    <t-switch v-model="modelValue"></t-switch>
    <span style="margin-left: 16px;">{{ modelValue ? "打开" : "关闭" }}</span>
  </div>
</template>