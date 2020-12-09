<template>
  <view class="sector-analysis">
    <view class="tab">
      <view class="tab-text">
        <view
          :class="['tab-item', tab == 0 ? ' active' : '']"
          @click="changeItem"
          data-item="0"
        >
          概念
        </view>
        <view
          :class="['tab-item', tab == 1 ? ' active' : '']"
          @click="changeItem"
          data-item="1"
        >
          ⾏业
        </view>
        <view
          :class="['tab-item', tab == 2 ? ' active' : '']"
          @click="changeItem"
          data-item="2"
        >
          板块
        </view>
      </view>
      <view class="tab-content">
        <view :class="tab == 0 ? '' : 'display'">
          <treeMap :echartsData="conceptData.slice(0, 10)"></treeMap>
        </view>
        <view :class="tab == 1 ? '' : 'display'">
          <treeMap :echartsData="industryData.slice(0, 10)"></treeMap>
        </view>
        <view :class="tab == 2 ? '' : 'display'">
          <treeMap :echartsData="areaData.slice(0, 10)"></treeMap>
        </view>
      </view>
    </view>
    <view class="today-plate">
      <view class="plate-header">
        <view class="title">今⽇板块</view>
        <view class="more">查看全部板块</view>
      </view>
      <view class="plate-boxs">
        <view class="plate-box">
          <text class="label">热⻔概念</text>
          <div class="content">
            <view
              class="box"
              v-for="(item, index) in conceptData.slice(0, 6)"
              :key="index"
            >
              <view class="name">{{ item.conceptName }}</view>
              <view class="proportion">
                {{ Number(item.pchangeRange).toFixed(2) }}%
              </view>
            </view>
          </div>
        </view>
        <view class="plate-box">
          <text class="label">热⻔行业</text>
          <div class="content">
            <view
              class="box"
              v-for="(item, index) in industryData.slice(0, 6)"
              :key="index"
            >
              <view class="name">{{ item.industryName }}</view>
              <view class="proportion">
                {{ Number(item.pchangeRange).toFixed(2) }}%
              </view>
            </view>
          </div>
        </view>
        <view class="plate-box">
          <text class="label">热⻔板块</text>
          <div class="content">
            <view
              class="box"
              v-for="(item, index) in areaData.slice(0, 6)"
              :key="index"
            >
              <view class="name">{{ item.areaName }}</view>
              <view class="proportion">
                {{ Number(item.pchangeRange).toFixed(2) }}%
              </view>
            </view>
          </div>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import treeMap from './treeMap'
export default {
  components: { treeMap },
  data() {
    return {
      tab: 0,
      conceptData: [],
      industryData: [],
      areaData: [],
    }
  },
  created() {
    // 概念
    this.$api.getConcept('20201029').then(res => {
      this.conceptData = res.data
    })
    // 行业
    this.$api.getIndustry('20201029').then(res => {
      this.industryData = res.data
    })
    // 板块
    this.$api.getArea('20201029').then(res => {
      this.areaData = res.data
    })
  },
  methods: {
    changeItem: function (e) {
      this.tab = e.target.dataset.item
    },
  },
}
</script>
<style lang="scss" scoped>
.tab {
  .tab-text {
    display: flex;
    justify-content: space-between;
    .tab-item {
      background-color: #f5f5f5;
      color: #999999;
      width: 200rpx;
      height: 60rpx;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16rpx;
    }
    .active {
      background-color: #dfb17f;
      color: #fff;
    }
  }
  .tab-content {
    height: 400rpx;
    .display {
      position: absolute;
      top: -9999rpx;
      left: -9999rpx;
    }
  }
}
.sector-analysis {
  font-size: 24rpx;
  padding-bottom: 10rpx;
  .today-plate {
    .plate-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20rpx;
      .title {
        font-size: 32rpx;
        color: #333333;
        border-left: 8rpx solid #dfb17f;
        font-weight: 600;
        padding-left: 20rpx;
      }
      .more {
        color: #333;
      }
    }
  }
  .plate-boxs {
    white-space: nowrap;
    overflow: scroll;
    width: 100%;
    .plate-box {
      box-shadow: 4rpx 6rpx 10rpx 6rpx #eaecf1;
      border-radius: 16rpx;
      display: inline-block;
      width: 560rpx;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      &:last-child {
        margin-right: 0rpx;
      }
      .label {
        background: linear-gradient(
          316deg,
          #dfb17f 0%,
          #f7d5b0 89%,
          #f9d7b3 100%
        );
        padding: 6rpx;
        color: #fff;
        border-top-left-radius: 16rpx;
        border-bottom-right-radius: 16rpx;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding: 20rpx;
        .box {
          padding: 10rpx;
          width: 150rpx;
          text-align: center;
          overflow: hidden;
          font-size: 20rpx;
          margin-top: 10rpx;
          border-radius: 12rpx;
          box-shadow: 0rpx 0rpx 8rpx 2rpx #eaecf1;
          .name {
            color: #333333;
          }
          .proportion {
            color: #e73131;
          }
        }
      }
    }
  }
}
</style>
