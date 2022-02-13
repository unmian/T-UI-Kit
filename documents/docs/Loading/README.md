<!--
 * @Author: Quarter
 * @Date: 2022-01-05 03:27:26
 * @LastEditTime: 2022-02-13 00:55:57
 * @LastEditors: Quarter
 * @Description: 加载组件文档
 * @FilePath: /t-ui-kit/documents/docs/Loading/README.md
-->
<script setup>
import { CodePreview } from "documents/components";
</script>

# 加载 Loading

> 用于告知用户页面和区块的加载中状态。

## 属性 Props

### 加载 - loading <t-tag theme="primary" variant="light">Boolean</t-tag>

加载过程中只有图标显示。适用于打开页面或操作完成后模块内等待刷新的加载场景。

<CodePreview url="/documents/docs/Loading/LoadingDemo.vue"></CodePreview>

### 文本 - text <t-tag theme="primary" variant="light">String</t-tag>

可以给加载图标配上文本内容，以作提示或标注。

<CodePreview url="/documents/docs/Loading/TextDemo.vue"></CodePreview>

### 尺寸 - size <t-tag theme="primary" variant="light">LoadingSize</t-tag>

可以给加载设置不同的尺寸，以适应不同的场景。

<CodePreview url="/documents/docs/Loading/SizeDemo.vue"></CodePreview>

### 指示器 - indicator <t-tag theme="primary" variant="light">Boolean</t-tag>

通过 `indicator` 参数也可以设置是否显示加载指示器。

<CodePreview url="/documents/docs/Loading/IndicatorDemo.vue"></CodePreview>

### 显示包裹层 - show-overlay <t-tag theme="primary" variant="light">Boolean</t-tag>

加载也支持显示包裹层，使加载的效果应该在内容的外层。

<CodePreview url="/documents/docs/Loading/ShowOverlayDemo.vue"></CodePreview>

### 全屏加载 - fullscreen <t-tag theme="primary" variant="light">Boolean</t-tag>

加载也支持全屏显示的形式。

<CodePreview url="/documents/docs/Loading/FullscreenDemo.vue"></CodePreview>

## 函数 Function

### 常规用法 - $loading <t-tag theme="primary" variant="light">LoadingFunc</t-tag>

<CodePreview url="/documents/docs/Loading/FunctionDemo.vue"></CodePreview>

### 关闭 - close <t-tag theme="primary" variant="light">Function</t-tag>

<CodePreview url="/documents/docs/Loading/FuncCloseDemo.vue"></CodePreview>

### 清空 - clear <t-tag theme="primary" variant="light">Function</t-tag>

<CodePreview url="/documents/docs/Loading/FuncClearDemo.vue"></CodePreview>

## 指令 Directive

除了直接引入组件外，加载还可以通过指令的形式来调用。

### 常规用法 - loading <t-tag theme="primary" variant="light">Boolean</t-tag>

<CodePreview url="/documents/docs/Loading/DirectiveDemo.vue"></CodePreview>

### 尺寸修饰符/动态参数  <t-tag theme="primary" variant="light">LoadingSize</t-tag>

<CodePreview url="/documents/docs/Loading/DicSizeDemo.vue"></CodePreview>

### 全屏修饰符  <t-tag theme="primary" variant="light">Boolean</t-tag>

<CodePreview url="/documents/docs/Loading/DicFullscreenDemo.vue"></CodePreview>