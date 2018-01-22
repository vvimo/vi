## 简介

`vi 是一个前后台集成方案，它基于 Vue-cli 和 Mysql。它使用的前端技术，内置了i18国际化解决方案，动态路由，Node 操作 Mysql 相信不管你的需求是什么，本项目都能帮助到你。`

- [在线访问](http://www.vvimo.com)

**本项目的定位是小型前后台集成方案，不适合当基础模板来开发。**
 - 网站: [vi](https://www.vvimo.com)
 - 后台: [vi-console](https://www.vvimo.com/console)

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/)、[axios]、[七牛云存储](https://www.qiniu.com) and [mysql]，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 后台功能
```
- 登录/注销
- 权限验证
- 国际化多语言
- 富文本编辑器
- Markdown编辑器
```

## 开发
```bash
# 克隆项目
git clone https://github.com/vvimo/vi.git

# 安装依赖
npm install
   
# 建议不要用cnpm安装 会有各种诡异的bug 可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```
浏览器访问 http://localhost:2080

## 发布
```bash
npm run build
```

## Online
[个人网站](http://www.vvimo.com)

## License

Copyright (c) 2018-present vvimo
