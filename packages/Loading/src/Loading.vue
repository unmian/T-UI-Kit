<!--
 * @Author: Quarter
 * @Date: 2022-01-05 03:21:11
 * @LastEditTime: 2022-02-24 05:27:54
 * @LastEditors: Quarter
 * @Description: 加载
 * @FilePath: /t-ui-kit/packages/Loading/src/Loading.vue
-->
<template>
  <teleport v-if="attachNode" :to="attachNode">
    <div v-if="showOverlay" class="t-loading__wrapper">
      <slot></slot>
      <template v-if="loading">
        <div class="t-loading" :class="classNameList">
          <div v-if="indicator" class="t-loading__indicator"></div>
          <div class="t-loading__text">{{ text }}</div>
        </div>
      </template>
    </div>
    <div v-else-if="loading" class="t-loading" :class="classNameList">
      <div v-if="indicator" class="t-loading__indicator"></div>
      <div v-if="text" class="t-loading__text">{{ text }}</div>
    </div>
  </teleport>
  <div v-else-if="showOverlay" class="t-loading__wrapper">
    <slot></slot>
    <template v-if="loading">
      <div class="t-loading" :class="classNameList">
        <div v-if="indicator" class="t-loading__indicator"></div>
        <div class="t-loading__text">{{ text }}</div>
      </div>
    </template>
  </div>
  <div v-else-if="loading" class="t-loading" :class="classNameList">
    <div v-if="indicator" class="t-loading__indicator"></div>
    <div v-if="text" class="t-loading__text">{{ text }}</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Teleport } from "packages/Global";

import type { LoadingSize } from "./type";

import "packages/Style";
import "./style/loading.scss";

export default Vue.extend({
  name: "TLoading",
  components: {
    Teleport,
  },
  props: {
    loading: {
      // 加载动画
      type: Boolean,
      default: true,
    },
    text: String, // 文本内容
    indicator: {
      // 是否显示加载指示器
      type: Boolean,
      default: true,
    },
    size: {
      // 加载的大小
      type: String,
      default: "small",
    } as PropOptions<LoadingSize>,
    showOverlay: {
      // 是否显示包裹层
      type: Boolean,
      default: false,
    },
    fullscreen: {
      // 是否全屏
      type: Boolean,
      default: false,
    },
    attach: {
      // 附加节点
      type: [String, Element],
    } as PropOptions<String | Element>,
  },
  computed: {
    /**
     * @description: 加载尺寸
     * @author: Quarter
     * @return {LoadingSize}
     */
    loadingSize(): LoadingSize {
      const sizeList: LoadingSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "small";
    },
    /**
     * @description: 附着节点
     * @author: Quarter
     * @return {Element}
     */
    attachNode(): Element | undefined {
      if (typeof this.attach === "string") {
        const el: Element | null = document.querySelector(this.attach);
        if (el as any instanceof Element) {
          return el as unknown as Element;
        }
      } else if (this.attach instanceof Element) {
        return this.attach;
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-loading--${this.loadingSize}`];
      if (this.showOverlay || this.fullscreen || this.attachNode) {
        classList.push("t-loading--center");
      }
      if (this.fullscreen) {
        classList.push("t-loading--fullscreen");
      }
      if (this.attachNode) {
        classList.push("t-loading--attach");
      }
      return classList;
    },
  },
});
</script>