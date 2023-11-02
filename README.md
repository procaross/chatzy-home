# Chatzy

![LOGO](https://i0.imgs.ovh/2023/11/02/AqNEO.png)

Chatzy 是一款无需下载的开源即时聊天软件。这个仓库包含了 Chatzy 的官网页面。

![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## 项目技术栈

- **Next.js** - React 框架
- **TypeScript** - 静态类型检查
- **TailwindCSS** - CSS 框架
- **Framer Motion** - 动画库

## 目录结构

```
├── public                   # 公共静态资源
├── src
│   └── app
│       ├── components       # 可复用组件
|       ├── pages            # 网页入口
|       ├── layout           # 全局页面结构
├── .eslintrc.json           # ESLint 配置
├── .prettierrc              # Prettier 配置
├── next.config.js           # Next.js 配置
├── package.json             # 依赖管理
├── README.md                # 文档
├── tailwind.config.js       # tailwind 配置
└── tsconfig.json            # TypeScript 配置
```

## 功能实现

- **动态打字动画** - 使用 Framer Motion 的动画组件实现
- **滚动动画** - 使用 Framer Motion 的动画组件实现页面滚动效果
- **响应式设计** - 使用 TailwindCSS 响应式样式实现移动端适配
- **代码规范** - 使用 ESLint、Prettier 规范代码风格

## 环境配置

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### Lint 检查及自动修复

```bash
npm run lint
```

## 贡献指南

😍 欢迎提 Issue 和 PR 参与项目贡献!

## 作者

Proca
