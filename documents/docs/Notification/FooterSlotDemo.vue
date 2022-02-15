<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-02-13 10:01:53
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/FooterSlotDemo.vue
-->
<template>
  <t-notification icon="info-circle-filled" title="普通通知">
    <template #default>这是一条消息通知</template>
    <template #footer>
      <t-button variant="text">取消</t-button>
      <t-button variant="text" theme="primary">确认删除</t-button>
    </template>
  </t-notification>
</template>