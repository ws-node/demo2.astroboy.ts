# demo2 of astroboy.ts
* 最新功能demo
* 演示了将当前仓库打包成base基础项目的流程

## 生产环境运行
### 1. 打包应用
```bash
make build
```
### 2. 以astroboy的方式启动打包完成的应用
```bash
make start-dist
```

## 开发环境
### 1.无脑脚本
```bash
make dev
```
> 详细atc-cli开发相关的内容以及atc.config.js配置文件，可以参考astrpboy.ts文档

## 打包作为base项目发布
### 1.更新pkg的版本
### 2.打包应用
```bash
make pkg
```
### 3.发布
```bash
make publish-pkg
```
