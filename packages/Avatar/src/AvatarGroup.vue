<!--
 * @Author: Quarter
 * @Date: 2022-02-17 01:07:50
 * @LastEditTime: 2022-02-17 11:39:10
 * @LastEditors: Quarter
 * @Description: 头像组
 * @FilePath: /t-ui-kit/packages/Avatar/src/AvatarGroup.vue
-->
<template>
  <div class="t-avatar-group" :class="classNameList">
    <render-node
      v-for="(avatar, index) of visibleAvatar"
      :key="`avatar-node-${String(avatar.key || index)}`"
      :node="avatar"
      :size="size"
      :is-group="index > 0"
    ></render-node>
    <!-- 更多的头像 -->
    <template v-if="moreVisible">
      <avatar v-if="moreIcon || moreAlt" :icon="moreIcon" :alt="moreAlt" :size="size" is-group></avatar>
      <avatar v-else icon="add" :size="size" is-group></avatar>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions, VNode } from "vue";
import { RenderNode } from "packages/Global";
import Avatar from "./Avatar.vue";
import { AvatarCascading, AvatarSize } from "./type";

import "packages/Style";
import "./style/avatarGroup.scss";

export default Vue.extend({
  name: "TAvatarGroup",
  components: {
    RenderNode,
    Avatar,
  },
  props: {
    cascading: { // 级联顺序
      type: String,
      default: "left-up",
    } as PropOptions<AvatarCascading>,
    max: { // 最大显示数量
      type: Number,
      default: 3,
    },
    size: String as PropOptions<AvatarSize | string>, // 头像尺寸
    moreIcon: String, // 更多的图标
    moreAlt: String, // 更多的文本
  },
  computed: {
    /**
     * @description: 级联顺序
     * @author: Quarter
     * @return {AvatarCascading}
     */
    avatarGroupCascading(): AvatarCascading {
      const cascading: AvatarCascading[] = ["left-up", "right-up"];
      if (cascading.includes(this.cascading)) {
        return this.cascading;
      }
      return "left-up";
    },
    /**
     * @description: 最大个数
     * @author: Quarter
     * @return {Number}
     */
    avatarGroupMax(): number {
      if (typeof this.max === "number" && Number.isInteger(this.max) && this.max > 0) {
        return this.max;
      }
      return 3;
    },
    /**
     * @description: 默认插槽
     * @author: Quarter
     * @return {VNode[]}
     */
    defaultSlots(): VNode[] {
      if (this.$slots.default) {
        return this.$slots.default;
      }
      return new Array();
    },
    /**
     * @description: 更多是否可见
     * @author: Quarter
     * @return {boolean}
     */
    moreVisible(): boolean {
      if (Array.isArray(this.defaultSlots) && this.defaultSlots.length > this.avatarGroupMax) {
        return true;
      }
      return false;
    },
    /**
     * @description: 可见的头像
     * @author: Quarter
     * @return {VNode[]}
     */
    visibleAvatar(): VNode[] {
      if (Array.isArray(this.defaultSlots)) {
        if (this.defaultSlots.length > this.avatarGroupMax) {
          return this.defaultSlots.slice(0, this.avatarGroupMax - 1);
        } else {
          return this.defaultSlots;
        }
      }
      return new Array();
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      return [`t-avatar-group--${this.avatarGroupCascading}`];
    },
  },
});
</script>