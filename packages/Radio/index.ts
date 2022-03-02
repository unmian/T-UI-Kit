/*
 * @Author: Quarter
 * @Date: 2022-01-11 09:00:30
 * @LastEditTime: 2022-03-01 06:43:11
 * @LastEditors: Quarter
 * @Description: 单选框入口
 * @FilePath: /t-ui-kit/packages/Radio/index.ts
 */
import { App, Plugin } from "vue";
import Radio from "./src/Radio.vue";
import RadioGroup from "./src/RadioGroup.vue";
import RadioButton from "./src/RadioButton.vue";

export const RadioPlugin: Plugin = {
  install: (app: App) => {
    app.component("t-radio", Radio);
    app.component("t-radio-button", RadioButton);
    app.component("t-radio-group", RadioGroup);
  },
};

export { Radio, RadioGroup, RadioButton };

export * from "./src/type";