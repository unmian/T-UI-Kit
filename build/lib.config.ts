/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:29:06
 * @LastEditTime: 2022-02-22 05:44:17
 * @LastEditors: Quarter
 * @Description: vite 组件库配置
 * @FilePath: /t-ui-kit/build/lib.config.ts
 */
import baseConfig from "./base.config";
import { defineConfig } from "vite";
import { resolve } from "path";
import { createVuePlugin } from "vite-plugin-vue2";
import Markdown from "vite-plugin-mkd";
import dts from "vite-plugin-dts";

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: "lib",
    lib: {
      entry: resolve(__dirname, "../packages/index.ts"),
      name: "T-UI-Kit",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [
    createVuePlugin({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      include: [/\.md$/],
    }),
    dts({
      outputDir: "types",
      cleanVueFileName: true,
      include: ["packages/**"],
      beforeWriteFile: (filePath: string, content: string) => ({
        filePath: filePath.replace(/packages/g, ""),
        content,
      }),
    }),
  ],
});