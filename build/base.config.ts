/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:28:23
 * @LastEditTime: 2022-02-15 06:01:26
 * @LastEditors: Quarter
 * @Description: vite 基础配置
 * @FilePath: /t-ui-kit/build/base.config.ts
 */
import { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import Markdown from "vite-plugin-md";

// 文档: https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require("autoprefixer"),
      ],
    },
  },
  server: {
    port: 8080,
    host: "0.0.0.0",
    strictPort: true,
  },
  resolve: {
    alias: {
      documents: resolve(__dirname, "../documents"),
      packages: resolve(__dirname, "../packages"),
    },
  },
  plugins: [
    createVuePlugin({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      // vueVersion: "3.x",
      include: [/\.md$/],
    }),
  ],
});