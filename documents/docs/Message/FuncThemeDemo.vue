<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:24:13
 * @LastEditTime: 2022-02-13 09:48:28
 * @LastEditors: Quarter
 * @Description: 函数调用快速主题示例
 * @FilePath: /t-ui-kit/documents/docs/Message/FuncThemeDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="createInfoMessage">提示主题</t-button>
    <t-button theme="success" @click="createSuccessMessage">成功主题</t-button>
    <t-button theme="warning" @click="createWarningMessage">警告主题</t-button>
    <t-button theme="danger" @click="createDangerMessage">危险主题</t-button>
    <t-button variant="outline" theme="primary" @click="createHelpMessage">帮助主题</t-button>
    <t-button variant="outline" @click="createLoadingMessage">加载主题</t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    /**
     * @description: 创建消息类提示
     * @author: Quarter
     * @return
     */
    createInfoMessage(): void {
      this.$message?.info("用于表示普通操作信息提示");
    },
    /**
     * @description: 创建成功类提示
     * @author: Quarter
     * @return
     */
    createSuccessMessage(): void {
      this.$message?.success("用于表示操作顺利达成");
    },
    /**
     * @description: 创建警告类提示
     * @author: Quarter
     * @return
     */
    createWarningMessage(): void {
      this.$message?.warning("用于表示操作引起一定后果");
    },
    /**
     * @description: 创建危险类提示
     * @author: Quarter
     * @return
     */
    createDangerMessage(): void {
      this.$message?.danger("用于表示操作引起严重的后果");
    },
    /**
     * @description: 创建帮助类提示
     * @author: Quarter
     * @return
     */
    createHelpMessage(): void {
      this.$message?.question("用于帮助用户操作的信息提示");
    },
    /**
     * @description: 创建加载类提示
     * @author: Quarter
     * @return
     */
    createLoadingMessage(): void {
      this.$message?.loading("用于表示操作正在生效的过程中");
    },
  },
});
</script>