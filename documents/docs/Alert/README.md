<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:13:00
 * @LastEditTime: 2022-01-12 08:50:27
 * @LastEditors: Quarter
 * @Description: 警告提醒说明文档
 * @FilePath: /t-ui-kit/packages/docs/Alert/README.md
-->
<script setup>
import { CodePreview } from "documents/components";
</script>

# 警告提醒 Alert

> 警告条用于承载需要用户注意的信息。

## 属性 Props

### 主题 - theme <t-tag theme="primary" variant="light">AlertTheme</t-tag>

<CodePreview url="/documents/docs/Alert/ThemeDemo.vue"></CodePreview>

### 图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Alert/IconDemo.vue"></CodePreview>

### 可关闭 - closable <t-tag theme="primary" variant="light">Boolean</t-tag>

<CodePreview url="/documents/docs/Alert/ClosableDemo.vue"></CodePreview>

### 关闭按钮文本 - close-btn <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Alert/CloseBtnDemo.vue"></CodePreview>

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<CodePreview url="/documents/docs/Alert/TitleDemo.vue"></CodePreview>

### 最大行数 - max-line <t-tag theme="primary" variant="light">Number</t-tag>

<CodePreview url="/documents/docs/Alert/MaxLineDemo.vue"></CodePreview>

## 插槽 Slots

### 操作 - operation <t-tag theme="primary" variant="light">Slot</t-tag>

<CodePreview url="/documents/docs/Alert/OperationDemo.vue"></CodePreview>

## 事件 Emits

### 关闭 - close

<CodePreview url="/documents/docs/Alert/CloseDemo.vue"></CodePreview>