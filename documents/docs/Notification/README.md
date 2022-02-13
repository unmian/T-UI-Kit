<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:28:09
 * @LastEditTime: 2022-02-13 00:56:55
 * @LastEditors: Quarter
 * @Description: 消息通知说明文档
 * @FilePath: /t-ui-kit/documents/docs/Notification/README.md
-->
<script setup>
import { CodePreview } from "documents/components";
</script>


# 消息通知 Notification

> 轻量级的全局消息提示和确认机制，出现和消失时需要有缓动动画。

## 属性 Props

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Notification/TitleDemo.vue"></CodePreview>

### 内容 - content <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Notification/ContentDemo.vue"></CodePreview>

### 图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Notification/IconDemo.vue"></CodePreview>

### 关闭按钮 - close-btn <t-tag theme="primary" variant="light">Boolean</t-tag>

<CodePreview url="/documents/docs/Notification/CloseBtnDemo.vue"></CodePreview>

### 主题 - theme <t-tag theme="primary" variant="light">NotificationTheme</t-tag>

<CodePreview url="/documents/docs/Notification/ThemeDemo.vue"></CodePreview>

### 延时 - duration <t-tag theme="primary" variant="light">Number</t-tag>

<CodePreview url="/documents/docs/Notification/DurationDemo.vue"></CodePreview>

## 插槽

### 内容 - default <t-tag theme="primary" variant="light">Slot</t-tag>

<CodePreview url="/documents/docs/Notification/DefaultSlotDemo.vue"></CodePreview>

### 底部 - footer <t-tag theme="primary" variant="light">Slot</t-tag>

<CodePreview url="/documents/docs/Notification/FooterSlotDemo.vue"></CodePreview>

## 事件 Emits

### 关闭 - close

<CodePreview url="/documents/docs/Notification/EmitCloseDemo.vue"></CodePreview>

### 延时结束 - duration-end

<CodePreview url="/documents/docs/Notification/EmitDurationEndDemo.vue"></CodePreview>

## 函数 Function

### 常规用法 - $notify

<CodePreview url="/documents/docs/Notification/FunctionDemo.vue"></CodePreview>

### 快速主题

<CodePreview url="/documents/docs/Notification/FuncThemeDemo.vue"></CodePreview>

### 指定方位 - placement <t-tag theme="primary" variant="light">NotificationPlacement</t-tag>

<CodePreview url="/documents/docs/Notification/FuncPlacementDemo.vue"></CodePreview>

### 关闭 - close

<CodePreview url="/documents/docs/Notification/FuncCloseDemo.vue"></CodePreview>

### 清空 - clear

<CodePreview url="/documents/docs/Notification/FuncClearDemo.vue"></CodePreview>