<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:28:09
 * @LastEditTime: 2022-02-13 10:30:40
 * @LastEditors: Quarter
 * @Description: 消息通知说明文档
 * @FilePath: /t-ui-kit/documents/docs/Notification/README.md
-->
<script setup>
import { ComponentDemo } from "documents/components";

exposeComponent("ComponentDemo");
</script>

# 消息通知 Notification

> 轻量级的全局消息提示和确认机制，出现和消失时需要有缓动动画。

## 属性 Props

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Notification/TitleDemo.vue"></component-demo>

### 内容 - content <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Notification/ContentDemo.vue"></component-demo>

### 图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Notification/IconDemo.vue"></component-demo>

### 关闭按钮 - close-btn <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Notification/CloseBtnDemo.vue"></component-demo>

### 主题 - theme <t-tag theme="primary" variant="light">NotificationTheme</t-tag>

<component-demo url="/documents/docs/Notification/ThemeDemo.vue"></component-demo>

### 延时 - duration <t-tag theme="primary" variant="light">Number</t-tag>

<component-demo url="/documents/docs/Notification/DurationDemo.vue"></component-demo>

## 插槽

### 内容 - default <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Notification/DefaultSlotDemo.vue"></component-demo>

### 底部 - footer <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Notification/FooterSlotDemo.vue"></component-demo>

## 事件 Emits

### 关闭 - close

<component-demo url="/documents/docs/Notification/EmitCloseDemo.vue"></component-demo>

### 延时结束 - duration-end

<component-demo url="/documents/docs/Notification/EmitDurationEndDemo.vue"></component-demo>

## 函数 Function

### 常规用法 - $notify

<component-demo url="/documents/docs/Notification/FunctionDemo.vue"></component-demo>

### 快速主题

<component-demo url="/documents/docs/Notification/FuncThemeDemo.vue"></component-demo>

### 指定方位 - placement <t-tag theme="primary" variant="light">NotificationPlacement</t-tag>

<component-demo url="/documents/docs/Notification/FuncPlacementDemo.vue"></component-demo>

### 关闭 - close

<component-demo url="/documents/docs/Notification/FuncCloseDemo.vue"></component-demo>

### 清空 - clear

<component-demo url="/documents/docs/Notification/FuncClearDemo.vue"></component-demo>