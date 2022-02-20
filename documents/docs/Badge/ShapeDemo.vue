<!--
 * @Author: Quarter
 * @Date: 2022-02-17 11:01:29
 * @LastEditTime: 2022-02-19 06:23:30
 * @LastEditors: Quarter
 * @Description: 徽标数形状示例
 * @FilePath: /t-ui-kit/documents/docs/Badge/ShapeDemo.vue
-->
<template>
  <t-badge count="99" shape="circle">
    <div class="badge-block"></div>
  </t-badge>
  <t-badge count="99" shape="round" style="margin-left: 40px">
    <div class="badge-block"></div>
  </t-badge>
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