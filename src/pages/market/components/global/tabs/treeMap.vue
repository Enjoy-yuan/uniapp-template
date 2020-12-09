<template>
  <view>
    <uni-ec-canvas class="uni-ec-canvas" :ec="ec"></uni-ec-canvas>
  </view>
</template>

<script>
//  force-use-old-canvas="true"
import uniEcCanvas from '@/static/uni-ec-canvas/uni-ec-canvas'
export default {
  components: {
    uniEcCanvas
  },
  props: ['echartsData'],
  data() {
    return {
      ec: {
        option: {
          tooltip: {
            show: true
          },
          series: [
            {
              name: '概念',
              type: 'treemap',
              breadcrumb: false,
              roam: false,
              nodeClick: false,
              width: '100%',
              itemStyle: {
                normal: {
                  borderWidth: 1
                }
              },
              data: [],
              color: ['#FFA54F']
            }
          ]
        }
      }
    }
  },
  watch: {
    echartsData(newData) {
      const optionData = []
      newData.map((item, index) => {
        const obj = {
          name: item.conceptName,
          value: item.count
        }
        if (item.conceptName) {
          obj.name = item.conceptName
        } else if (item.industryName) {
          obj.name = item.industryName
        } else if (item.areaName) {
          obj.name = item.areaName
        }
        optionData.push(obj)
      })
      this.ec.option.series[0].data = optionData
    }
  }
}
</script>

<style scoped>
.uni-ec-canvas {
  position: relative;
  width: 640rpx;
  height: 400rpx;
  display: block;
}
</style>
