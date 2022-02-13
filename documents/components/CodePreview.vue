<!--
 * @Author: Quarter
 * @Date: 2022-01-07 07:32:59
 * @LastEditTime: 2022-01-12 03:09:16
 * @LastEditors: Quarter
 * @Description: 代码预览
 * @FilePath: /t-ui-kit/packages/Global/CodePreview.vue
-->
<script lang="ts" setup>
import "packages/Style";

import { computed, defineAsyncComponent, ref, useAttrs } from "vue";
import { Icon } from "packages/Icon";
import { Clipboard } from "packages/Clipboard";

const attrs = useAttrs();

// 代码内容
const code = ref("");
// 自定义组件
const CustomComponent = defineAsyncComponent(
  () => import(/* @vite-ignore */ attrs.url + "")
);

if (process.env.NODE_ENV === "production") {
  fetch(attrs.url + "")
    .then((res) => res.text())
    .then((text) => {
      code.value = text;
    });
} else {
  import(/* @vite-ignore */ attrs.url + "?raw").then((res) => {
    code.value = res.default;
  });
}

// 代码展开
const codeExpand = ref(false);

/**
 * @description: 干净的代码
 * @author: Quarter
 * @return {string}
 */
const filterCode = computed<string>(() => {
  return code.value.replace(
    /^\<\!\-\-(.*)(\r\n|\r|\n)(\s\*(.+)(\r\n|\r|\n))+\-\-\>(\r\n|\r|\n)/gm,
    ""
  );
});

/**
 * @description: 处理代码拷贝
 * @author: Quarter
 * @return
 */
const handleCodeCopy = () => {
  Clipboard.copy(code.value).then(() => {
    alert("复制成功");
  });
};

/**
 * @description: 处理代码预览
 * @author: Quarter
 * @return
 */
const handleCodePreview = () => {
  codeExpand.value = !codeExpand.value;
};
</script>

<template>
  <div class="code-preview">
    <div class="code-preview__body">
      <CustomComponent></CustomComponent>
    </div>
    <div class="code-preview__operation">
      <span @click="handleCodeCopy"><Icon name="file-copy"></Icon></span>
      <span :class="{ active: codeExpand }" @click="handleCodePreview"
        ><Icon name="code"></Icon
      ></span>
    </div>
    <div v-if="codeExpand" class="code-preview__code">
      <pre>{{ filterCode }}</pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "packages/Style/mixin.scss";

.code-preview {
  border-radius: 6px;
  background-color: var(--t-neutral-2-white-1);
  box-shadow: -0.5px 0 0 0 #dcdcdc inset, 0.5px 0 0 0 #dcdcdc inset,
    0 -0.5px 0 0 #dcdcdc inset, 0 0.5px 0 0 #dcdcdc inset;

  .code-preview__body {
    padding: 40px;
    box-sizing: border-box;
  }

  .code-preview__operation {
    padding: 8px;
    user-select: none;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    span {
      @include t-text-2;
      @include t-radius;

      width: 32px;
      height: 32px;
      color: var(--t-text-gray-2);
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &:not(.active):hover,
      &.active {
        color: var(--t-text-gray-1);
        background-color: var(--t-neutral-1-gray-1);
      }

      &:nth-of-type(n + 2) {
        margin-left: var(--t-space-8);
      }
    }
  }

  .code-preview__code {
    @include t-text-4;

    padding: 20px 25px;
    box-sizing: border-box;
    background-color: var(--t-neutral-1-gray-1);
  }
}
</style>