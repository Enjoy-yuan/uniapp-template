<template>
  <view>
    <uni-ec-canvas class="uni-ec-canvas" :ec="ec" force-use-old-canvas="true"></uni-ec-canvas>
  </view>
</template>

<script>
//  force-use-old-canvas="true"
import uniEcCanvas from './uni-ec-canvas/uni-ec-canvas'
export default {
  data() {
    return {
      ec: {
        option: {
          tooltip: {
            formatter: function(info) {
              return `${info.name}`
            }
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
  components: {
    uniEcCanvas
  },
  created() {
    const optionData = []
    this.echartsData = [
      {
        change: 0.058,
        changeStock: 12.9,
        close: 86.7608,
        conceptCode: 'gn_kc50',
        conceptName: '科创50',
        count: 50,
        id: 1,
        leadStock: '传音控股',
        mprice: 86.7608,
        pchangeRange: '0.066895186775975',
        pchangeStock: 12.181,
        sumAmount: 6674239163,
        sumVolumn: 102704112,
        tradeDate: '2020-10-29 00:00:00'
      },
      {
        change: -0.1994,
        changeStock: 0.83,
        close: 23.2967,
        conceptCode: 'gn_gfgn',
        conceptName: '光伏概念',
        count: 100,
        id: 2,
        leadStock: '旗滨集团',
        mprice: 23.2967,
        pchangeRange: '-0.84865147833045',
        pchangeStock: 10.012,
        sumAmount: 30746946520,
        sumVolumn: 1905480049,
        tradeDate: '2020-10-29 00:00:00'
      }
    ]
    this.echartsData.map((item, index) => {
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
</script>

<style scoped>
.uni-ec-canvas {
  position: relative;
  height: 400rpx;
  display: block;
}
</style>
