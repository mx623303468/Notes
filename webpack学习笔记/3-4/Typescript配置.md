# TypeScript

### 什么是TypeScript ?

TypeScript 是 JS 的超集 ，[中文官网](https://www.tslang.cn)

#### 安装 TypeScript 的 loader 有两个 

- 官方的 `npm i typescript ts-loader --save-dev`
- 第三方的 `npm i typescript awesome-typescript-loader --save-dev`
  -  使用了缓存，速度比官方的更快。

#### 配置

- 在项目根目录创建一个 `tsconfig.js` 的文件，里面写相关的配置。
  - 常用选项
    - `compilerOptions`
    - `include`
    - `exclude`
- `webpack.config.js` 中一些相关的配置。

