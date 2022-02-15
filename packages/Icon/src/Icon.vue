<!--
 * @Author: Quarter
 * @Date: 2021-12-30 11:44:08
 * @LastEditTime: 2022-02-04 02:58:32
 * @LastEditors: Quarter
 * @Description: 图标组件
 * @FilePath: /t-ui-kit/packages/Icon/src/Icon.vue
-->
<template>
  <i class="t-icon" :class="classNameList" :icon="name"></i>
</template>

<script lang="ts">
import Vue from "vue";

import "packages/Style";
import "./style/icon.scss";

export default Vue.extend({
  name: "TIcon",
  props: {
    name: String, // 图标名称
  },
  computed: {
    classNameList(): string[] {
      const classList: string[] = new Array();
      if (typeof this.name === "string") {
        classList.push(`t-icon--${this.name}`);
      }
      return classList;
    }
  },
});
</script>