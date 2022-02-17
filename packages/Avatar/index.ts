/*
 * @Author: Quarter
 * @Date: 2022-01-11 02:16:37
 * @LastEditTime: 2022-02-17 07:05:32
 * @LastEditors: Quarter
 * @Description: 头像入口文件
 * @FilePath: /t-ui-kit/packages/Avatar/index.ts
 */
import { App, Plugin } from "vue";
import Avatar from "./src/Avatar.vue";
import AvatarGroup from "./src/AvatarGroup.vue";

export const AvatarPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-avatar", Avatar);
    app.component("t-avatar-group", AvatarGroup);
  },
};

export { Avatar, AvatarGroup };

export * from "./src/type";