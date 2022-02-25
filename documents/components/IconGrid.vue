<!--
 * @Author: Quarter
 * @Date: 2021-12-31 02:17:49
 * @LastEditTime: 2022-02-25 01:00:19
 * @LastEditors: Quarter
 * @Description: 图标网格
 * @FilePath: /t-ui-kit/documents/components/IconGrid.vue
-->
<template>
  <div class="icon-grid">
    <ul>
      <li v-for="(icon, iconIndex) of iconList" :key="`icon-item-${iconIndex}`">
        <div class="icon-grid__icon">
          <t-icon :name="icon.name"></t-icon>
        </div>
        <div class="icon-grid__name">{{ icon.name }}</div>
        <div class="icon-grid__operation">
          <span @click="handleCopyName(icon.name)">名称</span>
          <t-divider layout="vertical"></t-divider>
          <span @click="handleCopyEntity(icon.entity)">代码</span>
        </div>
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
    iconList(): { name: string, entity: string }[] {
      if (Array.isArray(this.icons)) {
        return this.icons;
      }
      return new Array();
    },
  },
  methods: {
    /**
     * @description: 处理辅助名称
     * @author: Quarter
     * @param {string} iconName 图标名称
     * @return
     */
    handleCopyName(iconName: string): void {
      this.$clipboard
        ?.copy(iconName)
        .then(() => {
          this.$message?.success(`图标名称复制成功 ${iconName}`);
        })
        .catch((e) => {
          this.$message?.success("复制失败，请再试一次或反馈工程师");
        });
    },
    /**
     * @description: 处理复制转义代码
     * @author: Quarter
     * @param {string} code 转义代码
     * @return
     */
    handleCopyEntity(code: string): void {
      this.$clipboard
        ?.copy(code)
        .then(() => {
          this.$message?.success(`图标转义代码复制成功 ${code}`);
        })
        .catch((e) => {
          this.$message?.success("复制失败，请再试一次或反馈工程师");
        });
    },
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
      width: 150px;
      height: 120px;
      padding: var(--t-space-8);
      color: var(--t-text-gray-1);
      text-align: center;
      box-sizing: border-box;
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .icon-grid__icon {
        @include t-text-1;
      }

      .icon-grid__name {
        @include t-text-4;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        opacity: 1;
        transition: all 0.3s linear;
        margin-top: var(--t-space-4);
      }

      .icon-grid__operation {
        @include t-text-4;

        color: var(--t-text-gray-1);
        display: none;
        margin-top: var(--t-space-4);

        span {
          cursor: pointer;

          &:hover {
            color: var(--t-brand-hover);
          }
        }
      }

      &:hover {
        background-color: var(--t-neutral-1-gray-1);

        .icon-grid__name {
          display: none;
        }

        .icon-grid__operation {
          display: block;
        }
      }
    }
  }
}
</style>