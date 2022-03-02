/*
 * @Author: Quarter
 * @Date: 2022-02-25 05:38:40
 * @LastEditTime: 2022-03-02 05:30:37
 * @LastEditors: Quarter
 * @Description: 单选框类型
 * @FilePath: /t-ui-kit/packages/Radio/src/type/index.ts
 */

import RadioGroup from "./RadioGroup.vue";

// 单选框值
export type RadioValue = string | number | boolean;

// 单选框组变体
export type RadioGroupVariant = "outline" | "default-filled" | "primary-filled";

// 单选框组大小
export type RadioGroupSize = "small" | "medium" | "large";

// 提供的单选框组类型
export interface RadioGroupProvider {
  name: "TRadioGroup"; // 名称
  props: {
    value?: RadioValue, // 选中值
    defaultValue?: RadioValue, // 默认值
    name?: string, // 名称
    size?: RadioGroupSize,
    variant?: RadioGroupVariant,
    disabled?: boolean, // 禁用
  }; // 参数
  value: RadioValue | undefined; // 单选框组的值
  // isRadioButton: boolean; // 是否单选按钮
  setRadioButtonGroup: () => void; // 设置为单选按钮组
  handleRadioChange: (val: RadioValue) => void; // 处理选项变化
}