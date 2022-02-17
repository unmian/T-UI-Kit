<!--
 * @Author: Quarter
 * @Date: 2022-02-17 11:00:36
 * @LastEditTime: 2022-02-17 11:47:03
 * @LastEditors: Quarter
 * @Description: 徽标数量示例
 * @FilePath: /t-ui-kit/documents/docs/Badge/CountDemo.vue
-->
<template>
  <div>
    <t-badge count="1">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge :count="100" style="margin-left: 40px">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="100" style="margin-left: 40px">
      <div class="badge-block"></div>
    </t-badge>
    <t-badge count="new" style="margin-left: 40px">
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