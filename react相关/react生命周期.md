# react 生命周期函数

> 什么是生命周期函数？
>
> ​	生命周期函数就是在组件运行到某一个时刻的时候，会自动执行的函数。



![img](.\react生命周期.assets\timg.jpg) 


![img](.\react生命周期.assets\1.jpg)


## 1. `initialization`

- `setup props and state`	

## 2. `Mounting`

-  `componentWillMount`
  - 在组件即将被第一次挂载到页面的时刻自动执行  
- `componentDidMount`
  - 在组件第一次挂载到页面完成后自动执行



## 3. `Updation`

- `shouldComponentUpdate`
  - 组件被更新之前，会自动执行
    - 此方法返回布尔值，返回 true 时，组件会被更新，返回 false 时，组件不会被更新。

- `componentWillUpdata`
  - 组件被更新之前，会自动执行，但是要在 `shouldComponentUpdata` 执行后被执行。
  - 如果 `shouldComponentUpdate` 返回 true 时会执行，如果 `shouldComponentUpdate` 返回 false 时则不会执行。

- `componentDidUpdate`
  - 组件被更新完成后，会自动执行。

- `componentWillReceiveProps`

  - 子组件的生命周期函数

  - 一个组件要从父组件接收参数。当父组件的 `render` 函数被重新执行了，子组件的这个生命周期函数就会执行
  - 如果这个组件第一次存在于父组件中，不会被执行。
  - 如果这个组件已经存在于父组件中，才会被执行。

## 4. `Unmounting`

- `componentWillUnmount`
  - 子组件的生命周期函数
  - 当这个组件即将被从页面剔除的时候，会被执行