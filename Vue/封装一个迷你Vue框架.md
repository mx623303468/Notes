# 实现VUE
> 实现vue的部分核心功能



## MVVM框架是什么？

- M （Model，模型层）
- V（View，试图层）
- VM（ViewModel，视图模型，V与M连接的桥梁）



- MVVM框架主要是实现了数据的双向绑定
  - 当M层数据进行修改时，VM层会监测到变化，并且通知V层进行相应的修改
  - 修改V层，则会通知M层进行数据修改
  - MVVM框架的实现了视图与模型层的相互解耦

## 双向数据绑定的几种方式

- 发布 - 订阅者模式

  - 一般通过pub、sub的方式实现数据和视图的绑定，但是使用起来比较麻烦。

- 脏值检查

  - angular.js 1.x 是通过脏值检测的方式对比数据是否有变更，来决定是否更新视图。类似于通过定时器轮询的方式检测数据改变。

- 数据劫持

  - vue.js 则是采用数据劫持结合发布订阅模式的方式。通过 `Object.defineProperty()` 来劫持各个属性的 `setter` ，`getter` 。在数据变动时发布消息给订阅者，触发相应的监听回调。

    *vuej.js 不兼容 IE8 以下的版本*


## 封装迷你版的Vue

- 创建一个 `miniVue` 文件夹，作为项目根目录。

- 根目录下创建 `src` 目录以及 `index.html`。

- 在 `src` 目录下创建一个 `vue.js`

- 此时，回想一下创建vue的实例，需要一个传入一个挂载点 `el` ，一个数据体 `data`，基于此，我们在 `vue.js` 中创建一个 vue 的构造函数，并传入指定的参数。

  ```js
  # vue.js
  /* 定义一个类，用于创建 vue 的实例 */
  class Vue {
    // options 默认是一个空对象，防止没有传参报错
    constructor(options = {}) {
      // 给vue实例增加属性
      this.$el = options.el
      this.$data = options.data
      
      // 如果有el 则进行解析
      if(this.$el) {
        // 实例化 Compile 解析模板，传入挂载点和vue实例
        new Compile(this.$el, this)
      }
    }
  }
  ```

- 创建一个 `compile.js` 文件，创建 `Compile` 类，用来专门解析模板内容

  ```js
  # compile.js

  class Complie {
    // el：模板
    // vm: vue实例
    constructor(el, vm) {
      this.el = typeOf el === 'string' ? document.queryselector(el) : el
      this.vm = vm
      
      // 编译模板
      if (this.el) {
        // 1. 把el中的所有子节点都放入到内存中， fragment
        let fragment = this.nodeToFragment(this.el)
        // 2. 在内存中编译 fragment
        this.compile(fragment)
        // 3. 把 fragment 一次性的添加到页面
        this.el.appendChild(fragment)
      }
    }
    
    /* 核心方法 */
    
    /**
    * 添加节点到文档碎片中
    * @param 
    */
    nodeToFragment(node) {
      // 创建一个 fragment
      let fragment = document.createDocumentFragment()
      
      // 把el中所有的子节点挨个添加到文档碎片中
      let childNodes = node.childNodes // 获得el下的 NodeList
      // 调用工具方法转换为数组，并遍历新数组，同时把所有的子节点添加到文档碎片中
      this.toArray(childNodes).forEach(node => {
        fragment.appendChild(node)
      })
      return fragment
    }

    /**
    * 在内存中编译文档碎片
    * @param {*} fragment
    */
    compile(fragment) {
      let childNodes = fragment.childNodes
      this.toArray(childNodes).forEach(node => {
        // 编译子节点
        // 如果是元素，需要解析指令
        if (this.isElementNode(node)) {
          this.compileElement(node)
        }
        // 如果是文本节点，需要解析插值表达式
        if (this.isTextNode(node)) {
          this.compileText(node)
        }
        // 如果此节点还有子节点，就需要递归解析
        if (node.childNodes && node.childNodes.length > 0) {
          this.compile(node)
        }
      })
    }

    /**
    * 解析HTML标签
    *
    */
    compileElement(node) {
      // 1. 获取当前节点的所有属性
      let attributes = node.attributes
      this.toArray(attributes).forEach(attr => {
        // 2. 解析vue指令，所有 v- 开头的属性
        let attrName = attr.name
        // 如果是一个指令
        if (this.isDirective(attrName)) {
          let attrValue = attr.value
          let type = attrName.slice(2)

          // 如果是 text
          if (type === 'text') {
            node.textContent = this.vm.$data[attrValue]
          }
          // 如果是 html
          if (type === 'html') {
            node.innerHTML = this.vm.$data[attrValue]
          }
        }
      })
    }

    /**
    * 解析文本节点
    */
    compileText(node) {}
    
    /* 工具方法 */
    
    /**
    * 转换为数组
    */
    toArray(likeArray) {
      return [].slice.call(likeArray)
    }


    /**
    * 是否是元素节点
    *
    */
    isElementNode(node) {
      // nodeType: 节点的类型 1：元素节点   3：文本节点
      return node.nodeType === 1
    }

    /**
    * 是否是文本节点
    *
    */
    isTextNode(node) {
      // nodeType: 节点的类型 1：元素节点   3：文本节点
      return node.nodeType === 3
    }

    /**
    * 是否是指令
    */
    isDirective(attrName) {
      return attrName.startsWith('v-')
    }
  }
  ```

  