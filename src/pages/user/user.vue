<template>
  <view class="page-noreserve">
     <van-notice-bar
      text="最低佣金开户，股票万 1 免 5，基金万 0.5 免 5，可转债万 0.5 免 1"
    />
    <view class="sorry">
      <view>
        <image class="sorry-img" src="/static/me.png">
      </view>
      <view class="sorry-info">扫一扫上面二维码，加我微信！</view>
    </view>
  </view>
</template>

<script lang="ts">
</script>

<style lang="scss" scoped>
// 没有预约页面样式
.page-noreserve {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #fff;
  .sorry {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15vh;
    .sorry-img {
      width: 60vw;
      // height: auto;
      // height: 280rpx;
    }
    .sorry-info {
      color: #9a9a9a;
      font-size: 30rpx;
      margin-top: 40rpx;
    }
  }
}
</style>
