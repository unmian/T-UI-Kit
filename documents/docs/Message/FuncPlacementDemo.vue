<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:57
 * @LastEditTime: 2022-02-13 09:44:11
 * @LastEditors: Quarter
 * @Description: 函数调用指定消息位置示例
 * @FilePath: /t-ui-kit/documents/docs/Message/FuncPlacementDemo.vue
-->
<template>
  <div style="width: 320px; margin: 0 auto">
    <div style="display: flex; justify-content: space-between">
      <t-button variant="outline" @click="createLeftTopMessage">左上方</t-button>
      <t-button variant="outline" @click="createTopMessage">上方</t-button>
      <t-button variant="outline" @click="createRightTopMessage">右上方</t-button>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 50px">
      <t-button variant="outline" @click="createLeftMessage">左侧</t-button>
      <t-button variant="outline" @click="createCenterMessage">居中</t-button>
      <t-button variant="outline" @click="createRightMessage">右侧</t-button>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 50px">
      <t-button variant="outline" @click="createLeftBottomMessage">左下方</t-button>
      <t-button variant="outline" @click="createBottomMessage">下方</t-button>
      <t-button variant="outline" @click="createRightBottomMessage">右下方</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建左上方的全局提示
     * @author: Quarter
     * @return
     */
    createLeftTopMessage(): void {
      this.$message?.info("用于表示普通操作信息提示 ", {
        placement: "top-left",
      });
    },
    /**
     * @description: 创建左侧的全局提示
     * @author: Quarter
     * @return
     */
    createLeftMessage(): void {
      this.$message?.info("用于表示普通操作信息提示 ", {
        placement: "left",
      });
    },
    /**
     * @description: 创建左下方的全局提示
     * @author: Quarter
     * @return
     */
    createLeftBottomMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "bottom-left",
      });
    },
    /**
     * @description: 创建上方的全局提示
     * @author: Quarter
     * @return
     */
    createTopMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "top",
      });
    },
    /**
     * @description: 创建居中的全局提示
     * @author: Quarter
     * @return
     */
    createCenterMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "center",
      });
    },
    /**
     * @description: 创建下方的全局提示
     * @author: Quarter
     * @return
     */
    createBottomMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "bottom",
      });
    },
    /**
     * @description: 创建右上方的全局提示
     * @author: Quarter
     * @return
     */
    createRightTopMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "top-right",
      });
    },
    /**
     * @description: 创建右侧的全局提示
     * @author: Quarter
     * @return
     */
    createRightMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "right",
      });
    },
    /**
     * @description: 创建右下方的全局提示
     * @author: Quarter
     * @return
     */
    createRightBottomMessage(): void {
      this.$message?.info("用于表示普通操作信息提示", {
        placement: "bottom-right",
      });
    },
  },
});
</script>