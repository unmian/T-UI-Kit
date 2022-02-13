<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:08
 * @LastEditTime: 2022-01-10 10:47:41
 * @LastEditors: Quarter
 * @Description: 函数调用关闭指定消息示例
 * @FilePath: /t-ui-kit/packages/Message/docs/FuncCloseDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { ref } from "vue";
import { MessageFunc } from "../src/type";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

// 消息索引
const index = ref<number | null>(null);

/**
 * @description: 切换消息提示
 * @author: Quarter
 * @return
 */
const switchMessage = () => {
  if (typeof index.value === "number") {
    $message?.close(index.value);
    index.value = null;
  } else {
    if ($message) {
      index.value = $message.info(
        "用于表示普通操作信息提示，可关闭，通常信息较长",
        {
          duration: 0,
        }
      );
    }
  }
};
</script>

<template>
  <div>
    <t-button theme="primary" @click="switchMessage">{{
      index ? "关闭消息提示" : "打开消息提示"
    }}</t-button>
  </div>
</template>