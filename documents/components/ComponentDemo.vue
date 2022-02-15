<!--
 * @Author: Quarter
 * @Date: 2022-01-07 07:32:59
 * @LastEditTime: 2022-02-15 06:06:03
 * @LastEditors: Quarter
 * @Description: 代码预览
 * @FilePath: /t-ui-kit/documents/components/ComponentDemo.vue
-->
<template>
  <div class="component-demo">
    <div class="component-demo__body">
      <component :is="customComponent"></component>
    </div>
    <div class="component-demo__operation">
      <span @click="handleCodeCopy">
        <t-icon name="file-copy"></t-icon>
      </span>
      <span :class="{ active: codeExpand }" @click="handleCodePreview">
        <t-icon name="code"></t-icon>
      </span>
    </div>
    <div v-if="codeExpand" class="component-demo__code">
      <pre>{{ filterCode }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ComponentDemo",
  data() {
    return {
      code: "",
      codeExpand: false,
      customComponent: () => import(/* @vite-ignore */ this.$attrs.url + "")
    };
  },
  computed: {
    /**
     * @description: 干净的代码
     * @author: Quarter
     * @return {string}
     */
    filterCode(): string {
      return this.code.replace(
        /^\<\!\-\-(.*)(\r\n|\r|\n)(\s\*(.+)(\r\n|\r|\n))+\-\-\>(\r\n|\r|\n)/gm,
        ""
      );
    }
  },
  created() {
    if (process.env.NODE_ENV === "production") {
      fetch(this.$attrs.url + "")
        .then((res) => res.text())
        .then((text) => {
          this.code = text;
        });
    } else {
      import(/* @vite-ignore */ this.$attrs.url + "?raw").then((res) => {
        this.code = res.default;
      });
    }
  },
  methods: {
    /**
     * @description: 处理代码拷贝
     * @author: Quarter
     * @return
     */
    handleCodeCopy(): void {
      this.$clipboard?.copy(this.code).then(() => {
        alert("复制成功");
      });
    },
    /**
     * @description: 处理代码预览
     * @author: Quarter
     * @return
     */
    handleCodePreview(): void {
      this.codeExpand = !this.codeExpand;
    },
  }
});
</script>

<style lang="scss" scoped>
@import "packages/Style/mixin.scss";

.component-demo {
  border-radius: 6px;
  background-color: var(--t-neutral-2-white-1);
  box-shadow: -0.5px 0 0 0 #dcdcdc inset, 0.5px 0 0 0 #dcdcdc inset,
    0 -0.5px 0 0 #dcdcdc inset, 0 0.5px 0 0 #dcdcdc inset;

  .component-demo__body {
    padding: 40px;
    box-sizing: border-box;
  }

  .component-demo__operation {
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

  .component-demo__code {
    @include t-text-4;

    padding: 20px 25px;
    box-sizing: border-box;
    background-color: var(--t-neutral-1-gray-1);
  }
}
</style>