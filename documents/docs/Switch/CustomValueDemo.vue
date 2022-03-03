<!--
 * @Author: Quarter
 * @Date: 2022-03-03 02:35:06
 * @LastEditTime: 2022-03-03 08:58:31
 * @LastEditors: Quarter
 * @Description: 开关值示例
 * @FilePath: /t-ui-kit/documents/docs/Switch/CustomValueDemo.vue
-->
<template>
  <div style="display: flex;align-items: center;">
    <t-switch v-model="value" :custom-value="['打开', '关闭']"></t-switch>
    <span style="margin-left: 16px;">{{ value }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import type { SwitchValue } from "packages/Switch";

export default Vue.extend({
  data() {
    return {
      value: "打开" as SwitchValue, // // 开关的值
    };
  },
});
</script>