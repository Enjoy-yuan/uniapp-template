<template>
  <view>
    <van-button type="primary">主要按钮</van-button>
    <view class="aaa">
      <view class="bbb">3453535</view>
    </view>
    <view class="van-multi-ellipsis--l2">
      这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略这是一段最多显示两行的文字，后面的内容会省略
    </view>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      bookingInfo: {},
    };
  },
  computed: {
    ...mapState(["login"]),
  },
  async mounted() {
    console.log(this.login);
    // this.bookingInfo = (
    //   await this.$api.getBookingInfo(
    //     {
    //       clnVisitId: 1116544549750001,
    //     },
    //     "POST"
    //   )
    // ).bookingInfo;
    // console.log(this.bookingInfo);
  },
};
</script>

<style lang="scss"></style>
