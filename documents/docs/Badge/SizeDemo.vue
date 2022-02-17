<!--
 * @Author: Quarter
 * @Date: 2022-02-17 11:01:14
 * @LastEditTime: 2022-02-17 11:33:56
 * @LastEditors: Quarter
 * @Description: 徽标尺寸示例
 * @FilePath: /t-ui-kit/documents/docs/Badge/SizeDemo.vue
-->
<template>
  <t-badge count="99" size="small">
    <div class="badge-block"></div>
  </t-badge>
  <t-badge count="99" size="medium" style="margin-left: 40px">
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