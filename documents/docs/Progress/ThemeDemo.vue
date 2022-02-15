<!--
 * @Author: Quarter
 * @Date: 2022-01-11 10:59:46
 * @LastEditTime: 2022-02-14 05:34:49
 * @LastEditors: Quarter
 * @Description: 进度条进度示例
 * @FilePath: /t-ui-kit/documents/docs/Progress/ThemeDemo.vue
-->
<script lang="ts" setup>
</script>

<template>
  <div>
    <h4>线形进度条</h4>
    <t-progress :percentage="60" theme="line"></t-progress>
    <h4>粗线形进度条</h4>
    <t-progress :percentage="60" theme="plump"></t-progress>
    <h4>环形进度条</h4>
    <t-progress :percentage="60" theme="circle"></t-progress>
  </div>
</template>