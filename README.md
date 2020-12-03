# uniapp-template

## 1.命令行创建 uniapp 项目

- 输入命令：vue create -p dcloudio/uni-preset-vue uniapp-template
- 选择默认模板

## 2.启动项目

- 安装依赖：yarn
- 本地启动：yarn dev:mp-weixin
- 生产启动：yarn build:mp-weixin

## 3.使用 scss

- 安装依赖：yarn add sass sass-loader -D

## 4.使用 axios

- 安装依赖：yarn add axios axios-miniprogram-adapter -S
- 需到后台设置允许请求域名

## 5.使用 vant weapp

- 压缩包[下载地址](https://github.com/youzan/vant-weapp)
- 在 src 下创建 wxcomponents => vant 文件夹，将 dist 下的组件拷贝进来
- 在 pages.json 中使用 usingComponents 对组件进行引入
- 在 App.vue 中引入内置样式 @import '/wxcomponents/vant/common/index.wxss'

## 6.使用 ucharts

- 压缩包[下载地址](https://ext.dcloud.net.cn/plugin?id=271)
- [示例地址](http://doc.ucharts.cn/1172174)

## 7.使用 echarts

- 压缩包[下载地址](https://github.com/ecomfe/echarts-for-weixin)
- 微信小程序原生组件需要放置到 wxcomponents 文件夹内
- 在 pages.json 中引入组件
- 保留 ec-canvas 和 pages 文件夹即可
- 必须在项目中合适位置添加样式

```css
/**app.wxss**/
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
```

## 8.小程序分包

- 在 pages 的同级目录下创建 packageA 文件夹
- 修改配置需要重新启动项目，可在 dist 目录下找到对应的分包文件

```js
// pages.json分包配置
"subpackages": [
  {
    "root": "packageA",
    "pages": [
      {
        "path": "list/index"
      }
    ]
  }
],

// 页面跳转
<navigator url="/packageA/list/index" class="navigator">去list页</navigator>
```

## 9.自定义 tabbar

- 官方教程会闪屏

## 10.区分开发和生产环境

- 开发环境和生产环境分别位于 dist 文件夹下的 dev 和 build 文件夹
- 项目路径不同需要使用微信开发者工具分别打开

```js
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境')
} else {
  console.log('生产环境')
}
```

## 11.代码的格式化

- 新建.vscode 文件夹，在其内部新建 setting.json 文件
- 将.gitignore 中的.vscode 去掉

```js
{
    // 设置prettier扩展格式化2个空格
    "prettier.tabWidth": 2,
    // 设置prettier扩展格式化单引号
    "prettier.singleQuote": true,
    // 设置prettier扩展末尾不带分号
    "prettier.semi": false,
    // 设置prettier扩展末尾不带逗号
    "prettier.trailingComma": "none",
    // 设置prettier扩展代码宽度130
    "prettier.printWidth": 130
}
```
