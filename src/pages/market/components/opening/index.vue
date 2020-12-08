<template>
  <view class="status">
    {{ statusData.marketStatus === 'open' ? '开盘中' : '休市' }}
    （<text class="hot">{{ statusData.marketSentiment }}</text> ）
    <view class="date">{{ statusData.tradeDate }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      statusData: ''
    }
  },
  async created() {
    this.statusData = (await this.$api.getStatus()).data
  }
}
</script>

<style lang="scss" scoped>
.status {
  padding: 30rpx;
  font-size: 36rpx;
  color: #dfb17f;
  .hot {
    font-size: 28rpx;
  }
  .date {
    margin-top: 4rpx;
    color: #777d9d;
    font-size: 24rpx;
  }
}
</style>
