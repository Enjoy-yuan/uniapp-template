<template>
  <div class="share-com">
    <van-collapse accordion :value="activeName" @change="activeChange">
      <van-collapse-item title="《小狗钱钱》" name="1">
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
      <van-collapse-item title="《穷爸爸富爸爸》" name="2">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
      <van-collapse-item title="《炒股的智慧》" name="3">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
      <van-collapse-item title="《海龟交易法则》" name="4">
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class ShareCom extends Vue {
  private activeName: String = ""; //响应式属性
  activeChange(e: any) {
    this.activeName = e.detail;
  }
}
</script>

<style lang="scss" scoped>
.share-com {
  .van-cell::after {
    left: 0 !important;
  }
}
</style>
