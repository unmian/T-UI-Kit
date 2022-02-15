<!--
 * @Author: Quarter
 * @Date: 2021-12-31 02:17:49
 * @LastEditTime: 2022-02-03 12:31:35
 * @LastEditors: Quarter
 * @Description: 图标网格
 * @FilePath: /t-ui-kit/packages/Global/src/IconGrid.vue
-->
<template>
  <div class="icon-grid">
    <ul>
      <li
        v-for="(icon, iconIndex) of iconList"
        :key="`icon-item-${iconIndex}`"
        @click="handleClick(icon.name)"
      >
        <div class="icon-grid__icon">
          <t-icon :name="icon.name"></t-icon>
        </div>
        <div class="icon_grid__name">{{ icon.name }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  props: {
    icons: { // 图标集
      type: Array,
      default: new Array(),
    } as PropOptions<any[]>,
  },
  computed: {
    /**
     * @description: 图标列表
     * @author: Quarter
     * @return {Array<Object>}
     */
    iconList(): { name: string }[] {
      if (Array.isArray(this.icons)) {
        return this.icons;
      }
      return new Array();
    },
  },
  methods: {
    /**
     * @description: 处理点击事件
     * @author: Quarter
     * @param {string} iconName 图标名称
     * @return
     */
    handleClick(iconName: string): void {
      this.$clipboard
        ?.copy(iconName)
        .then(() => {
          this.$message?.success(`图标名称复制成功 ${iconName}`);
        })
        .catch((e) => {
          this.$message?.success("复制失败，请再试一次或反馈工程师");
        });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "packages/Style/mixin.scss";

.icon-grid {
  width: 100%;
  color: var(--t-text-gray-1);
  box-sizing: border-box;

  ul {
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;

    li {
      width: 110px;
      height: 110px;
      padding: var(--t-space-8);
      color: var(--t-text-gray-1);
      text-align: center;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .icon-grid__icon {
        @include t-text-1;

        transform: scale(0.8) translateY(0);
        transition: all 0.3s linear;
      }

      .icon_grid__name {
        @include t-text-4;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        opacity: 1;
        transition: all 0.3s linear;
        margin-top: var(--t-space-4);
      }

      &:hover {
        background-color: var(--t-neutral-1-gray-2);

        .icon-grid__icon {
          transform: scale(1.2) translateY(13px);
        }

        .icon_grid__name {
          opacity: 0;
          transform: scale(0);
        }
      }
    }
  }
}
</style>