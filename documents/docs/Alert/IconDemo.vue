<!--
 * @Author: Quarter
 * @Date: 2022-01-12 06:08:07
 * @LastEditTime: 2022-02-13 09:34:27
 * @LastEditors: Quarter
 * @Description: 警告提醒主题示例
 * @FilePath: /t-ui-kit/documents/docs/Alert/IconDemo.vue
-->
<template>
  <div>
    <t-alert theme="info" icon="info-circle-filled">这是一条普通的消息提示</t-alert>
    <t-alert theme="success" icon="check-circle-filled">这是一条成功的消息提示</t-alert>
    <t-alert theme="warning" icon="error-circle-filled">这是一条警示的消息提示</t-alert>
    <t-alert theme="danger" icon="error-circle-filled">高危操作/出错信息提示</t-alert>
  </div>
</template>