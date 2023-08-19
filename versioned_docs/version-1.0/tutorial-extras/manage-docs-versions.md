---
sidebar_position: 1
---

# 管理文档版本

Docusaurus 可以管理文档的多个版本。

## 创建文档版本

发布项目的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

该 `docs` 文件夹将被复制到 `versioned_docs/version-1.0` 并且创建 `versions.json`。

文档现在有 2 个版本：

- `1.0` at `http://localhost:3000/docs/` for the version 1.0 docs
- `current` at `http://localhost:3000/docs/next/` for the **upcoming, unreleased docs**

## 添加版本的下拉列表

要跨版本无缝导航，需要添加版本下拉列表。

修改`docusaurus.config.js`文件:

```js title="docusaurus.config.js"
module.exports = {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

文档版本下拉列表出现在您的导航栏中：

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 更新现有版本

可以在各自的文件夹中编辑版本化文档：

- `versioned_docs/version-1.0/hello.md` updates `http://localhost:3000/docs/hello`
- `docs/hello.md` updates `http://localhost:3000/docs/next/hello`
