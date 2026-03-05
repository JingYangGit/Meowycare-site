# MeowyCare 前端项目

## 项目简介

这是 MeowyCare 网站的前端代码仓库，基于 Vite + React + TypeScript + Tailwind CSS + shadcn-ui 构建，用于展示 ADHD 日常陪伴与督导服务。

## 本地开发

前提条件：本地已安装 Node.js 和 npm（推荐使用 [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) 管理 Node 版本）。

```sh
# 安装依赖
npm install

# 启动开发环境
npm run dev
```

启动后，在浏览器中访问终端输出的本地地址即可预览网站。

## 技术栈

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 构建与部署

```sh
# 生产环境构建
npm run build

# 本地预览生产构建结果
npm run preview
```

构建产物会输出到 `dist` 目录，可部署到任意支持静态文件托管的平台（如 Vercel、Netlify、Cloudflare Pages、自建 Nginx 等），域名推荐指向 `https://meowycare.com`。
