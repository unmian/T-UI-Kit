<!--
 * @Author: Quarter
 * @Date: 2021-12-31 02:17:49
 * @LastEditTime: 2022-02-21 08:45:40
 * @LastEditors: Quarter
 * @Description: 图标网格
 * @FilePath: /t-ui-kit/documents/components/IconGrid.vue
-->
<script lang="ts" setup>
import { computed, PropType, inject } from "vue";
import { MessageFunc } from "packages/Message";
import { ClipboardProperties } from "packages/Clipboard";

const props = defineProps({
  icons: {
    type: Array as PropType<any[]>,
    default: new Array(),
  },
});

// 剪贴板工具
const $clipboard = inject<ClipboardProperties>("$clipboard");
// 全局提示
const $message = inject<MessageFunc>("$message");

/**
 * @description: 图标列表
 * @author: Quarter
 * @return {Array<Object>}
 */
const icons = computed(() => {
  if (Array.isArray(props.icons)) {
    return props.icons;
  }
  return new Array();
});

/**
 * @description: 处理点击事件
 * @author: Quarter
 * @param {string} iconName 图标名称
 * @return
 */
const handleClick = (iconName: string) => {
  $clipboard
    ?.copy(iconName)
    .then(() => {
      $message?.success(`图标名称复制成功 ${iconName}`);
    })
    .catch((e) => {
      $message?.success("复制失败，请再试一次或反馈工程师");
    });
};
</script>

<template>
  <div class="icon-grid">
    <ul>
      <li
        v-for="(icon, iconIndex) of icons"
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