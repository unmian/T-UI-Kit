/*
 * @Author: Quarter
 * @Date: 2022-02-25 05:38:40
 * @LastEditTime: 2022-03-02 09:11:11
 * @LastEditors: Quarter
 * @Description: 复选框类型
 * @FilePath: /t-ui-kit/packages/Checkbox/src/type/index.ts
 */

// 复选框值
export type CheckboxValue = string | number | boolean;

// 提供的复选框组类型
export interface CheckboxGroupProvider {
  name: "TCheckboxGroup"; // 名称
  props: {
    value?: CheckboxValue[], // 选中值
    defaultValue?: CheckboxValue[], // 默认值
    name?: string, // 名称
    disabled?: boolean, // 禁用
  }; // 参数
  value: CheckboxValue[]; // 复选框组的值
  handleCheckboxChange: (val: CheckboxValue, checked: boolean) => void; // 处理选项变化
}