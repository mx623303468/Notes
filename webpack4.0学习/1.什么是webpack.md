在说 webpack 之前，我们先来回顾一下原始的网页开发是什么样的。

1. 新建项目 `demo`
2. `demo > index.html`
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>这是最原始的网页开发</title>
    </head>
    <body>
        <p>这是网页内容</p>
        <div id="root"></div>

        <!-- 引入创建的 js 文件 -->
        <script src="./index.js"></script>
    </body>
    </html>
    ```
3. `demo > index.js` 
    ```js
    var dom = document.getElementById('root')

    var el = document.createElement('div')
    el.innerText = '这是index.js'
    dom.append(el)

    var header = document.createElement('div')
    header.innerText = 'header'
    dom.append(header)

    var footer = document.createElement('div')
    footer.innerText = 'footer'
    dom.append(footer)
    ```

在随着前端技术的进步，我们 js 文件越来越多的时候，这种面向过程的编码方式，就暴露了很多缺点， 杂乱，重复，不易维护。

然后就通过 面向对象 的编程方式，来解决这些缺点。

1. 把 `index.js` 拆分， `header，footer` 我们单独写一个文件。  
    > demo 下面拆分成   
      index.html  
      index.js  
      header.js  
      footer.js  
    
2.  `demo > index.js` 
    ```js
    var dom = document.getElementById('root')

    var el = document.createElement('div')
    el.innerText = '这是index.js'
    dom.append(el)

    new Header();
    new Footer();
    ```
3. `demo > header.js` 
    ```js
    function Header() {
			var dom = document.getElementById('root')
			var header = document.createElement('div')

			header.innerText = '这是header.js'

			dom.append(header)
    }
    ```
4. `demo > footer.js` 
		```js
    function Footer() {
			var dom = document.getElementById('root')
			var footer = document.createElement('div')

			footer.innerText = '这是footer.js'

			dom.append(footer)
		}
    ```
5. `demo > index.html`
	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>这是最原始的网页开发</title>
	</head>
	<body>
			<p>这是网页内容</p>
			<div id="root"></div>
			<script src="./header.js"></script>
			<script src="./footer.js"></script>
			<script src="./index.js"></script>
	</body>
	</html>
	```
面向对象的编程方式虽然能复用，更易维护，但是又有了新的问题。
 - 会有依赖顺序，如果引入顺序错误的话，就出问题了。
 - js 文件数量多了，页面加载会变慢。
 - 错误追踪困难，代码不易读，不易维护。

至此，模块化方案诞生了，解决了我们的困扰。
AMD, CMD, ES Module

但是这些模块化的语法，浏览器是不能直接识别的，这时候 webpack 就登场了。
webapck 会把这些语法，转换成浏览器支持的语法。