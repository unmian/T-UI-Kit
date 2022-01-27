/*
 * @Author: Quarter
 * @Date: 2021-12-29 07:29:41
 * @LastEditTime: 2021-12-29 08:20:20
 * @LastEditors: Quarter
 * @Description: 
 * @FilePath: /simple-ui/build/doc.config.ts
 */
import baseConfig from "./base.config";
import { defineConfig } from "vite";

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: "docs",
  },
});