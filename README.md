# demo2 of @exoskeleton/core

- 最新功能 demo
- 演示了将当前仓库打包成 base 基础项目的流程

## 生产环境运行

### 1. 打包应用

```bash
make build
```

### 2. 以 astroboy 的方式启动打包完成的应用

```bash
make start-dist
```

## 开发环境

### 1.无脑脚本

```bash
make dev
```

> 详细 atc-cli 开发相关的内容以及 atc.config.js 配置文件，可以参考 astrpboy.ts 文档

## 打包作为 base 项目发布

### 1.更新 pkg 的版本

### 2.打包应用

```bash
make pkg
```

### 3.发布

```bash
make publish-pkg
```
