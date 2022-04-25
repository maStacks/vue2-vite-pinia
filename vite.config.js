import { createVuePlugin } from "vite-plugin-vue2";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path"; // ts如果报错 npm i @types/node -D
import compressPlugin from "vite-plugin-compression"; //静态资源压缩
// import legacyPlugin from '@vitejs/plugin-legacy'; //浏览器兼容
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig({
  // base: '/aaa',
  outDir: "target",
  // 反向代理
  server: {
    port: 8080,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    proxy: {
      "/api": {
        target: "https://blog.csdn.net",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [
    createVuePlugin(),
    vueJsx({}),
    visualizer(),
    compressPlugin({
      //gzip静态资源压缩
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: "gzip", //压缩算法
      ext: ".gz", //文件类型
    }),
    createSvgIconsPlugin({
      // 配置路径在你的src里的svg存放文件
      iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
    // legacyPlugin({
    //   targets: ["chrome 52"], // 需要兼容的目标列表，可以设置多个
    //   additionalLegacyPolyfills: ["regenerator-runtime/runtime"], // 面向IE11时需要此插件
    // }),
  ],
  build: {
    target: "es2015",
    outDir: "./dist/",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue"],
          vueRouter: ["vue-router"],
          elementUI: ["element-ui"],
          axios: ["axios"],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: "/src",
      },
    ],
    extensions: [".js", ".vue", ".json", ".scss", "*"],
  },
});
