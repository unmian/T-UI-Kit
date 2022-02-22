<!--
 * @Author: Quarter
 * @Date: 2022-01-10 10:58:28
 * @LastEditTime: 2022-02-21 11:15:36
 * @LastEditors: Quarter
 * @Description: 函数调用关闭示例
 * @FilePath: /t-ui-kit/documents/docs/Loading/FuncCloseDemo.vue
-->
<template>
  <div>
    <div ref="container" style="max-width: 130px; position: relative">
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
      <div>这是一行占位文本</div>
    </div>
    <div style="margin-top: 14px">
      <t-button size="small" theme="primary" @click="showLoading">开始加载</t-button>
      <t-button size="small" theme="primary" @click="closeLoading">关闭加载</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      index: null as null | number,
    };
  },
  methods: {
    /**
     * @description: 显示加载动画
     * @author: Quarter
     * @return
     */
    showLoading(): void {
      if (this.$loading && this.index === null) {
        this.index = this.$loading({
          size: "small",
          attach: this.$refs.container,
          duration: 0,
          onClose: () => {
            this.$message?.success("加载动画成功关闭了哦");
          },
        });
      }
    },
    /**
     * @description: 关闭加载动画
     * @author: Quarter
     * @return
     */
    closeLoading(): void {
      if (typeof this.index === "number") {
        this.$loading?.close(this.index);
        this.index = null;
      }
    },
  }
});
</script>