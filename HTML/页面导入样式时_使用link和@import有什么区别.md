# 页面导入样式时，使用link和@import有什么区别？

1. `link` 属于XHTML标签，`@import`属于CSS提供的语法规则，只能引入CSS，而`link`可以定义rel属性等等作用。
2. `link` 是XHTML标签，没有兼容问题，`@import`只支持IE5以上才能被识别。
3. `link`会在页面加载时同时加载，`@import` 要在页面加载完成后加载。
4. `link`可以通过JS操作DOM方法动态创建，而`@import`不行。