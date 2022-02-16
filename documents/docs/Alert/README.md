<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:13:00
 * @LastEditTime: 2022-02-15 12:29:26
 * @LastEditors: Quarter
 * @Description: 警告提醒说明文档
 * @FilePath: /t-ui-kit/documents/docs/Alert/README.md
-->
<script setup>
import { /* defineComponent */ ComponentDemo } from "documents/components";
</script>

# 警告提醒 Alert

> 警告条用于承载需要用户注意的信息。

## 属性 Props

### 主题 - theme <t-tag theme="primary" variant="light">AlertTheme</t-tag>

<component-demo url="/documents/docs/Alert/ThemeDemo.vue"></component-demo>

### 图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Alert/IconDemo.vue"></component-demo>

### 可关闭 - closable <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Alert/ClosableDemo.vue"></component-demo>

### 关闭按钮文本 - close-btn <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Alert/CloseBtnDemo.vue"></component-demo>

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Alert/TitleDemo.vue"></component-demo>

### 最大行数 - max-line <t-tag theme="primary" variant="light">Number</t-tag>

<component-demo url="/documents/docs/Alert/MaxLineDemo.vue"></component-demo>

## 插槽 Slots

### 操作 - operation <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Alert/OperationDemo.vue"></component-demo>

## 事件 Emits

### 关闭 - close

<component-demo url="/documents/docs/Alert/CloseDemo.vue"></component-demo>