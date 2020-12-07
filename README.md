# uniapp-template

## 1.命令行创建 uniapp 项目

- 输入命令：vue create -p dcloudio/uni-preset-vue uniapp-template
- 选择默认模板

## 2.启动项目

- 安装依赖：yarn
- 本地启动：yarn dev:mp-weixin
- 生产启动：yarn build:mp-weixin

## 3.代码的格式化

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

## 4.使用 scss

- 安装依赖：yarn add sass sass-loader -D

## 5.使用 axios

- 安装依赖：yarn add axios axios-miniprogram-adapter -S
- 需到后台设置允许请求域名

## 6.使用 vant weapp

- 压缩包[下载地址](https://github.com/youzan/vant-weapp)
- 在 src 下创建 wxcomponents => vant 文件夹，将 dist 下的组件拷贝进来
- 在 pages.json 中使用 usingComponents 对组件进行引入
- 在 App.vue 中引入内置样式 @import '/wxcomponents/vant/common/index.wxss'

## 7.小程序分包

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

## 8.区分开发和生产环境

- 开发环境和生产环境分别位于 dist 文件夹下的 dev 和 build 文件夹
- 项目路径不同需要使用微信开发者工具分别打开

```js
if (process.env.NODE_ENV === 'development') {
  console.log('开发环境')
} else {
  console.log('生产环境')
}
```

## 9.使用 ucharts

- 压缩包[下载地址](https://ext.dcloud.net.cn/plugin?id=271)
- [示例地址](http://doc.ucharts.cn/1172174)

## 10.使用 echarts-for-weixin(弃用)

- 压缩包[下载地址](https://github.com/ecomfe/echarts-for-weixin)
- 微信小程序原生组件需要放置到 wxcomponents 文件夹内
- 在 pages.json 中引入组件
- 保留 ec-canvas 和 pages 文件夹即可
- 必须在项目中合适位置添加样式
- 弃用原因：只能作为页面 Page 来引入，但是项目一般需要的是自定义组件 Component，这样才能正常传参，改造成 vue 页面 onInit 函数无法传递，还会有一些其他的报错
- [官方 issue](https://github.com/ecomfe/echarts-for-weixin/issues/572)

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

## 11.使用 echarts-for-wx-uniapp

- 压缩包[下载地址](https://github.com/Zhuyi731/echarts-for-wx-uniapp)
- 将 uni-ec-canvas 文件夹拷贝到 static 目录下
- echarts.js 可使用自定义构建来减小文件大小
- 需加上 force-use-old-canvas="true"，否则页面滚动会有 bug

```js
<uni-ec-canvas class="uni-ec-canvas" :ec="ec" force-use-old-canvas="true"></uni-ec-canvas>
```

## 12.空间占用情况

- 使用 ucharts 大概占空间 1916 - 1778 = 138k，不引入则不占空间
- 使用 echarts 大概占空间 1916 - 1377 = 539k，不引入则不占空间
- 使用 vant 组件 大概占空间 1916 - 1579 = 337k，无论是否在 package.json 中引入都将占用空间，需移除 src 下的 wxcomponents 文件夹
- dev 打包体积 1916k，使用 build 打包体积 1340k，预览 1450k

## 13.注意点记录

- 按官方教程自定义 tabbar 会闪屏
- 使用 echarts-for-weixin 时无法向原生小程序组件传参
- 真机调试接口请求异常，需正确配置 ssl 证书
- 原生微信小程序自定义组件必须放置在 wxcomponents 文件夹下，子组件向父组件传参通过 triggerEvent
- uniapp 中无法使用构建 npm
- 消除图片底部自带间距，使用 flex 布局
- 设置背景色可以直接在 page 标签下设置
- 类保存数据不能保存状态，new 出来的对象才可以保存状态

## 14.小程序项目难点

- 图片的瀑布流
- spu 是商品，sku 是单品 产品的多级选项联动

## 15.创建本地服务

- json-server --watch --port 53000 all.json

## 16
