<!--
 * @Author: Quarter
 * @Date: 2022-01-05 01:59:50
 * @LastEditTime: 2022-02-13 10:30:19
 * @LastEditors: Quarter
 * @Description: 全局提示
 * @FilePath: /t-ui-kit/documents/docs/Message/README.md
-->
<script setup>
import { ComponentDemo } from "documents/components";

exposeComponent("ComponentDemo");
</script>

# 全局提示 Message

> 对用户的操作作出轻量的全局反馈。

## 属性 Props

### 主题 - theme <t-tag theme="primary" variant="light">MessageTheme</t-tag>

<component-demo url="/documents/docs/Message/ThemeDemo.vue"></component-demo>

### 关闭按钮 - close-btn <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Message/CloseBtnDemo.vue"></component-demo>

### 延时 - duration <t-tag theme="primary" variant="light">Number</t-tag>

<component-demo url="/documents/docs/Message/DurationDemo.vue"></component-demo>

## 事件 Emits

### 关闭 - close

<component-demo url="/documents/docs/Message/EmitCloseDemo.vue"></component-demo>

### 延时结束 - duration-end

<component-demo url="/documents/docs/Message/EmitDurationEndDemo.vue"></component-demo>

## 函数 Function

### 常规用法 - $message <t-tag theme="primary" variant="light">MessageFunc</t-tag>

<component-demo url="/documents/docs/Message/FunctionDemo.vue"></component-demo>

### 快速主题

<component-demo url="/documents/docs/Message/FuncThemeDemo.vue"></component-demo>

### 指定方位 - placement <t-tag theme="primary" variant="light">MessagePlacement</t-tag>

<component-demo url="/documents/docs/Message/FuncPlacementDemo.vue"></component-demo>

### 关闭 - close <t-tag theme="primary" variant="light">Function</t-tag>

<component-demo url="/documents/docs/Message/FuncCloseDemo.vue"></component-demo>

### 清空 - clear <t-tag theme="primary" variant="light">Function</t-tag>

<component-demo url="/documents/docs/Message/FuncClearDemo.vue"></component-demo>