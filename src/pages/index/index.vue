<template>
  <view class="content">
    <navigator url="/packageA/list/index" class="navigator">去list页</navigator>
    <van-button type="primary">主要按钮</van-button>
    <child fatherToChild="我是来自父组件的数据" @fn="fn"></child>
    {{ childToFather }}
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      activeNames: ['1'],
      imgUrl: '../../static/img/logo.png',
      childToFather: ''
    }
  },
  onLoad() {
    // this.$api.getData2().then((res) => {
    //   this.imgUrl = 'https://imgchr.com/i/Dbcdh9'
    //   console.log(res[0].entrance_img)
    // })
    this.$api
      .getData({
        method: 'get_token'
      })
      .then((res) => {
        // console.log(res)
        this.$api
          .getData({
            method: 'get_all_securities',
            token: res,
            code: 'stock',
            date: '2019-01-15'
          })
          .then((res) => {
            // console.log(res)
          })
      })
  },
  methods: {
    fn(e) {
      this.childToFather = e.detail.childToFather
      console.log(e.detail.childToFather)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  .logo {
    height: 700rpx;
    width: 750rpx;
    background-color: $uni-color-primary;
  }
}
</style>
