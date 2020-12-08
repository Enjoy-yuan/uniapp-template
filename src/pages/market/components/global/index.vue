<template>
  <view class="tabs">
    <van-tabs color="#DFB17F" :active="activeIndex" animated swipeable>
      <van-tab title="全球指数">内容 1</van-tab>
      <van-tab title="板块分析">内容 2</van-tab>
      <van-tab title="北向资金">内容 3</van-tab>
      <van-tab title="融资融券">内容 4</van-tab>
    </van-tabs>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  padding: 20rpx;
  margin-left: 30rpx;
  margin-right: 30rpx;
  border-radius: 12rpx;
  height: 600rpx;
  border: 1px solid #000;
  background-color: #fff;
}
.tab-active-class{
  font-size: 50rpx;
}
</style>
