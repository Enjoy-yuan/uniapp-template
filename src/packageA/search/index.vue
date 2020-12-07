<template>
  <div>
    <van-search :value="searchValue" placeholder="请输入搜索关键词" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
