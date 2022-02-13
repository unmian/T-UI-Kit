<!--
 * @Author: Quarter
 * @Date: 2022-01-24 11:39:18
 * @LastEditTime: 2022-02-13 02:08:01
 * @LastEditors: Quarter
 * @Description: 通知标题示例
 * @FilePath: /t-ui-kit/documents/docs/Notification/ThemeDemo.vue
-->
<template>
  <t-notification
    icon="info-circle-filled"
    theme="info"
    title="普通通知"
    content="这是一条消息通知"
  ></t-notification>
  <t-notification
    icon="check-circle-filled"
    theme="success"
    title="成功通知"
    content="这是一条消息通知"
  ></t-notification>
  <t-notification
    icon="error-circle-filled"
    theme="warning"
    title="警告通知"
    content="这是一条消息通知"
  ></t-notification>
  <t-notification
    icon="error-circle-filled"
    theme="danger"
    title="危险通知"
    content="这是一条消息通知"
  ></t-notification>
</template>