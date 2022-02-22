<!--
 * @Author: Quarter
 * @Date: 2022-01-12 06:08:07
 * @LastEditTime: 2022-02-21 08:45:54
 * @LastEditors: Quarter
 * @Description: 警告提醒主题示例
 * @FilePath: /t-ui-kit/documents/docs/Alert/OperationDemo.vue
-->
<script lang="ts" setup>
import { inject } from "vue";
import { MessageFunc } from "packages/Message";

// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 处理操作
 * @author: Quarter
 * @return
 */
const handleOperation = (): void => {
  $message?.info("这是点击操作后触发的方法");
};
</script>

<template>
  <t-alert theme="info" icon="info-circle-filled"
    >这是一条普通的消息提示<template #operation
      ><span @click="handleOperation">相关操作</span></template
    ></t-alert
  >
  <t-alert theme="info" icon="info-circle-filled">
    <span>1. 小程序云服务器有奖内测中，即刻成为产品体验官</span>
    <span
      >2. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择!</span
    >
    <template #operation
      ><span @click="handleOperation">相关操作</span></template
    >
  </t-alert>
  <t-alert theme="info" icon="info-circle-filled" title="这是一条普通的消息提示"
    >1、申请开票后，电子发票在1～3个工作日内开具；增值税专用发票（纸质）如资质审核通过，将在电子发票开具后10个工作日内为您寄出；<template
      #operation
      ><span @click="handleOperation">相关操作</span></template
    ></t-alert
  >
  <t-alert theme="info" icon="info-circle-filled" :max-line="2">
    <span>1. 小程序云服务器有奖内测中，即刻成为产品体验官</span>
    <span
      >2. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择!</span
    >
    <span>3. 小程序云服务器有奖内测中，即刻成为产品体验官</span>
    <span
      >4. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择!</span
    >
    <span>5. 小程序云服务器有奖内测中，即刻成为产品体验官</span>
    <span
      >6. 云服务器限时秒杀，首购1C1G仅需99元/年， 还有多款配置供您选择!</span
    >
    <template #operation
      ><span @click="handleOperation">相关操作</span></template
    >
  </t-alert>
</template>