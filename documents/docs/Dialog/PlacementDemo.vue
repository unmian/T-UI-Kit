<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-23 07:00:44
 * @LastEditors: Quarter
 * @Description: 对话框弹出位置示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/PlacementDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";
import { DialogPlacement } from "packages/Dialog";

// 是否可见
const visible = ref<boolean>(false);
// 弹出位置
const placement = ref<DialogPlacement>("top");

/**
 * @description: 打开弹窗
 * @author: Quarter
 * @param {DialogPlacement} p 弹出位置
 * @return
 */
const openDialog = (p: DialogPlacement): void => {
  placement.value = p;
  visible.value = true;
};
</script>

<template>
  <t-button theme="primary" @click="openDialog('top')">上方弹出</t-button>
  <t-button theme="primary" @click="openDialog('center')">居中弹出</t-button>
  <t-dialog
    v-model:visible="visible"
    width="480px"
    theme="info"
    title="我是主要信息"
    :placement="placement"
    footer
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>