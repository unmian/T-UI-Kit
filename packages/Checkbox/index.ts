/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-03-02 08:40:53
 * @LastEditors: Quarter
 * @Description: 复选框入口
 * @FilePath: /t-ui-kit/packages/Checkbox/index.ts
 */
import Vue, { PluginObject } from "vue";
import Checkbox from "./src/Checkbox.vue";
import CheckboxGroup from "./src/CheckboxGroup.vue";

export const CheckboxPlugin: PluginObject<any> = {
  install: (vue: typeof Vue) => {
    vue.component("t-checkbox", Checkbox);
    vue.component("t-checkbox-group", CheckboxGroup);
  },
};

export { Checkbox, CheckboxGroup };

export * from "./src/type";