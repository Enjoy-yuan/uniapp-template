# try-uniapp

## 1.命令行创建 uniapp 项目

- 输入命令：vue create -p dcloudio/uni-preset-vue try-uniapp
- 选择模板：默认模板（Typescript）

## 2.删除 package.json 中不需要的命令和依赖

- 使用 npm 安装依赖，使用 cnpm 项目可能无法正常启动
- 必须保留@dcloudio/uni-h5 依赖，否则项目将无法正常启动

```js
// pages.json
{
  "name": "try-uniapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "cross-env NODE_ENV=development UNI_PLATFORM=mp-weixin vue-cli-service uni-build --watch",
    "build": "cross-env NODE_ENV=production UNI_PLATFORM=mp-weixin vue-cli-service uni-build"
  },
  "dependencies": {
    "@dcloudio/uni-h5": "^2.0.0-27920200618002",
    "@dcloudio/uni-helper-json": "*",
    "@dcloudio/uni-mp-weixin": "^2.0.0-27920200618002",
    "@dcloudio/uni-stat": "^2.0.0-27920200618002",
    "core-js": "^3.6.5",
    "flyio": "^0.6.2",
    "regenerator-runtime": "^0.12.1",
    "vue": "^2.6.11",
    "vue-class-component": "^6.3.2",
    "vue-property-decorator": "^8.0.0",
    "vuex": "^3.2.0"
  },
  "devDependencies": {
    "@babel/plugin-syntax-typescript": "^7.2.0",
    "@dcloudio/types": "*",
    "@dcloudio/uni-automator": "^2.0.0-27920200618002",
    "@dcloudio/uni-cli-shared": "^2.0.0-27920200618002",
    "@dcloudio/uni-migration": "^2.0.0-27920200618002",
    "@dcloudio/uni-template-compiler": "^2.0.0-27920200618002",
    "@dcloudio/vue-cli-plugin-hbuilderx": "^2.0.0-27920200618002",
    "@dcloudio/vue-cli-plugin-uni": "^2.0.0-27920200618002",
    "@dcloudio/vue-cli-plugin-uni-optimize": "^2.0.0-27920200618002",
    "@dcloudio/webpack-uni-mp-loader": "^2.0.0-27920200618002",
    "@dcloudio/webpack-uni-pages-loader": "^2.0.0-27920200618002",
    "@vue/cli-plugin-babel": "^4.4.0",
    "@vue/cli-plugin-typescript": "*",
    "@vue/cli-service": "^4.4.0",
    "babel-plugin-import": "^1.11.0",
    "cross-env": "^7.0.2",
    "mini-types": "*",
    "miniprogram-api-typings": "*",
    "postcss-comment": "^2.0.0",
    "typescript": "^3.0.0",
    "vue-template-compiler": "^2.6.11"
  },
  "browserslist": [
    "Android >= 4",
    "ios >= 8"
  ],
  "uni-app": {
    "scripts": {}
  }
}
```

## 3.启动项目

- 安装依赖：npm i
- 本地启动：npm run serve
- 生产启动：npm run build

## 4.删除 index.html 中不需要的代码

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
    />
    <title>
      <%= htmlWebpackPlugin.options.title %>
    </title>
  </head>
  <body>
    <noscript>
      <strong>Please enable JavaScript to continue.</strong>
    </noscript>
    <div id="app"></div>
  </body>
</html>
```

## 5.自定义导航条

- 当某些页面需要去掉导航条撑满全屏时使用，此时页面内元素会上移到顶部
- 需要对导航条高度做适配处理

```js
// 在globalStyle中添加
"navigationStyle": "custom"

// App.vue
<script>
export default {
  globalData: {
    headerHeight: 0,
    statusBarHeight: 0,
    isPhoneX: false
  },
  onLaunch() {
    const { model, system, statusBarHeight } = wx.getSystemInfoSync();
    let headHeight;
    if (/iphone\s{0,}x/i.test(model)) {
      this.globalData.isPhoneX = true;
      headHeight = 88;
    } else if (system.indexOf('Android') !== -1) {
      headHeight = 68;
    } else {
      headHeight = 64;
    }
    this.globalData.headerHeight = headHeight;
    this.globalData.statusBarHeight = statusBarHeight;
  }
};
</script>

// vue页面
<view class="title" :style="{ paddingTop: (headerHeight + statusBarHeight) / 2 - 12 + 'px' }">
</view>
```

## 6.使用 vant weapp 组件库

- 在 package.json 中添加 "postinstall": "bower install"和 bower 依赖
- 新建.bowerrc，bower.json 文件
- 在 pages.json 中使用 usingComponents 对组件进行引入
- .gitignore 中添加 wxcomponents/
- 当 npm i 时会自动生成 wxcomponents 文件夹
