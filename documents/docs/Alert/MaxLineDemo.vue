<!--
 * @Author: Quarter
 * @Date: 2022-01-12 06:08:07
 * @LastEditTime: 2022-02-05 01:03:14
 * @LastEditors: Quarter
 * @Description: 警告提醒主题示例
 * @FilePath: /t-ui-kit/documents/docs/Alert/MaxLineDemo.vue
-->
<template>
  <t-alert
    theme="info"
    icon="info-circle-filled"
    title="这是一条普通的消息提示"
    closable
    close-btn="知道了"
    :max-line="2"
  >
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
  </t-alert>
</template>