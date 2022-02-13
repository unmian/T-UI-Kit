<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:13
 * @LastEditTime: 2022-01-10 09:52:30
 * @LastEditors: Quarter
 * @Description: 函数调用快速主题示例
 * @FilePath: /t-ui-kit/packages/Message/docs/FuncThemeDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { MessageFunc } from "../src/type";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

/**
 * @description: 创建消息类提示
 * @author: Quarter
 * @return
 */
const createInfoMessage = () => {
  $message?.info("用于表示普通操作信息提示");
};

/**
 * @description: 创建成功类提示
 * @author: Quarter
 * @return
 */
const createSuccessMessage = () => {
  $message?.success("用于表示操作顺利达成");
};

/**
 * @description: 创建警告类提示
 * @author: Quarter
 * @return
 */
const createWarningMessage = () => {
  $message?.warning("用于表示操作引起一定后果");
};

/**
 * @description: 创建危险类提示
 * @author: Quarter
 * @return
 */
const createDangerMessage = () => {
  $message?.danger("用于表示操作引起严重的后果");
};

/**
 * @description: 创建帮助类提示
 * @author: Quarter
 * @return
 */
const createHelpMessage = () => {
  $message?.question("用于帮助用户操作的信息提示");
};

/**
 * @description: 创建加载类提示
 * @author: Quarter
 * @return
 */
const createLoadingMessage = () => {
  $message?.loading("用于表示操作正在生效的过程中");
};
</script>

<template>
  <t-button theme="primary" @click="createInfoMessage">提示主题</t-button>
  <t-button theme="success" @click="createSuccessMessage">成功主题</t-button>
  <t-button theme="warning" @click="createWarningMessage">警告主题</t-button>
  <t-button theme="danger" @click="createDangerMessage">危险主题</t-button>
  <t-button variant="outline" theme="primary" @click="createHelpMessage"
    >帮助主题</t-button
  >
  <t-button variant="outline" @click="createLoadingMessage">加载主题</t-button>
</template>