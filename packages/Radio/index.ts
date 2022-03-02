/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-03-01 08:11:39
 * @LastEditors: Quarter
 * @Description: 单选框入口
 * @FilePath: /t-ui-kit/packages/Radio/index.ts
 */
import Vue, { PluginObject } from "vue";
import Radio from "./src/Radio.vue";
import RadioGroup from "./src/RadioGroup.vue";
import RadioButton from "./src/RadioButton.vue";

export const RadioPlugin: PluginObject<any> = {
  install: (vue: typeof Vue) => {
    vue.component("t-radio", Radio);
    vue.component("t-radio-button", RadioButton);
    vue.component("t-radio-group", RadioGroup);
  },
};

export { Radio, RadioGroup, RadioButton };

export * from "./src/type";