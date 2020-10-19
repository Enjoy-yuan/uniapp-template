<template>
    <view class="content">
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
        <van-collapse :value="activeNames" @change="onChange">
            <van-collapse-item title="有赞微商城" name="1">
                提供多样店铺模板，快速搭建网上商城
            </van-collapse-item>
            <van-collapse-item title="有赞零售" name="2">
                网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
            </van-collapse-item>
            <van-collapse-item title="有赞美业" name="3">
                线上拓客，随时预约，贴心顺手的开单收银
            </van-collapse-item>
        </van-collapse>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello',
            activeNames: ['1']
        }
    },
    onLoad() {
        this.$api
            .getData({
                method: 'get_token'
            })
            .then((res) => {
                console.log(res)
                this.$api
                    .getData({
                        "method": "get_all_securities",
                        token: res,
                        code: 'stock',
                        date: '2019-01-15'
                    })
                    .then((res) => {
                        console.log(res)
                    })
            })
    },
    methods: {
        onChange(event) {
            console.log(event)
            this.activeNames = event.detail
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    .logo {
        height: 700rpx;
        width: 750rpx;
        background-color: $uni-color-primary;
    }
}
</style>
