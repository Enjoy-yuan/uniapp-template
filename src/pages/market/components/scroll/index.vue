<template>
  <view>
    <scroll-view class="scroll-view" scroll-x="true">
      <view class="scroll-view-item" v-for="(item, index) in indexInfo" :key="index">
        <view class="name">{{ item.name }}</view>
        <view class="number">{{ item.close }}</view>
        <view class="rise">
          <text>{{item.pctChange}}</text>
          <text>{{item.pctChange}}%</text>
        </view>
        <view class="money">
          <text>{{(item.money/100000000).toFixed(0)}}亿</text>
          <text>预:{{(item.money/100000000).toFixed(0)}}亿</text>
        </view>
      </view>
    </scroll-view>
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
    this.indexInfo = (await this.$api.getIndexInfo('20201105')).data
  }
}
</script>

<style lang="scss" scoped>
.scroll-view {
  width: 100%;
  white-space: nowrap;
  .scroll-view-item {
    &:first-child {
      margin-left: 30rpx;
    }
    display: inline-block;
    width: 260rpx;
    padding: 12rpx 18rpx;
    // height: 192rpx;
    margin-right: 30rpx;
    background-color: #fff;
    border-radius: 12rpx;
    box-sizing: border-box;
    overflow: hidden;
    .name {
    }
    .number {
      color: #e73131;
      font-size: 32rpx;
    }
    .rise {
      display: flex;
      justify-content: space-between;
      color: #e73131;
      font-size: 28rpx;
    }
    .money {
      display: flex;
      justify-content: space-between;
      font-size: 24rpx;
      text:last-child {
        color: #999999;
      }
    }
  }
}
</style>
