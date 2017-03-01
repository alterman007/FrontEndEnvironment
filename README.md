# FrontEndEnvironment
搭建前端开发环境 with sublime

## GitHub
- 远程新建项目克隆到本地
    - git clone git@github.com:alterman007/FrontEndEnvironment.git
- 添加文件 进行跟踪
    - git add fileName
- 提交至仓库
    - git commit -m 'comment'
- 推送到远程
    - git push origin master
- 忽略文件 .gitignore

## eslint
- 安装sublime插件
    - Package Control: 1) SublimeLinter 2) SublimeLinter-contrib-eslint
- 安装全局环境
    - npm i eslint -g
- 安装本地环境 ==注意版本== 相关插件需要一些依赖项 如webpack
```JSON
{
    "eslint": "^3.11.1",
    "eslint-config-airbnb": "13.0.0",
    "eslint-config-airbnb-base": "10.0.1",
    "eslint-import-resolver-webpack": "0.8.0",
    "eslint-plugin-import": "2.2.0",
    "eslint-plugin-jsx-a11y": "2.2.3",
    "eslint-plugin-react": "^6.7.1",
    "eslint-plugin-redux-saga": "0.1.5",
}
```
- 配置规则  .eslintrc
```JSON
{
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true,
    "es6": true
  },
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-parens": [
      "error",
      "always"
    ],
    "arrow-body-style": [
      2,
      "as-needed"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "import/imports-first": 0,
    "import/newline-after-import": 0,
    "import/no-dynamic-require": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "indent": [
      2,
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/aria-props": 2,
    "jsx-a11y/heading-has-content": 0,
    "jsx-a11y/href-no-hash": 2,
    "jsx-a11y/label-has-for": 2,
    "jsx-a11y/mouse-events-have-key-events": 2,
    "jsx-a11y/role-has-required-aria-props": 2,
    "jsx-a11y/role-supports-aria-props": 2,
    "max-len": 0,
    "newline-per-chained-call": 0,
    "no-console": "off",
    "no-param-reassign": "off",
    "no-use-before-define": 0,
    "prefer-template": 2,
    "class-methods-use-this": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-first-prop-new-line": [
      2,
      "multiline"
    ],
    "react/jsx-filename-extension": 0,
    "react/jsx-no-target-blank": 0,
    "react/require-extension": 0,
    "react/self-closing-comp": 0,
    "require-yield": 0
  }
}
```

## webpack
- 安装webpack,babel及相关loader
    - npm i webpack -g
```JSON
{
    "babel-core": "^6.21.0",
    "babel-loader": "^6.2.10",
    "babel-polyfill": "^6.20.0",
    "babel-preset-es2015": "^6.18.0",
    "babel-preset-react": "^6.16.0",
    "babel-preset-stage-2": "^6.18.0",
    "babel-plugin-transform-class-properties": "^6.23.0",
    "babel-plugin-transform-decorators-legacy": "^1.3.4",
    "webpack": "^1.14.0"
}
```
- webpack配置文件
```javascript
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'boundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
};
```
- webpack-dev-server
    - npm install webpack-dev-server -g
```JSON
{
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "webpack-dev-server --inline"
    }
}
```

## markdown插件
- MarkdownEditing
