webpack 的官方定义是一个模块打包工具，不是 js 的翻译器

> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

接上一章的内容，我们把代码使用模块化改造一下。

1. `index.js`
    ```js
    // ES Module 语法
    import Header from './header'

    // CommonJS 语法
    var Footer = require('./footer')

    var dom = document.getElementById('root')

    var el = document.createElement('div')
    el.innerText = '这是index.js'
    dom.append(el)

    new Header();
    new Footer();
    ```
2. `header.js`
    ```js
    function Header() {
        var dom = document.getElementById('root')
        var header = document.createElement('div')

        header.innerText = '这是header.js'

        dom.append(header)
    }

    export default Header
    ```
3. `footer.js`
    ```js
    function Footer() {
        var dom = document.getElementById('root')
        var footer = document.createElement('div')

        footer.innerText = '这是footer.js'

        dom.append(footer)
    }

    module.exports = Footer
    ```

这是我们再打开 `index.html` 文件，发现会报错，这些语法浏览器根本不识别。
此时就需要 webpack 帮我们了。

然后，在我们的项目里，安装一下 webpack 打包一下。
**(下一篇详细说明 webpack 的安装方式)**

> 在开始之前，请确保安装了 Node.js 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)，是理想的起步。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能以及/或者缺少相关 package 包

1. 在项目根目录执行 `npm init` 生成 `pack.json`

2. 执行 `npm install -D webpack webpack-cli`

3. 安装完成后， 执行 `npx webpack index.js` 进行打包

4. 打包完成后，发现根目录下多了一个 `dist` 目录， 里面有一个 `main.js`，这个就是打包好的 js 代码。

5. 此时，打开 `index.html` 文件，引入打包好的 `main.js` 文件。 打开页面，发现执行成功了。


**最初，webpack只能打包 javascript 文件，发展到现在，已经不仅仅能打包js文件，还能打包 css, 图片等等各种类型的文件**

至此，已经明确了 webpack 是一个模块打包工具的概念。

具体请阅读 `webapck 官网 >>> DOCUMENTATION >>> CONCEPTS >>> Modules`

模块化的语法，请阅读`webapck 官网 >>> DOCUMENTATION >>> API >>> Modules`