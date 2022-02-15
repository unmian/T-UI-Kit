/*
 * @Author: Quarter
 * @Date: 2022-02-15 07:26:31
 * @LastEditTime: 2022-02-15 10:20:55
 * @LastEditors: Quarter
 * @Description: 插槽渲染
 * @FilePath: /t-ui-kit/packages/Global/src/SlotNode.ts
 */
import Vue, { CreateElement, RenderContext, VNode } from "vue";

export default Vue.extend({
  name: "TSlotNode",
  functional: true,
  render(createElement: CreateElement, ctx: RenderContext): VNode {
    const defaultSlots: VNode[] | undefined = ctx.slots().default;
    if (Array.isArray(defaultSlots) && defaultSlots.length > 0) {
      if (defaultSlots.length > 1) {
        return createElement("div", {
          attrs: {
            class: "t-slot-node",
          },
        }, defaultSlots);
      } else {
        return defaultSlots[0];
      }
    } else {
      return createElement();
    }
  },
});