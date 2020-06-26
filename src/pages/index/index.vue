<template>
  <view class="content">
    <view class="aaa">
      <view class="bbb">3453535</view>
    </view>
  </view>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      title: "Hello",
    };
  },
  methods: {},
});
</script>

<style lang="scss">
.aaa {
  .bbb {
    width: 500upx;
    height: 500upx;
    background: url("/static/logo.png") no-repeat;
    color: $uni-color-success;
  }
}
</style>
