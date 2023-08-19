---
sidebar_position: 2
---

# 创建一个文档

文档是通过以下方式连接的 **一组页面** :

- a **侧边栏 sidebar**
- **上一个/下一个 导航**
- **版本控制**

## 创建第一个文档

创建一个markdown文档 `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

新的页面可以根据以下地址查看 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## 配置侧边栏

Docusaurus 会自动根据`docs`文件夹 **创建sidebar**

添加元数据以自定义侧边栏标签和位置:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

还可以在以下位置显式创建侧边栏 `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      // highlight-next-line
      items: ['hello'],
    },
  ],
};
```
