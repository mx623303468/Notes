# 关于 react 性能优化的小点记录

- 函数 `this` 的作用 `bind` ，都放在`constructor` 中。
- 使用稳定的 `key`  值，在diff 比对中能重用组件。
- 子组件 使用 `shouldComponentUpdate` 生命周期函数，减少 `render` 函数的执行频率。