## 基本安装
首先我们创建一个目录，初始化 npm，然后 在本地安装 webpack，接着安装 webpack-cli（此工具用于在命令行中运行 webpack）：

```s
mkdir webpack-demo && cd webpack-demo # 创建目录，并进入
npm init -y # 初始化 npm -y全部选项默认，也可以不带 -y 自己填写
npm install webpack webpack-cli --save-dev # 安装到项目
npm install --save-dev webpack@<version> # 安装指定版本
```

> 建议不要全局安装，否则当项目中的 webpack 和 全局安装的 webpack 版本不同时，会产生冲突。

> 在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。

> 我们还需要调整 package.json 文件，以便确保我们安装包是私有的(private)，并且移除 main 入口。这可以防止意外发布你的代码。

```json
{
  "name": "webpack4.0", // 项目名称
  "version": "1.0.0",   // 版本号
  "description": "webpack", // 项目描述
  "main": "index.js", // -- 去掉这个
  "private": true,  // ++ 新增这个
  "scripts": { // npm script
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": { // git 仓库
    "type": "git",
    "url": ""
  },
  "keywords": [], // 关键字
  "author": "YinXiaobo", // 作者
  "license": "MIT", // 开源协议
  "bugs": {
    "url": ""
  },
  "homepage": "",
  "devDependencies": {
    "webpack": "^4.29.6",
    "webpack-cli": "^3.3.0"
  }
}
```


安装完成后， 运行 `webpack -v` 会发现 命令无法识别，不要急。
我们使用 `npx webpack -v` 就会发现管用了。

这样我们就能在不同的项目中，使用不同版本的 webpack

**Node 8.2+ 版本提供的 npx 命令，可以运行在初始安装的 webpack 包(package)的 webpack 二进制文件**

## 使用配置文件

上面安装完成后，我们在项目目录新建一个 `webpack.config.js` 的配置文件，来管理 webpack 的配置项。

```js
const path = require('path'); // node的一个模块

// 导出一个对象
module.exports = {
  entry: './src/index.js', // 入口
  output: { // 出口
    filename: 'bundle.js', // 打包后的文件名称
    path: path.resolve(__dirname, 'dist') // 打包到哪个目录
  }
};
```

然后在项目根目录创建，`index.html` + `src > index.js `

项目根目录
```
+   |- index.html
+   |- src
      |- index.js
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
		<!-- 引入打包后的 js 文件 -->
    <script src="./dist/bundle.js"></script> 
</body>
</html>
```

src/index.js
```js
function component() {
    var ele = document.createElement('div')
    ele.innerHTML = '<h1>hello webpack</h1>'

    return ele;
}

document.body.appendChild(component());

```

执行 `npx webapck` , 打包成功。

> 如果要指定自定义的配置文件 ，使用 `npx webpack --config 文件名称`

```s
PS D:\webpack4.0> npx webpack
Hash: 0776a30513f44596f94b
Version: webpack 4.29.6
Time: 531ms
Built at: 2019-03-27 20:21:16
    Asset      Size  Chunks             Chunk Names
bundle.js  1.01 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[0] ./src/index.js 180 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
PS D:\xyy\webpack4.0>
```

浏览器打开 `index.html` ，成功输出 ‘hello webpack’


## 配置 npm script 

修改 `pack.json` 文件的 `scripts` 字段，来配置自己的 npm 命令。

pack.json
```json
"scripts": {
    "bundle": "webpack"
  },
```

修改完毕后，命令行执行 `npm run bundle` 就相当于执行 `npx webapck`了，此命令会优先找项目中的配置，找不到才会去寻找全局配置。