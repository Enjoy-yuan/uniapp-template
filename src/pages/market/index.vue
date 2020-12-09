<template>
  <view>
    <opening></opening>
    <scroll></scroll>
    <overview></overview>
    <global></global>
  </view>
</template>

<script>
import opening from './components/opening'
import scroll from './components/scroll'
import overview from './components/overview'
import global from './components/global'
export default {
  components: {
    opening,
    scroll,
    overview,
    global
  },
  data() {
    return {}
  },
  onLoad() {
    // this.$api.getStatus()
    // this.$api.getData()
  }
}
</script>

<style lang="scss" scoped></style>
