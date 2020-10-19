# uniapp-cli

## 1.命令行创建 uniapp 项目

- 输入命令：vue create -p dcloudio/uni-preset-vue try-uniapp
- 选择默认模板

## 2.启动项目

- 安装依赖：yarn install
- 本地启动：yarn dev:mp-weixin
- 生产启动：yarn build:mp-weixin

## 3.使用 scss

- 安装依赖：yarn add sass sass-loader -D

## 4.使用 axios 

- 安装依赖：yarn add axios axios-miniprogram-adapter -S
- 需到后台设置允许请求域名

## 5.使用 vant weapp

- 压缩包[下载地址](https://github.com/youzan/vant-weapp)
- 在src下创建wxcomponents => vant文件夹，将dist下的组件拷贝进来
- 在 pages.json 中使用 usingComponents 对组件进行引入
- 在 App.vue 中引入内置样式 @import '/wxcomponents/vant/common/index.wxss'

## 6.使用ucharts 

- 压缩包[下载地址](https://ext.dcloud.net.cn/plugin?id=271)
- [示例地址](http://doc.ucharts.cn/1172174)
