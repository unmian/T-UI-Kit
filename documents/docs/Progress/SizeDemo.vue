<!--
 * @Author: Quarter
 * @Date: 2022-01-11 10:58:17
 * @LastEditTime: 2022-02-13 02:08:26
 * @LastEditors: Quarter
 * @Description: 进度条尺寸示例
 * @FilePath: /t-ui-kit/documents/docs/Progress/SizeDemo.vue
-->
<template>
  <h4>线形进度条</h4>
  <div>
    <t-progress :percentage="20" size="small"></t-progress>
    <t-progress
      :percentage="40"
      size="medium"
      style="margin-top: 20px"
    ></t-progress>
    <t-progress
      :percentage="60"
      size="large"
      style="margin-top: 20px"
    ></t-progress>
  </div>
  <h4>粗线形进度条</h4>
  <div>
    <t-progress :percentage="20" theme="plump" size="small"></t-progress>
    <t-progress
      :percentage="10"
      theme="plump"
      size="medium"
      style="margin-top: 20px"
    ></t-progress>
    <t-progress
      :percentage="60"
      theme="plump"
      size="large"
      style="margin-top: 20px"
    ></t-progress>
  </div>
  <h4>环形进度条</h4>
  <div style="display: flex">
    <t-progress :percentage="20" theme="circle" size="small"></t-progress>
    <t-progress
      :percentage="40"
      theme="circle"
      size="medium"
      style="margin-left: 30px"
    ></t-progress>
    <t-progress
      :percentage="60"
      theme="circle"
      size="large"
      style="margin-left: 30px"
    ></t-progress>
  </div>
</template>