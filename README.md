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

## 4.自定义导航条

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

## 5.使用 vant weapp 组件库

- 在 package.json 中添加 "postinstall": "bower install"和 bower 依赖
- 新建.bowerrc，bower.json 文件
- 在 pages.json 中使用 usingComponents 对组件进行引入
- .gitignore 中添加 wxcomponents/
- 在 App.vue 中引入 vant weapp 内置样式 @import '/wxcomponents/vant/common/index.wxss';
- 当 npm i 时会自动生成 wxcomponents 文件夹
- 也可直接创建 wxcomponents 文件夹，将 vant weapp 组件手动拷贝进来

## 6.使用 scss

- 安装依赖 sass，sass-loader

## 7.封装 axios 请求

- 安装依赖：axios，axios-miniprogram-adapter
- 需到后台设置允许请求域名

## 8.使用 vuex

- 安装依赖 vuex-class
- 新建文件夹 store，新建文件 index.ts，在 main.ts 中引入并挂载到 vue 上

```js
// main.ts
import store from "@/store";

Vue.prototype.$store = store;
```

## 9.typescript 使用

- 在 vue 文件中引用组件时，用绝对路径会报找不到该组件的警告，可换成相对路径
- 在引入 state 时必须带上!非空判断，不然会报错

```js
// 此时报警告
import ShareCom from "@/components/ShareCom.vue";
// 换成相对路径
import ShareCom from "../../components/ShareCom.vue";
```
