import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

var option = {
  series: [{
    type: 'treemap',
    data: [{
        name: 'nodeA',            // First tree
        value: 10,
        children: [{
            name: 'nodeAa',       // First leaf of first tree
            value: 4
        }, {
            name: 'nodeAb',       // Second leaf of first tree
            value: 6
        }]
    }, {
        name: 'nodeB',            // Second tree
        value: 10,
        children: [{
          name: 'nodeBa',       // First leaf of first tree
          value: 4
      }, {
          name: 'nodeBb',       // Second leaf of first tree
          value: 6
      }]
    }]
}]
};


  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});
