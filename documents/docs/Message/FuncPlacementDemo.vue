<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:57
 * @LastEditTime: 2022-01-12 05:35:54
 * @LastEditors: Quarter
 * @Description: 函数调用指定消息位置示例
 * @FilePath: /t-ui-kit/packages/Message/docs/FuncPlacementDemo.vue
-->
<script lang="ts" setup>
import { inject } from "@vue/runtime-core";
import { ref } from "vue";
import { MessageFunc } from "../src/type";

// 全局提示函数
const $message = inject<MessageFunc>("$message");

/**
 * @description: 创建左上方的全局提示
 * @author: Quarter
 * @return
 */
const createLeftTopMessage = () => {
  $message?.info("用于表示普通操作信息提示 ", {
    placement: "top-left",
  });
};

/**
 * @description: 创建左侧的全局提示
 * @author: Quarter
 * @return
 */
const createLeftMessage = () => {
  $message?.info("用于表示普通操作信息提示 ", {
    placement: "left",
  });
};

/**
 * @description: 创建左下方的全局提示
 * @author: Quarter
 * @return
 */
const createLeftBottomMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "bottom-left",
  });
};

/**
 * @description: 创建上方的全局提示
 * @author: Quarter
 * @return
 */
const createTopMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "top",
  });
};

/**
 * @description: 创建居中的全局提示
 * @author: Quarter
 * @return
 */
const createCenterMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "center",
  });
};

/**
 * @description: 创建下方的全局提示
 * @author: Quarter
 * @return
 */
const createBottomMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "bottom",
  });
};

/**
 * @description: 创建右上方的全局提示
 * @author: Quarter
 * @return
 */
const createRightTopMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "top-right",
  });
};

/**
 * @description: 创建右侧的全局提示
 * @author: Quarter
 * @return
 */
const createRightMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "right",
  });
};

/**
 * @description: 创建右下方的全局提示
 * @author: Quarter
 * @return
 */
const createRightBottomMessage = () => {
  $message?.info("用于表示普通操作信息提示", {
    placement: "bottom-right",
  });
};
</script>

<template>
  <div style="width: 320px; margin: 0 auto">
    <div style="display: flex; justify-content: space-between">
      <t-button variant="outline" @click="createLeftTopMessage"
        >左上方</t-button
      >
      <t-button variant="outline" @click="createTopMessage">上方</t-button>
      <t-button variant="outline" @click="createRightTopMessage"
        >右上方</t-button
      >
    </div>
    <div
      style="display: flex; justify-content: space-between; margin-top: 50px"
    >
      <t-button variant="outline" @click="createLeftMessage">左侧</t-button>
      <t-button variant="outline" @click="createCenterMessage">居中</t-button>
      <t-button variant="outline" @click="createRightMessage">右侧</t-button>
    </div>
    <div
      style="display: flex; justify-content: space-between; margin-top: 50px"
    >
      <t-button variant="outline" @click="createLeftBottomMessage"
        >左下方</t-button
      >
      <t-button variant="outline" @click="createBottomMessage">下方</t-button>
      <t-button variant="outline" @click="createRightBottomMessage"
        >右下方</t-button
      >
    </div>
  </div>
</template>