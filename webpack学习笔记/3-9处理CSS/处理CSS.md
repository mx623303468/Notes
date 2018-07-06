### 引入CSS

- `style-loader`
  - `style-loader/url`
  - `style-loader/useable`
- `css-loader`

### 安装 loader

- `npm install style-loader css-loader --save-dev`

- 在 `webpack.config.js` 配置文件中，在 `module` 中添加 。

  - ```
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          }
        ]
      }
    ```

