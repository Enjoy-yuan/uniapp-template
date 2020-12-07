<template>
    <view class="qiun-columns">
        <view class="qiun-bg-white qiun-title-bar qiun-common-mt">
            <view class="qiun-title-dot-light">饼状图</view>
        </view>
        <view class="qiun-charts">
            <canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
        </view>
    </view>
</template>

<script>
import uCharts from './u-charts/u-charts.min.js'
var _self
var canvaPie = null

export default {
    data() {
        return {
            cWidth: '',
            cHeight: '',
            pixelRatio: 1,
            serverData: ''
        }
    },
    onLoad() {
        _self = this
        this.cWidth = uni.upx2px(750)
        this.cHeight = uni.upx2px(500)
        this.getServerData()
    },
    methods: {
        getServerData() {
            uni.request({
                url: 'https://www.ucharts.cn/data.json',
                data: {},
                success: function(res) {
                    console.log(res.data.data)
                    let Pie = { series: [] }
                    //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                    Pie.series = res.data.data.Pie.series
                    _self.showPie('canvasPie', Pie)
                },
                fail: () => {
                    _self.tips = '网络错误，小程序端请检查合法域名'
                }
            })
        },
        showPie(canvasId, chartData) {
            canvaPie = new uCharts({
                $this: _self,
                canvasId: canvasId,
                type: 'pie',
                fontSize: 11,
                legend: { show: true },
                background: '#FFFFFF',
                pixelRatio: _self.pixelRatio,
                series: chartData.series,
                animation: true,
                width: _self.cWidth * _self.pixelRatio,
                height: _self.cHeight * _self.pixelRatio,
                dataLabel: true,
                extra: {
                    pie: {
                        lableWidth: 15
                    }
                }
            })
        },
        touchPie(e) {
            canvaPie.showToolTip(e, {
                format: function(item) {
                    return item.name + ':' + item.data
                }
            })
        }
    }
}
</script>

<style>
page {
    background: #f2f2f2;
    width: 750upx;
    overflow-x: hidden;
}
.qiun-padding {
    padding: 2%;
    width: 96%;
}
.qiun-wrap {
    display: flex;
    flex-wrap: wrap;
}
.qiun-rows {
    display: flex;
    flex-direction: row !important;
}
.qiun-columns {
    display: flex;
    flex-direction: column !important;
}
.qiun-common-mt {
    margin-top: 10upx;
}
.qiun-bg-white {
    background: #ffffff;
}
.qiun-title-bar {
    width: 96%;
    padding: 10upx 2%;
    flex-wrap: nowrap;
}
.qiun-title-dot-light {
    border-left: 10upx solid #0ea391;
    padding-left: 10upx;
    font-size: 32upx;
    color: #000000;
}
.qiun-charts {
    width: 750upx;
    height: 500upx;
    background-color: #ffffff;
}
.charts {
    width: 750upx;
    height: 500upx;
    background-color: #ffffff;
}
</style>
