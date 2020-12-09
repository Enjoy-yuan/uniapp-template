<template>
  <view>
    <van-grid :gutter="4" column-num="3">
      <van-grid-item use-slot v-for="(item, index) in indexInfo" :key="index">
        <view class="box">
          <view class="name">{{ item.name }}</view>
          <view class="number">{{ item.close }}</view>
          <view class="percentage">
            {{ (item.pctChange > 0 ? '+' : '') + Math.floor((item.close - item.open) * 100) / 100 }}
            {{ (item.pctChange > 0 ? '+' : '') + Math.floor(item.pctChange * 100) / 100 }}%
          </view>
        </view>
      </van-grid-item>
    </van-grid>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indexInfo: ''
    }
  },
  async created() {
    this.indexInfo = (await this.$api.getIndexInfo('20201105', 1)).data
    console.log(this.indexInfo)
  }
}
</script>

<style lang="scss">
.box {
  text-align: center;
  font-size: 24rpx;
  padding: 20rpx 0rpx;
  box-sizing: border-box;
  box-shadow: 0rpx 0rpx 8rpx 2rpx #eaecf1;
  border-radius: 16rpx;
  width: 100%;
  margin-bottom: 10rpx;
  .name {
    font-weight: 600;
  }
  .number {
    color: #e73131;
  }
  .percentage {
    color: #e73131;
    font-size: 18rpx;
  }
}
</style>
