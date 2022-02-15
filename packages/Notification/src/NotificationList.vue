<!--
 * @Author: Quarter
 * @Date: 2022-01-06 12:22:22
 * @LastEditTime: 2022-02-14 01:04:39
 * @LastEditors: Quarter
 * @Description: 通知通知列表
 * @FilePath: /t-ui-kit/packages/Notification/src/NotificationList.vue
-->
<template>
  <transition name="fade">
    <transition-group
      :name="transitionName"
      tag="div"
      v-if="notifications.length > 0"
      class="t-notification__list"
      :class="classNameList"
    >
      <notification
        v-for="notification of notifications"
        :key="`notification-item-${notification.index}`"
        :theme="notification.config.theme"
        :icon="notification.config.icon"
        :title="notification.config.title"
        :content="notification.config.content"
        :duration="notification.config.duration"
        :close-btn="notification.config.closeBtn"
        @close="remove(notification.index)"
        @duration-end="remove(notification.index)"
      ></notification>
    </transition-group>
  </transition>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Notification } from "packages/Notification";
import { NotifyConfig, NotificationPlacement } from "./type";

import "packages/Style";
import "./style/notificationList.scss";

interface NotificationListData {
  messageSet: { [key: number]: { index: number, config: NotifyConfig } };
};

export default Vue.extend({
  name: "TNotificationList",
  components: {
    Notification,
  },
  props: {
    placement: {
      // 放置位置
      type: String,
      default: "top-right",
    } as PropOptions<NotificationPlacement>,
  },
  data() {
    return {
      notificationSet: new Object() as NotificationListData,
    };
  },
  computed: {
    /**
     * @description: 通知放置位置
     * @author: Quarter
     * @return {NotificationPlacement}
     */
    notificationPlacement(): NotificationPlacement {
      const placementList: NotificationPlacement[] = [
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right",
      ];
      if (placementList.includes(this.placement)) {
        return this.placement;
      }
      return "top-right";
    },
    /**
     * @description: 过渡动画名称
     * @author: Quarter
     * @return {string}
     */
    transitionName(): string {
      if (this.notificationPlacement.includes("left")) {
        return "slide-left-half";
      } else {
        return "slide-right-half";
      }
    },
    /**
     * @description: 类名列表
     * @author: Quarter
     * @return {string[]}
     */
    classNameList(): string[] {
      const classList: string[] = [`t-notification__list--${this.notificationPlacement}`];
      return classList;
    },
    /**
     * @description: 通知列表
     * @author: Quarter
     * @return {Object[]}
     */
    notifications(): { index: number, config: NotifyConfig }[] {
      return [...Object.values(this.notificationSet)];
    },
  },
  methods: {
    /**
     * @description: 插入指定通知
     * @author: Quarter
     * @param {number} index 索引
     * @param {NotifyConfig} 通知配置
     * @return
     */
    push(index: number, cfg: NotifyConfig): void {
      this.$set(this.notificationSet, index, {
        index,
        config: cfg,
      });
    },
    /**
     * @description: 移除指定通知
     * @author: Quarter
     * @param {number} index
     * @return
     */
    remove(index: number): void {
      if (Reflect.has(this.notificationSet, index)) {
        const {
          config: { onClose },
        } = Reflect.get(this.notificationSet, index) || { config: {} };
        if (typeof onClose === "function") {
          onClose();
        }
        this.$delete(this.notificationSet, index);
      }
    },
    /**
     * @description: 清除所有通知
     * @author: Quarter
     * @return
     */
    clear(): void {
      Object.values(this.notificationSet).forEach(({ index }) => {
        this.remove(index);
      });
    },
  },
});
</script>