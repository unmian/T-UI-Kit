<!--
 * @Author: Quarter
 * @Date: 2022-02-17 01:07:43
 * @LastEditTime: 2022-02-17 08:18:50
 * @LastEditors: Quarter
 * @Description: 头像
 * @FilePath: /t-ui-kit/packages/Avatar/src/Avatar.vue
-->
<script lang="ts" setup>
import "packages/Style";
import "./style/avatar.scss";

import { computed, CSSProperties, nextTick, onBeforeUnmount, onMounted, PropType, ref, watch } from "vue";
import { Icon } from "packages/Icon";
import { AvatarShape, AvatarSize } from "./type";

const props = defineProps({
  image: String, // 图片地址
  icon: String, // 图标名称
  alt: String, // 文字内容
  size: { // 头像尺寸
    type: String as PropType<AvatarSize | string>,
    default: "large",
  },
  shape: { // 头像形状
    type: String as PropType<AvatarShape>,
    default: "circle",
  },
  isGroup: { // 是否群组
    type: Boolean,
    default: false,
  },
});
const emits = defineEmits(["error"]);

// 加载失败
const loadError = ref<boolean>(false);
// 头像元素
const avatar = ref<HTMLDivElement>();
// 文本元素
const text = ref<HTMLElement>();
// 尺寸观察者
const resizeObserver = new ResizeObserver(() => calcScale);
// 头像宽度
const avatarWidth = ref<number>(0);
// 文本字号
const textFontSize = ref<number | undefined>();
// 缩放比例
const scale = ref<number>(1);

/**
 * @description: 自定义尺寸
 * @author: Quarter
 * @return {string}
 */
const customSize = computed<string | undefined>(() => {
  if (typeof props.size === "string") {
    const sizeRg: RegExp = new RegExp(/[0-9]+(\.[0-9]+){0,1}(px|pt|em|rem|vw|vh|%)/);
    const str = props.size.replace(/[\s\n\t]+/g, "");
    if (sizeRg.test(str)) return str;
  }
});

/**
 * @description: 内置尺寸
 * @author: Quarter
 * @return {AvatarSize}
 */
const buildInSize = computed<AvatarSize | undefined>(() => {
  if (undefined === customSize.value) {
    const sizeList: AvatarSize[] = ["small", "medium", "large"];
    if (sizeList.includes(props.size as AvatarSize)) {
      return props.size as AvatarSize;
    }
    return "large";
  }
});

/**
 * @description: 头像形状
 * @author: Quarter
 * @return {AvatarShape}
 */
const shape = computed<AvatarShape>(() => {
  const shapeList: AvatarShape[] = ["circle", "round"];
  if (shapeList.includes(props.shape)) {
    return props.shape;
  }
  return "circle";
});

/**
 * @description: 仅文本
 * @author: Quarter
 * @return {boolean}
 */
const onlyText = computed<boolean>(() => {
  if (loadError.value) {
    if (!props.icon) return true;
    return false;
  } else {
    if (props.image || props.icon) return false;
    return true;
  }
});

/**
 * @description: 文本显示区域比例
 * @author: Quarter
 * @return {number}
 */
const textScale = computed<number>(() => {
  if (typeof props.alt === "string" && 1 === props.alt.length) {
    return 0.618;
  } else {
    return 0.8;
  }
});

/**
 * @description: 类名列表
 * @author: Quarter
 * @return {string[]}
 */
const classNameList = computed<string[]>(() => {
  const classList = [`t-avatar--${shape.value}`];
  if (buildInSize.value) classList.push(`t-avatar--size-${buildInSize.value}`);
  if (onlyText.value) classList.push("t-avatar--text");
  return classList;
});

/**
 * @description: 头像样式
 * @author: Quarter
 * @return {CSSProperties}
 */
const avatarStyle = computed<CSSProperties>(() => {
  const styles: CSSProperties = {
    width: customSize.value,
    height: customSize.value,
  };
  if (props.isGroup) styles.marginLeft = `-${avatarWidth.value / 4}px`;
  return styles;
});

/**
 * @description: 图标样式
 * @author: Quarter
 * @return {CSSProperties}
 */
const iconStyle = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (undefined !== textFontSize.value) styles.fontSize = `${textFontSize.value * 1.2}px`;
  if (undefined !== scale.value) styles.transform = `scale(${scale.value})`;
  return styles;
});

/**
 * @description: 文本样式
 * @author: Quarter
 * @return {CSSProperties}
 */
const textStyle = computed<CSSProperties>(() => {
  const styles: CSSProperties = {};
  if (undefined !== textFontSize.value) styles.fontSize = `${textFontSize.value}px`;
  if (undefined !== scale.value) styles.transform = `scale(${scale.value})`;
  return styles;
});

/**
 * @description: 处理图片加载失败
 * @author: Quarter
 * @return
 */
const handleImageLoadError = (): void => {
  loadError.value = true;
  emits("error");
};

/**
 * @description: 监听图片地址的变化
 * @author: Quarter
 * @return
 */
watch(() => props.image, () => {
  loadError.value = false;
});

/**
 * @description: 监听图片地址的变化
 * @author: Quarter
 * @return
 */
watch(props, () => {
  calcScale();
});

onMounted(() => {
  calcScale();
  if (avatar.value) resizeObserver.observe(avatar.value);
});

onBeforeUnmount(() => {
  if (avatar.value) resizeObserver.unobserve(avatar.value);
});

/**
 * @description: 计算缩放比例
 * @author: Quarter
 * @return
 */
const calcScale = (): void => {
  nextTick(() => {
    if (avatar.value instanceof HTMLElement) {
      const avatarRect = avatar.value.getBoundingClientRect();
      avatarWidth.value = avatarRect.width;
      if (undefined === buildInSize.value) {
        textFontSize.value = avatarRect.width / 2;
      } else {
        textFontSize.value = undefined;
      }
    }
    if (onlyText.value && typeof props.alt === "string" && props.alt.length > 1) {
      if (avatar.value instanceof HTMLElement && text.value instanceof HTMLElement) {
        const avatarRect = avatar.value.getBoundingClientRect();
        const textRect = text.value.getBoundingClientRect();
        scale.value = avatarRect.width * textScale.value / textRect.width;
      } else {
        scale.value = 1;
      }
    } else {
      scale.value = 1;
    }
  });
};
</script>

<template>
  <div ref="avatar" class="t-avatar" :class="classNameList" :style="avatarStyle">
    <img
      v-if="props.image && false === loadError"
      :src="image"
      :alt="alt"
      :style="{ width: customSize, height: customSize }"
      @error="handleImageLoadError"
    />
    <icon ref="text" v-else-if="props.icon" :name="props.icon" :style="iconStyle"></icon>
    <span ref="text" v-else :style="textStyle">{{ alt }}</span>
  </div>
</template>