<!--
 * @Author: Quarter
 * @Date: 2022-01-11 06:23:27
 * @LastEditTime: 2022-02-20 06:31:21
 * @LastEditors: Quarter
 * @Description: 抽屉说明文档
 * @FilePath: /t-ui-kit/documents/docs/Drawer/README.md
-->
<script setup>
import { /* defineComponent */ ComponentDemo } from "documents/components";
</script>

# 抽屉 Drawer

> 抽屉常通过单击临近的按钮控件打开，从屏幕边缘滑入的浮层面板，又称半屏弹窗。

## 属性 Props

### 是否可见 - visible <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/VisibleDemo.vue"></component-demo>

### 标题 - title <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Drawer/TitleDemo.vue"></component-demo>

### 底部 - footer <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/FooterDemo.vue"></component-demo>

### 取消按钮文本 - cancel-btn <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Drawer/CancelBtnDemo.vue"></component-demo>

### 确定按钮文本 - confirm-btn <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Drawer/ConfirmBtnDemo.vue"></component-demo>

### 位置 - placement <t-tag theme="primary" variant="light">DrawerPlacement</t-tag>

<component-demo url="/documents/docs/Drawer/PlacementDemo.vue"></component-demo>

### 尺寸 - size <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Drawer/SizeDemo.vue"></component-demo>

### 尺寸可拖拽 - size-draggable <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/SizeDraggableDemo.vue"></component-demo>

### 禁用遮罩层关闭 - disable-overlay-close <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/DisableOverlayCloseDemo.vue"></component-demo>

### 不使用遮罩层 - without-overlay <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/WithoutOverlayDemo.vue"></component-demo>

### 挂载节点 - attach <t-tag theme="primary" variant="light">String | Element</t-tag>

<component-demo url="/documents/docs/Drawer/AttachDemo.vue"></component-demo>

### 仅在元素内显示 - inside-element <t-tag theme="primary" variant="light">Boolean</t-tag>

<component-demo url="/documents/docs/Drawer/InsideElementDemo.vue"></component-demo>

## 插槽 Slots

### 默认插槽 - default <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Drawer/DefaultSlotDemo.vue"></component-demo>

### 头部插槽 - header <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Drawer/HeaderSlotDemo.vue"></component-demo>

### 底部插槽 - footer <t-tag theme="primary" variant="light">Slot</t-tag>

<component-demo url="/documents/docs/Drawer/FooterSlotDemo.vue"></component-demo>

## 事件 Emits

### 关闭 - close

<component-demo url="/documents/docs/Drawer/EmitCloseDemo.vue"></component-demo>

### 取消 - cancel

<component-demo url="/documents/docs/Drawer/EmitCancelDemo.vue"></component-demo>

### 确认 - confirm

<component-demo url="/documents/docs/Drawer/EmitConfirmDemo.vue"></component-demo>