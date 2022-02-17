<!--
 * @Author: Quarter
 * @Date: 2022-02-17 11:01:41
 * @LastEditTime: 2022-02-17 11:46:55
 * @LastEditors: Quarter
 * @Description: 徽标颜色示例
 * @FilePath: /t-ui-kit/documents/docs/Badge/ColorDemo.vue
-->
<template>
  <div>
    <t-badge count="99">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="99" color="#00a870" style="margin-left: 40px">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="99" color="#0052d9" style="margin-left: 40px">
      <div class="badge-block"></div>
    </t-badge>
  </div>
</template>

<style lang="scss">
.badge-block {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  background-color: #eeeeee;
  box-sizing: border-box;
}
</style>