<!--
 * @Author: Quarter
 * @Date: 2022-01-10 09:27:08
 * @LastEditTime: 2022-02-04 13:04:41
 * @LastEditors: Quarter
 * @Description: 函数调用关闭指定消息示例
 * @FilePath: /t-ui-kit/documents/docs/Message/FuncCloseDemo.vue
-->
<template>
  <div>
    <t-button theme="primary" @click="switchMessage">
      {{
        index ? "关闭消息提示" : "打开消息提示"
      }}
    </t-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface DemoData {
  index: number | null;
};

export default Vue.extend({
  data() {
    return {
      index: null, // 消息索引
    } as DemoData;
  },
  methods: {
    /**
     * @description: 切换消息提示
     * @author: Quarter
     * @return
     */
    switchMessage(): void {
      if (typeof this.index === "number") {
        this.$message?.close(this.index);
        this.index = null;
      } else {
        if (this.$message) {
          this.index = this.$message.info(
            "用于表示普通操作信息提示，可关闭，通常信息较长",
            {
              duration: 0,
            }
          );
        }
      }
    },
  },
});
</script>