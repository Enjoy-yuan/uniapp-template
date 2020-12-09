<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style>
@import '/wxcomponents/vant/common/index.wxss';
page {
  background-color: #131d55;
  color: #333333;
  font-size: 28rpx;
}
/* tabs下划线上移 */
.van-tabs__nav {
  height: 70rpx !important;
}

/* 宫格去掉padding */
.van-grid-item__content {
    padding: 0 !important;
}
</style>
