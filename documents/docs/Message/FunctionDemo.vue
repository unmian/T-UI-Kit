<!--
 * @Author: Quarter
 * @Date: 2022-01-10 05:41:17
 * @LastEditTime: 2022-01-11 00:53:09
 * @LastEditors: Quarter
 * @Description: 全局提示函数式调用示例
 * @FilePath: /t-ui-kit/packages/Message/docs/FunctionDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { MessageFunc } from "packages";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

/**
 * @description: 创建提示
 * @author: Quarter
 * @return
 */
const createMessage = () => {
  if ($message) {
    $message({
      text: "打开了一个新的全局消息",
      duration: 2000,
      onClose: () => {
        $message({
          text: "这是全局提示关闭的回调",
        });
      },
    });
  }
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="createMessage">函数调用方式</t-button>
  </div>
</template>