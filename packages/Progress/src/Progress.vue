<!--
 * @Author: Quarter
 * @Date: 2022-01-11 09:01:37
 * @LastEditTime: 2022-02-06 03:07:38
 * @LastEditors: Quarter
 * @Description: 进度条
 * @FilePath: /t-ui-kit/packages/Progress/src/Progress.vue
-->
<template>
  <div class="t-progress" :class="classNameList">
    <div v-if="progressTheme === 'line' || progressTheme === 'plump'" class="t-progress__bar">
      <div class="t-progress__inner" :style="{ width: progressPercentage + '%' }">
        <div v-if="progressTheme === 'plump' && progressPercentage > 10" class="t-progress__info">
          <icon v-if="progressStatus" :name="circleIconName"></icon>
          <template v-else>{{ progressPercentage }}%</template>
        </div>
      </div>
      <div v-if="progressPercentage <= 10" class="t-progress__info">
        <icon v-if="progressStatus" :name="circleIconName"></icon>
        <template v-else>{{ progressPercentage }}%</template>
      </div>
    </div>
    <div v-if="progressTheme === 'line'" class="t-progress__info">
      <icon v-if="progressStatus" :name="lineIconName"></icon>
      <template v-else>{{ progressPercentage }}%</template>
    </div>
    <div v-if="progressTheme === 'circle'" class="t-progress__info">
      <icon v-if="progressStatus" :name="circleIconName"></icon>
      <template v-else>{{ progressPercentage }}%</template>
    </div>
    <svg
      v-if="progressTheme === 'circle'"
      :width="circleSize"
      :height="circleSize"
      :viewBox="`0 0 ${circleSize} ${circleSize}`"
    >
      <circle
        class="t-progress__circle-outer"
        :cx="circleSize / 2"
        :cy="circleSize / 2"
        :r="circleSize / 2 - circleBarSize / 2"
        :stroke-width="circleBarSize"
        stroke-linecap="round"
        fill="none"
      />
      <circle
        class="t-progress__circle-inner"
        :cx="circleSize / 2"
        :cy="circleSize / 2"
        :r="circleSize / 2 - circleBarSize / 2"
        :stroke-width="circleBarSize"
        stroke-linecap="round"
        :stroke-dasharray="circleDashArray"
        fill="none"
        :transform="`rotate(-90,${circleSize / 2},${circleSize / 2})`"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Icon } from "packages/Icon";
import { ProgressSize, ProgressStatus, ProgressTheme } from "./type";

import "packages/Style";
import "./style/progress.scss";

export default Vue.extend({
  name: "TProgress",
  components: {
    Icon,
  },
  props: {
    percentage: {
      // 百分比
      type: Number,
      default: 0,
    },
    size: {
      // 进度条尺寸
      type: String,
      default: "medium",
    } as PropOptions<ProgressSize>,
    theme: {
      // 进度条主题
      type: String,
      default: "line",
    } as PropOptions<ProgressTheme>,
    status: String as PropOptions<ProgressStatus>, // 进度条状态
  },
  computed: {
    /**
     * @description: 百分比
     * @author: Quarter
     * @return {number}
     */
    progressPercentage(): number {
      if (typeof this.percentage === "number") {
        if (this.percentage < 0) {
          return 0;
        } else if (this.percentage > 100) {
          return 100;
        } else {
          return this.percentage;
        }
      }
      return 0;
    },
    /**
     * @description: 尺寸
     * @author: Quarter
     * @return {ProgressSize}
     */
    progressSize(): ProgressSize {
      const sizeList: ProgressSize[] = ["small", "medium", "large"];
      if (sizeList.includes(this.size)) {
        return this.size;
      }
      return "medium";
    },
    /**
     * @description: 主题
     * @author: Quarter
     * @return {ProgressTheme}
     */
    progressTheme(): ProgressTheme {
      const themeList: ProgressTheme[] = ["line", "plump", "circle"];
      if (themeList.includes(this.theme)) {
        return this.theme;
      }
      return "line";
    },
    /**
     * @description: 状态
     * @author: Quarter
     * @return {ProgressStatus}
     */
    progressStatus(): ProgressStatus | undefined {
      const statusList: ProgressStatus[] = ["success", "warning", "danger"];
      if (this.status && statusList.includes(this.status)) {
        return this.status;
      }
    },
    /**
     * @description: 线形进度条状态图标
     * @author: Quarter
     * @return {string}
     */
    lineIconName(): string | undefined {
      const statusIcon = {
        success: "check-circle-filled",
        warning: "error-circle-filled",
        danger: "close-circle-filled",
      };
      if (this.progressStatus) {
        return statusIcon[this.progressStatus];
      }
    },
    /**
     * @description: 环形进度条状态图标
     * @author: Quarter
     * @return {string}
     */
    circleIconName(): string | undefined {
      const statusIcon = {
        success: "check",
        warning: "error",
        danger: "close",
      };
      if (this.progressStatus) {
        return statusIcon[this.progressStatus];
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [
        `t-progress--${this.progressSize}`,
        `t-progress--${this.progressTheme}`,
      ];
      if (this.progressStatus) {
        classList.push(`t-progress--${this.progressStatus}`);
      }
      return classList;
    },
    /**
     * @description: 环形尺寸
     * @author: Quarter
     * @return {number}
     */
    circleSize(): number {
      if (this.progressTheme === "circle") {
        if (this.progressSize === "small") {
          return 72;
        } else if (this.progressSize === "medium") {
          return 112;
        } else {
          return 160;
        }
      }
      return 0;
    },
    /**
     * @description: 环形进度条宽度
     * @author: Quarter
     * @return {number}
     */
    circleBarSize(): number {
      if (this.progressTheme === "circle") {
        if (this.progressSize === "small") {
          return 4;
        } else if (this.progressSize === "medium") {
          return 6;
        } else {
          return 8;
        }
      }
      return 0;
    },
    /**
     * @description: 环形进度条描边间隙
     * @author: Quarter
     * @return {string}
     */
    circleDashArray(): string {
      const active: number = Math.round(
        (((2 * Math.PI * (this.circleSize - this.circleBarSize)) / 2) *
          this.progressPercentage) /
        100
      );
      const last: number = Math.ceil(
        (2 * Math.PI * (this.circleSize - this.circleBarSize)) / 2 - active
      );
      return [active, last].join(", ");
    },
  },
});
</script>