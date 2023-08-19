---
sidebar_position: 5
---

# 部署网站

Docusaurus 是一个 **静态站点生成器** (also called **[Jamstack](https://jamstack.org/)**).

它将您的网站构建为简单的 **静态 HTML、JavaScript 以及 CSS 文件**.

## 建立网站

Build your site **for production**:

```bash
npm run build
```

文件夹build`中会生成静态文件。

## 部署网站

在本地测试:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/).

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://docusaurus.io/docs/deployment)**).
