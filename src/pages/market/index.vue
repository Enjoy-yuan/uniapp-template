<template>
  <view class="content">
    行情
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      activeNames: ['1'],
      imgUrl: '../../static/img/logo.png'
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
  methods: {}
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
