<template>
  <view class="content">
    <view class="tab-text">
      <view :class="['tab-item', tab == 0 ? ' active' : '']" @click="changeItem" data-item="0">
        全球指数
      </view>
      <view :class="['tab-item', tab == 1 ? ' active' : '']" @click="changeItem" data-item="1">
        板块分析
      </view>
      <view :class="['tab-item', tab == 2 ? ' active' : '']" @click="changeItem" data-item="2">
        北向资金
      </view>
      <view :class="['tab-item', tab == 3 ? ' active' : '']" @click="changeItem" data-item="3">
        融资融券
      </view>
    </view>

    <view class="tab-content">
      <tab1 :class="tab == 0 ? '' : 'display'"></tab1>
      <tab2 :class="tab == 1 ? '' : 'display'"></tab2>
      <tab3 :class="tab == 2 ? '' : 'display'"></tab3>
      <tab4 :class="tab == 3 ? '' : 'display'"></tab4>
    </view>
  </view>
</template>

<script>
import tab1 from './tabs/tab1.vue'
import tab2 from './tabs/tab2.vue'
import tab3 from './tabs/tab3.vue'
import tab4 from './tabs/tab4.vue'

export default {
  components: {
    tab1,
    tab2,
    tab3,
    tab4
  },
  data() {
    return {
      tab: 0
    }
  },
  methods: {
    changeItem: function(e) {
      this.tab = e.target.dataset.item
    }
  }
}
</script>

<style scoped>
.content {
  margin-bottom: 20rpx;
  margin-left: 30rpx;
}
.tab-text {
  background-color: #ffffff;
  color: #333;
  margin: 32rpx 32rpx 0 0;
  padding: 30rpx 26rpx 20rpx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 14rpx 14rpx 0 0;
}
.tab-item {
  font-family: PingFangSC-Regular, PingFang SC;
  font-size: 28rpx;
  font-weight: 400;
  color: #666666;
  padding: 3rpx;
}
.active {
  font-size: 36rpx;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #333333;
  border-bottom: 8rpx solid #dfb17f;
}
.tab-content {
  background-color: #ffffff;
  color: #333;
  margin: 0 32rpx 32rpx 0;
  border-radius: 0 0 14rpx 14rpx;
  overflow: auto;
  padding: 0 26rpx;
}
.display {
  /* display: none; */
  /* 兼容echarts的显示和隐藏 */
  position: absolute;
  top: -9999rpx;
  left: -9999rpx;
}
</style>
