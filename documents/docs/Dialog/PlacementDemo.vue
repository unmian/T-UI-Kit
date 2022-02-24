<!--
 * @Author: Quarter
 * @Date: 2022-02-23 05:25:12
 * @LastEditTime: 2022-02-24 06:06:13
 * @LastEditors: Quarter
 * @Description: 对话框弹出位置示例
 * @FilePath: /t-ui-kit/documents/docs/Dialog/PlacementDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="openDialog('top')">上方弹出</t-button>
    <t-button theme="primary" @click="openDialog('center')">居中弹出</t-button>
    <t-dialog
      :visible.sync="visible"
      width="480px"
      theme="info"
      title="我是主要信息"
      :placement="placement"
      footer
    >我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度，我是文案限制长度</t-dialog>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DialogPlacement } from "packages/Dialog";

export default Vue.extend({
  data() {
    return {
      visible: false, // 是否可见
      placement: "top" as DialogPlacement, // 弹出位置
    };
  },
  methods: {
    /**
     * @description: 打开弹窗
     * @author: Quarter
     * @param {DialogPlacement} p 弹出位置
     * @return
     */
    openDialog(p: DialogPlacement): void {
      this.placement = p;
      this.visible = true;
    },
  },
});
</script>