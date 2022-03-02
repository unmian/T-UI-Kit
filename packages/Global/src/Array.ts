/*
 * @Author: Quarter
 * @Date: 2022-03-02 07:50:43
 * @LastEditTime: 2022-03-02 08:32:55
 * @LastEditors: Quarter
 * @Description: 数组操作
 * @FilePath: /t-ui-kit/packages/Global/src/array.ts
 */

/**
 * @description: 是否是数组
 * @author: Quarter
 * @param {any} arr 数组
 * @return {boolean}
 */
const isArray = (arr: any): boolean => {
  if (Array.isArray(arr)) {
    return true;
  } else if (arr instanceof Proxy && Array.isArray(arr.target)) {
    return true;
  }
  return false;
};

/**
 * @description: 判断两数组是否相同
 * @author: Quarter
 * @param {Array|Proxy} source 来源数组
 * @param {Array} target 目标数组
 * @return {boolean}
 */
export const isArrayEqual = (source: any, target: any): boolean => {
  if (source instanceof Array && target instanceof Array) {
    const sepcialSign: string = "@#t-ui#@";
    const sTemp: string[] = source.map((item: any) => String(item)).sort();
    const tTemp: string[] = target.map((item: any) => String(item)).sort();
    return sTemp.join(sepcialSign) === tTemp.join(sepcialSign);
  }
  return false;
};