# webpack相关面试题



### 与 Webpack 类似的工具有哪些，为什么选择使用 Webpack?

产品成熟，社区生态好，有更多的最佳实践来参考。

遇到问题能快速找到解决方案。

有强大的插件系统，能灵活的满足不同的场景需求。

### Webpack 与 Grunt Gulp 这类打包工具有什么不同？

Grunt Gulp 这类构建工具的思路是，`遍历源文件` -> `匹配规则` -> `打包输出`，这个过程中做不到按需加载，对打包出来的资源，页面是否使用，打包过程是不关心的。

Webpack 是从入口文件开始，经过模块，依赖加载，分析和打包完成的项目构建。在这个过程中，依靠强大的插件系统，可以针对性的做一些解决方案。

### 什么是NPM Script， NPM Script 可以用来做什么？

`NPM Script` 是 `NPM` 里的执行脚本功能，`Node` 的开发是离不开 `NPM` 的，而`NPM Script` 是 `NPM` 最常用、强大的功能之一。

`NPM` 允许在 `package.json` 文件中使用 `scripts` 字段定义脚本命令。

```json
{
  "name": "npm-script",
  "version": "0.1.0",
  "scripts": {
    "build": "webpack"
  }
  // ...
}
```

上面的代码是 `package.json` 文件的一个片段，里面的 `scripts` 字段是一个对象，它的每一个属性，对应的就是一个脚本命令。比如上面的 `build` 命令，对应的脚本就是 `webpack` 。

命令行下使用 `npm run ` 命令。就可以执行定义的脚本了。

`npm run build` 等同于 `webpack`

### NPM 的常用命令有哪些？

- `npm init` 初始化NPM环境，创建一个 `package.json` 文件
- `npm install <packageName>` 安装npm包，可以指定包名安装某个具体的npm包。 通过 `--save-dev` 安装到 `devDependencies` 或者` `--save`安装到 `Dependencies`
- `npm update` 更新 `NPM`包
- `npm set` 设置npm配置
- `npm config` 查看npm的配置信息
- `npm list`展现当前项目安装的所有模块，以及对应的依赖
- `npm search` 查找npm仓库
- `npm info` 查看某个包的信息

[NPM 命令官网文档](https://docs.npmjs.com/cli-documentation/)



### Webpack-cli 常用选项

- `--config` 指定配置文件路径
- `--mode` 指定打包环境，可选值为 `development / production` 分别对应 **开发环境** 与 **生产环境**
- `--json` 输出详细的打包结果，可以使用 `webpack --json > stats.json` 的方式将打包结果输出到指定的文件，用来分析打包结果。
- `--progress` 显示打包进度条
- `--color `,`--colors`,`--no-color`,`--no-colors` 控制控制台输出的内容是否开启颜色
- `--display-error-details` 打印详细的错误信息
- `--watch` 监听文件变化，没有变化的模块会在编译后，缓存到内存，每次只编译有变化的部分。
- `--profile` 详细的输出每个环节的打包耗时，方便排查打包速度的瓶颈
- `--hot` 开启 `Hot Module Replacement` (模块热更替)
- [官方文档](https://webpack.js.org/api/cli/)