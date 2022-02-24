<!--
 * @Author: Quarter
 * @Date: 2022-01-11 03:23:30
 * @LastEditTime: 2022-02-24 05:20:58
 * @LastEditors: Quarter
 * @Description: 对话框说明文档
 * @FilePath: /t-ui-kit/documents/docs/Dialog/README.md
-->
<script setup>
import { ComponentDemo } from "documents/components";
</script>

# 对话框 Dialog

> 对话框是一种临时窗口，通常在不想中断整体任务流程，但又需要为用户展示信息或获得用户响应时，在页面中打开一个对话框承载相应的信息及操作。

## 属性 Props

### 可见 - visible <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Dialog/VisibleDemo.vue"></component-demo>

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Dialog/TitleDemo.vue"></component-demo>

### 宽度 - width <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Dialog/WidthDemo.vue"></component-demo>

### 底栏 - footer <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Dialog/FooterDemo.vue"></component-demo>

### 主题 - theme <t-tag theme="primary" variant="light">DialogTheme</t-tag>

<component-demo url="/documents/docs/Dialog/ThemeDemo.vue"></component-demo>

### 自定义图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Dialog/IconDemo.vue"></component-demo>

### 确认按钮 - confirm-btn <t-tag theme="primary" variant="light">String | DialogButtonConfig</t-tag>

<component-demo url="/documents/docs/Dialog/ConfirmBtnDemo.vue"></component-demo>

### 取消按钮 - confirm-btn <t-tag theme="primary" variant="light">String | DialogButtonConfig</t-tag>

<component-demo url="/documents/docs/Dialog/CancelBtnDemo.vue"></component-demo>

### 弹出位置 - placement <t-tag theme="primary" variant="light">DialogPlacement</t-tag>

<component-demo url="/documents/docs/Dialog/PlacementDemo.vue"></component-demo>

### 遮罩层关闭 - overlay-close <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Dialog/OverlayClosableDemo.vue"></component-demo>

### 不显示遮罩层 - without-overlay <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Dialog/WithoutOverlayDemo.vue"></component-demo>

### 可拖拽 - draggable <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Dialog/DraggableDemo.vue"></component-demo>

### 挂载节点 - attach <t-tag theme="primary" variant="light">String | Element</t-tag>

<component-demo url="/documents/docs/Dialog/AttachDemo.vue"></component-demo>

### 层级 - z-index <t-tag theme="primary" variant="light">Number</t-tag>

<component-demo url="/documents/docs/Dialog/ZIndexDemo.vue"></component-demo>

## 插槽 Slots

### 默认 - default <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Dialog/DefaultSlotDemo.vue"></component-demo>

### 头部 - header <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Dialog/HeaderSlotDemo.vue"></component-demo>

### 底部 - footer <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Dialog/FooterSlotDemo.vue"></component-demo>

## 事件 Emits

### 关闭 - close

<component-demo url="/documents/docs/Dialog/EmitCloseDemo.vue"></component-demo>

### 取消 - cancel

<component-demo url="/documents/docs/Dialog/EmitCancelDemo.vue"></component-demo>

### 确认 - confirm

<component-demo url="/documents/docs/Dialog/EmitConfirmDemo.vue"></component-demo>