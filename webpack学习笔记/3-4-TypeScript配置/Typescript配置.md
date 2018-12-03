# TypeScript

### 什么是TypeScript ?

TypeScript 是 JS 的超集 ，[中文官网](https://www.tslang.cn)

#### 在webpack中使用TypeScript，需要安装 TypeScript 的 loader 有两个 

- 官方推荐的 `npm i typescript ts-loader --save-dev`
- 第三方的 `npm i typescript awesome-typescript-loader --save-dev`
  - 作者说利用了一些缓存，速度比官方的更快。

#### 配置

- 在项目根目录创建一个 `tsconfig.js` 的文件，里面写相关的配置。  
  [官网配置表](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
  - 常用选项
    - `compilerOptions`
    - `include`
    - `exclude`
- `webpack.config.js` 中一些相关的配置。

1. 新建一个`demo`文件夹，`cd` 进入，`npm init -y`, 初始化项目。  

	安装 `npm i webpack webpack-cli typescript ts-loader awesome-typescript-loader -D`  

	在根目录新建 `tsconfig.json，webpack.config.js` 文件  
	新建`src`文件夹, 文件下新建 `app.ts`

2. 书写 `webpack.config.js` 文件
```js
module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
     {
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader'
      }
     }
    ]
  }
}
```

3. 书写 `tsconfig.json`  
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "allowJs": true
  },
  "include": [
    "./src/*"
  ],
  "exclude": [
    "./node_modules/"
  ]
}
```

3. 在 `app.ts` 文件中添加一些代码，然后在命令行执行命令 `webpack` 编译一次
`app.ts:`

```ts
const NUM = 45
interface Cat {
  name: String,
  gender: String
}

function touCat(cat: Cat) {
  console.log('miao~', cat.name)
}

touCat({
  name: 'tom',
  gender: 'male'
})

```

```
PS D:\notes\webpack学习笔记\3-4-TypeScript配置\demo> webpack
Hash: 14b1bc2efdce45993f3b
Version: webpack 4.26.1
Time: 851ms
Built at: 2018-12-03 17:24:42
        Asset     Size  Chunks             Chunk Names
app.bundle.js  3.9 KiB     app  [emitted]  app
Entrypoint app = app.bundle.js
[./src/app.ts] 132 bytes {app} [built]

```

