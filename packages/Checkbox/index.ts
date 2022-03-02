/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-03-02 06:06:25
 * @LastEditors: Quarter
 * @Description: 复选框入口
 * @FilePath: /t-ui-kit/packages/Checkbox/index.ts
 */
import { App, Plugin } from "vue";
import Checkbox from "./src/Checkbox.vue";
import CheckboxGroup from "./src/CheckboxGroup.vue";

export const CheckboxPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-checkbox", Checkbox);
    app.component("t-checkbox-group", CheckboxGroup);
  },
};

export { Checkbox, CheckboxGroup };

export * from "./src/type";