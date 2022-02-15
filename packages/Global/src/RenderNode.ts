/*
 * @Author: Quarter
 * @Date: 2022-02-05 01:27:20
 * @LastEditTime: 2022-02-14 01:22:10
 * @LastEditors: Quarter
 * @Description: VNode 渲染节点
 * @FilePath: /t-ui-kit/packages/Global/src/RenderNode.ts
 */
import Vue, { CreateElement, PropOptions, RenderContext, VNode } from "vue";

export default Vue.extend({
  name: "TRenderNode",
  functional: true,
  props: {
    node: Object as PropOptions<VNode>,
  },
  render(createElement: CreateElement, ctx: RenderContext<{ node?: VNode }>): VNode {
    if (undefined !== ctx.props.node) {
      return ctx.props.node;
    }
    return createElement();
  },
});