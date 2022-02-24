<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-23 07:00:50
 * @LastEditors: Quarter
 * @Description: 对话框主题示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/ThemeDemo.vue
-->
<script lang="ts" setup>
import { ref } from "vue";
import { DialogTheme } from "packages/Dialog";

// 是否可见
const visible = ref<boolean>(false);
// 主题
const theme = ref<DialogTheme>("default");

/**
 * @description: 打开弹窗
 * @author: Quarter
 * @param {DialogTheme} t 主题类型
 * @return
 */
const openDialog = (t: DialogTheme): void => {
  theme.value = t;
  visible.value = true; 
};
</script>

<template>
  <t-button theme="default" @click="openDialog('default')">默认主题</t-button>
  <t-button theme="primary" @click="openDialog('info')">信息主题</t-button>
  <t-button theme="warning" @click="openDialog('warning')">警告主题</t-button>
  <t-button theme="danger" @click="openDialog('danger')">危险主题</t-button>
  <t-button theme="success" @click="openDialog('success')">成功主题</t-button>
  <t-dialog
    v-model:visible="visible"
    width="480px"
    :theme="theme"
    title="我是主要信息"
    footer
  >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
</template>