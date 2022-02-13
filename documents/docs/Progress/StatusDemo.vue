<!--
 * @Author: Quarter
 * @Date: 2022-01-11 10:59:46
 * @LastEditTime: 2022-02-13 02:08:36
 * @LastEditors: Quarter
 * @Description: 进度条进度示例
 * @FilePath: /t-ui-kit/documents/docs/Progress/StatusDemo.vue
-->
<template>
<h4>线形进度条</h4>
  <div>
    <t-progress :percentage="100" status="success"></t-progress>
    <t-progress
      :percentage="60"
      status="warning"
      style="margin-top: 20px"
    ></t-progress>
    <t-progress
      :percentage="60"
      status="danger"
      style="margin-top: 20px"
    ></t-progress>
  </div>
  <h4>粗线形进度条</h4>
  <div>
    <t-progress :percentage="100" theme="plump" status="success"></t-progress>
    <t-progress
      :percentage="60"
      theme="plump"
      status="warning"
      style="margin-top: 20px"
    ></t-progress>
    <t-progress
      :percentage="60"
      theme="plump"
      status="danger"
      style="margin-top: 20px"
    ></t-progress>
  </div>
  <h4>环形进度条</h4>
  <div style="display: flex">
    <t-progress :percentage="100" theme="circle" status="success"></t-progress>
    <t-progress
      :percentage="60"
      theme="circle"
      status="warning"
      style="margin-left: 30px"
    ></t-progress>
    <t-progress
      :percentage="60"
      theme="circle"
      status="danger"
      style="margin-left: 30px"
    ></t-progress>
  </div>
</template>