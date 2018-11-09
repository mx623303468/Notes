# React.js

## 1. React简介
- React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架都不满意，就决定自己写一套，用来假设 [instagram(照片墙)](http://instagram.com/) 这个网站。做出来以后，发现这套东西很好用。 **就在2013年5月开源了**。
- 由于 React 的**设计思想及其独特**，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用。从开源到现在变化比较平稳。

- 这里要说两个概念：
  - library (库)：
      - 什么是库？  
        **小而巧**的称为库。只提供了特定的 API， 优点就是 *船小好调头*  
        例如：JQuery, Zepto  
        可以很方便的从一个库切换到另外一个库，代码几乎不会改变。
  - Framework (框架)：
    - 什么框架？  
      **大而全**的是框架。框架提供了一整套的解决方案；  
      例如：vue + vue-router + vuex + axios + UI框架 也称为全家桶；  
      所以，如果在项目中途，想切换到另外的框架，是比较困难的。

## 2. 前端三大主流框架

> 三大框架一大抄

- Angular.js：**最早**的前端 js 框架，是谷歌的，1.0 版本在2009年就问世了，刚开始是 MVC 模式的， 不支持组件化开发，一直到 2.0 版本才开始转变。并且 Angular 的学习曲线比较陡，上手难。也支持使用 TS(TypeScript)进行编程。[github star](https://github.com/angular/angular)

- Vue.js： 目前**最火**的一门前端框架，作者是中国人，核心开发团队也有很多中国人，详细的中文官方文档，详尽的 API ，相比其他框架对我们要友好一些。[github star](https://github.com/vuejs/vue)

- React.js: **最流行**的一门框架。  
[github star](https://github.com/facebook/react)

## 3. 模块化、组件化

- 什么是模块化？
  - 从 **代码** 的角度来进行分析的，把一些可复用的代码，抽离为单个模块，便于项目的维护和开发；

- 什么是组件化？
  - 从 **UI界面** 的角度来进行分析的，把一些可复用的 UI 元素抽离为单独的组件。也是便于项目的维护和开发；

- 组件化的好处是什么？
  - 代码的 **低耦合**、**高复用**、**热插拔**
  - 随着项目的增大，组件越来越多，可以很方便就能把现有的组件，拼接成一个完成的页面。

- Vue 是如何实现组件化的？
  - 第一种 通过  
  ```
  vue.component('app', {
    template: '<div></div>'
  })
  ```

  - 第二种 通过 `.vue` 文件

    |          |      |
    | -------- | ---- |
    | template | 模版 |
    | script   | 行为 |
    | style    | 样式 |

    ```javascript
    <template>
      <div class="app">
        {{ message }}
      </div>
    </template>

    <script>
      export default {
        data () {
          return {
            message: "这是一段消息"
          }
        }
      }
    </script>

    <style>
      .app {
        width: 100px;
        height: 100px;
        margin: 100px auto;
        background: #f4f4f4;
      }
    </style>
    ```
    我们在项目中都是使用 `.vue` 文件的方式，一个文件就是一个组件。

## 4. 开发团队方面
  - React 是由 FaceBook 前端官方团队维护更新。实力比较雄厚。
  - Vue 最早是有 作者 尤雨溪 专门维护的，从2.x版本后，有了一个以 尤雨溪 为主的开源团队开发维护。

## 5. 移动APP开发体验方面
  - React, 结合 [ReactNative](https://facebook.github.io/react-native/) 提供了无缝迁移到移动APP的开发体验。目前用的比较多。
  - Vue， 结合 [weex](http://weex.apache.org/cn/guide/) 也可以做移动APP。

## 6. React 中的几个核心概念

  ### 虚拟DOM (Virtual Document Object Model)
  - DOM 的本质是什么
    - 是浏览器中的概念，用 JS 对象来表示页面上的元素，并提供了操作 DOM 对象的API
  - 什么是 React 中的虚拟DOM 
    - 是框架里面的概念，是*程序员人为*用 JS 对象来模拟页面上的 DOM 和 DOM 嵌套；
  - 为什么要实现虚拟DOM (虚拟DOM有什么好处)
    - 可以让页面中的 DOM 元素更高效的更新。
  - 原生DOM 和 虚拟DOM 有什么区别：
    - 原生DOM
    - 虚拟DOM
  ### diff 算法