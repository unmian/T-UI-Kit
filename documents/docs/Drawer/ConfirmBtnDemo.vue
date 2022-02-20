<!--
 * @Author: Quarter
 * @Date: 2022-02-18 08:30:55
 * @LastEditTime: 2022-02-20 06:38:13
 * @LastEditors: Quarter
 * @Description: 抽屉确定按钮文本示例
 * @FilePath: /t-ui-kit/documents/docs/Drawer/ConfirmBtnDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";

// 是否可见
const visible = ref<boolean>(false);
</script>

<template>
  <t-button theme="primary" @click="visible = true">打开抽屉</t-button>
  <t-drawer v-model:visible="visible" title="标题名称" cancel-btn="返回" confirm-btn="提交" footer></t-drawer>
</template>