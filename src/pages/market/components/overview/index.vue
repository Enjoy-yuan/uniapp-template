<template>
  <view class="content">
    <view class="market">
      市场概况
      <text>10221亿</text>
      <text>（预:14826亿）</text>
    </view>
    <view class="upDown">
      <view class="down-number">3046</view>
      <view class="process">
        <progress percent="60" active stroke-width="8" activeColor="#4CB54E" backgroundColor="#D0462B" border-radius="8" />
      </view>
      <view class="up-number">846</view>
    </view>
    <uni-ec-canvas class="uni-ec-canvas" :ec="ec" force-use-old-canvas="true"></uni-ec-canvas>
    <div class="homes">
      <view class="homes-line">
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text style="color: #58B549;">
            703家
          </text>
        </view>
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text>
            703家
          </text>
        </view>
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text style="color: #E73131;">
            703家
          </text>
        </view>
        <!-- 平局 187家 上涨 287家 -->
      </view>
      <view class="homes-line">
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text style="color: #58B549;">
            703家
          </text>
        </view>
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text>
            703家
          </text>
        </view>
        <view class="homes-item">
          <text>
            下跌
          </text>
          <text style="color: #E73131;">
            703家
          </text>
        </view>
      </view>
    </div>
  </view>
</template>

<script>
//  force-use-old-canvas="true"
import uniEcCanvas from '@/static/uni-ec-canvas/uni-ec-canvas'
export default {
  data() {
    return {
      ec: {
        option: ''
      },
      distribute: ''
    }
  },
  components: {
    uniEcCanvas
  },
  created() {
    this.initCharts()
    this.getData()
  },
  methods: {
    initCharts() {
      this.ec.option = {
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          axisTick: {
            show: false //不显示坐标轴刻度线
          },
          axisLine: {
            lineStyle: { color: '#999999' }
          },
          type: 'category',
          data: []
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [
          {
            data: [],
            type: 'bar',
            // 在上方显示数值
            label: {
              show: true,
              position: 'top'
            },
            barWidth: 16,
            itemStyle: {
              color: '#E73131'
              // barBorderRadius: [8, 8, 0, 0]
              // color: {
              //   type: 'linear',
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [
              //     {
              //       offset: 0,
              //       color: 'rgba(22,242,217,0.5)' // 0% 处的颜色
              //     },
              //     {
              //       offset: 1,
              //       color: 'rgba(254,33,30,0.5)' // 100% 处的颜色
              //     }
              //   ]
              // }
            }
          }
        ]
      }
    },
    async getData() {
      this.distribute = (await this.$api.getDistribute('20201023')).data
      // console.log(this.distribute)
      let xAxisData = []
      let seriesData = []
      this.distribute.pop()
      this.distribute.map((item) => {
        xAxisData.push(item.constValueDesc)
        seriesData.push(item.count)
      })

      this.updataChart(xAxisData, seriesData)
    },
    updataChart(xAxisData, seriesData) {
      this.ec.option.xAxis.data = xAxisData
      this.ec.option.series[0].data = seriesData
    }
  }
}
</script>

<style lang="scss" scoped>
.uni-ec-canvas {
  position: relative;
  height: 400rpx;
  display: block;
}
.content {
  margin: 30rpx;
  border-radius: 12rpx;
  background-color: #ffffff;
  // height: 500rpx;
  .market {
    padding: 20rpx;
    color: #131d55;
    font-size: 36rpx;
    text:first-child {
      font-size: 28rpx;
      color: #333333;
      margin-left: 10rpx;
    }
    text {
      font-size: 24rpx;
      color: #999999;
    }
  }
  .upDown {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36rpx;
    margin-bottom: -80rpx;
    .down-number {
      color: #1a982b;
    }
    .up-number {
      color: #e73131;
    }
    .process {
      width: 400rpx;
      margin: 20rpx;
    }
  }
  .homes {
    background-color: #f8f8f8;
    border-bottom-left-radius: 12rpx;
    border-bottom-right-radius: 12rpx;
    color: #666666;
    padding: 20rpx;
    margin-top: -30rpx;
    font-size: 24rpx;
    .homes-line {
      display: flex;
      justify-content: space-between;
      line-height: 30rpx;
      .homes-item {
        display: flex;
        justify-content: space-between;
        width: 150rpx;
      }
    }
  }
}
</style>
