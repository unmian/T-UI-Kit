<!--
 * @Author: Quarter
 * @Date: 2022-01-05 01:59:50
 * @LastEditTime: 2022-02-13 00:56:41
 * @LastEditors: Quarter
 * @Description: 全局提示
 * @FilePath: /t-ui-kit/documents/docs/Message/README.md
-->
<script setup>
import { CodePreview } from "documents/components";
</script>

# 全局提示 Message

> 对用户的操作作出轻量的全局反馈。

## 属性 Props

### 主题 - theme <t-tag theme="primary" variant="light">MessageTheme</t-tag>

<CodePreview url="/documents/docs/Message/ThemeDemo.vue"></CodePreview>

### 关闭按钮 - close-btn <t-tag theme="primary" variant="light">Boolean</t-tag>

<CodePreview url="/documents/docs/Message/CloseBtnDemo.vue"></CodePreview>

### 延时 - duration <t-tag theme="primary" variant="light">Number</t-tag>

<CodePreview url="/documents/docs/Message/DurationDemo.vue"></CodePreview>

## 事件 Emits

### 关闭 - close

<CodePreview url="/documents/docs/Message/EmitCloseDemo.vue"></CodePreview>

### 延时结束 - duration-end

<CodePreview url="/documents/docs/Message/EmitDurationEndDemo.vue"></CodePreview>

## 函数 Function

### 常规用法 - $message <t-tag theme="primary" variant="light">MessageFunc</t-tag>

<CodePreview url="/documents/docs/Message/FunctionDemo.vue"></CodePreview>

### 快速主题

<CodePreview url="/documents/docs/Message/FuncThemeDemo.vue"></CodePreview>

### 指定方位 - placement <t-tag theme="primary" variant="light">MessagePlacement</t-tag>

<CodePreview url="/documents/docs/Message/FuncPlacementDemo.vue"></CodePreview>

### 关闭 - close <t-tag theme="primary" variant="light">Function</t-tag>

<CodePreview url="/documents/docs/Message/FuncCloseDemo.vue"></CodePreview>

### 清空 - clear <t-tag theme="primary" variant="light">Function</t-tag>

<CodePreview url="/documents/docs/Message/FuncClearDemo.vue"></CodePreview>