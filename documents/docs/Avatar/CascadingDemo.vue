<!--
 * @Author: Quarter
 * @Date: 2022-02-17 03:22:43
 * @LastEditTime: 2022-02-17 08:34:34
 * @LastEditors: Quarter
 * @Description: 头像组叠放顺序示例
 * @FilePath: /t-ui-kit/documents/docs/Avatar/CascadingDemo.vue
-->
<template>
  <div>
    <div>
      <t-avatar-group cascading="left-up">
        <t-avatar alt="王"></t-avatar>
        <t-avatar alt="李"></t-avatar>
        <t-avatar alt="赵"></t-avatar>
        <t-avatar alt="钱"></t-avatar>
      </t-avatar-group>
    </div>
    <div style="margin-top: 24px">
      <t-avatar-group cascading="right-up">
        <t-avatar alt="王"></t-avatar>
        <t-avatar alt="李"></t-avatar>
        <t-avatar alt="赵"></t-avatar>
        <t-avatar alt="钱"></t-avatar>
      </t-avatar-group>
    </div>
  </div>
</template>