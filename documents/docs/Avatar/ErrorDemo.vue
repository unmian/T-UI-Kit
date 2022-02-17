<!--
 * @Author: Quarter
 * @Date: 2022-02-17 08:16:15
 * @LastEditTime: 2022-02-17 08:24:01
 * @LastEditors: Quarter
 * @Description: 加载错误
 * @FilePath: /t-ui-kit/documents/docs/Avatar/ErrorDemo.vue
-->
<template>
  <div>
    <div>
      <t-avatar v-if="visible" image="/404" icon="error" @error="handleError"></t-avatar>
    </div>
    <div style="margin-top: 24px">
      <t-button theme="primary" @click="visible = !visible">{{ visible ? '隐藏' : '显示' }}头像</t-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      visible: false, // 是否可见
    };
  },
  methods: {
    /**
     * @description: 处理错误
     * @author: Quarter
     * @return
     */
    handleError(): void {
      this.$message?.danger("头像加载失败了");
    },
  },
});
</script>