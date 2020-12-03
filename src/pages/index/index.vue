<template>
  <view class="content">
    <navigator url="/packageA/list/index" class="navigator">去list页</navigator>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
      activeNames: ['1']
    }
  },
  onLoad() {
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
    onChange(event) {
    //   console.log(event)
      this.activeNames = event.detail
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
