<template>
  <view class="content">
    <!-- <view class="header">程序猿理财师</view> -->
    <!-- <view class="type">
      <van-grid column-num="4" :border="false">
        <van-grid-item icon="/static/logo.png" text="基金" />
        <van-grid-item icon="/static/logo.png" text="股票" />
        <van-grid-item icon="/static/logo.png" text="可转债" />
        <van-grid-item icon="/static/logo.png" text="可转债" />
      </van-grid>
    </view>-->
    <view class="tab">
      <van-tabs sticky animated swipeable>
        <van-tab title="基金">
          <FundCom></FundCom>
        </van-tab>
        <van-tab title="股票">
          <ShareCom></ShareCom>
        </van-tab>
        <van-tab title="书籍">
          <BookCom></BookCom>
        </van-tab>
        <van-tab title="操作">
          <OperationCom></OperationCom>
        </van-tab>
      </van-tabs>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
import ShareCom from "../../components/ShareCom.vue";
import FundCom from "../../components/FundCom.vue";
import BookCom from "../../components/BookCom.vue";
import OperationCom from "../../components/OperationCom.vue";
@Component({
  components: {
    ShareCom,
    FundCom,
    BookCom,
    OperationCom,
  },
})
export default class Index extends Vue {
  @State("login") login!: String;
  private aaa: String = "333";
  created() {
    console.log(this.login);
  }
}
</script>
<style lang="scss" scoped>
.content {
  .tab {
    .tab-content {
      padding: 20rpx;
      font-size: 26rpx;
    }
  }
}
</style>
