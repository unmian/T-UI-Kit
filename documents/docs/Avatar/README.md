<!--
 * @Author: Quarter
 * @Date: 2022-02-17 01:06:08
 * @LastEditTime: 2022-02-17 08:32:33
 * @LastEditors: Quarter
 * @Description: 头像说明文档
 * @FilePath: /t-ui-kit/documents/docs/Avatar/README.md
-->
<script setup>
import { ComponentDemo } from "documents/components";
</script>

# 头像 Avatar

> 图标、图片、字符的形式展示用户或事物信息

## 属性 Props

### 文本 - alt <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Avatar/AltDemo.vue"></component-demo>

### 图标 - icon <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Avatar/IconDemo.vue"></component-demo>

### 图片 - image <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Avatar/ImageDemo.vue"></component-demo>

### 形状 - shape <t-tag theme="primary" variant="light">AvatarShape</t-tag>

<component-demo url="/documents/docs/Avatar/ShapeDemo.vue"></component-demo>

### 尺寸 - size <t-tag theme="primary" variant="light">String</t-tag>

<component-demo url="/documents/docs/Avatar/SizeDemo.vue"></component-demo>

## 事件 Emits

### 加载错误 - error

<component-demo url="/documents/docs/Avatar/ErrorDemo.vue"></component-demo>

# 头像组 AvatarGroup

## 属性 Props

### 默认

<component-demo url="/documents/docs/Avatar/GroupDemo.vue"></component-demo>

### 叠放顺序 - cascading <t-tag theme="primary" variant="light">AvatarCascading</t-tag>

<component-demo url="/documents/docs/Avatar/CascadingDemo.vue"></component-demo>

### 最大显示数量 - max <t-tag theme="primary" variant="light">Number</t-tag>

<component-demo url="/documents/docs/Avatar/MaxDemo.vue"></component-demo>