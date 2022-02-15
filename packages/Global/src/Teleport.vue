<!--
 * @Author: Quarter
 * @Date: 2022-02-05 03:20:43
 * @LastEditTime: 2022-02-15 10:21:28
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /t-ui-kit/packages/Global/src/Teleport.vue
-->
<template>
  <slot-node>
    <slot></slot>
  </slot-node>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { SlotNode } from "packages/Global";

export default Vue.extend({
  name: "TTeleport",
  components: {
    SlotNode,
  },
  props: {
    to: {
      type: [String, Element],
      default: "body",
    } as PropOptions<String | Element>,
  },
  data() {
    return {
      isMounted: false, // 是否已经挂载
      parentNode: null as ParentNode | null, // 父节点
      nextElementSibling: null as Element | null, // 下一个节点
    };
  },
  computed: {
    /**
     * @description: 传送节点
     * @author: Quarter
     * @return {Element}
     */
    toNode(): Element | undefined {
      if (typeof this.to === "string") {
        const el: Element | null = document.querySelector(this.to);
        if (el instanceof Element) {
          return el;
        }
      } else if (this.to instanceof Element) {
        return this.to;
      }
    },
  },
  watch: {
    /**
     * @description: 监听传送节点变化
     * @author: Quarter
     * @return {Element}
     */
    toNode: {
      immediate: true,
      handler(el, oldEl): void {
        if (this.isMounted) {
          this.moveElement(el, oldEl);
        }
      },
    },
  },
  mounted() {
    this.isMounted = true;
    this.parentNode = this.$el.parentNode;
    this.nextElementSibling = this.$el.nextElementSibling;
    this.$el.parentNode?.removeChild(this.$el);
    this.moveElement(this.toNode);
  },
  beforeDestroy() {
    console.log("teleport beforeDestroy");
    this.isMounted = false;
    this.nextElementSibling = null;
    this.recoverElement();
  },
  methods: {
    /**
     * @description: 元素移动
     * @author: Quarter
     * @param {Element} el 元素
     * @param {Element} oldEl 以前的元素
     * @return
     */
    moveElement(el?: Element, oldEl?: Element): void {
      if (oldEl instanceof Element) {
        if (oldEl.contains(this.$el)) {
          oldEl.removeChild(this.$el);
        }
      }
      if (el instanceof Element) {
        el.appendChild(this.$el);
      } else {
        if (this.nextElementSibling && this.parentNode?.contains(this.nextElementSibling)) {
          this.parentNode?.insertBefore(this.nextElementSibling, this.$el);
        } else {
          this.parentNode?.appendChild(this.$el);
        }
      }
    },
    /**
     * @description: 恢复元素
     * @author: Quarter
     * @return
     */
    recoverElement(): void {
      if (this.toNode instanceof Element) {
        if (this.toNode.contains(this.$el)) {
          this.toNode.removeChild(this.$el);
        }
      }
      if (!this.parentNode?.contains(this.$el)) {
        if (this.nextElementSibling && this.parentNode?.contains(this.nextElementSibling)) {
          this.parentNode?.insertBefore(this.nextElementSibling, this.$el);
        } else {
          this.parentNode?.appendChild(this.$el);
        }
      }
    },
  },
});
</script>