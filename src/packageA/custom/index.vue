<template>
  <div>
    <child fatherToChild="我是来自父组件的数据" @fn="fn"></child>
    {{ childToFather }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      childToFather: ''
    }
  },
  methods: {
    fn(e) {
      this.childToFather = e.detail.childToFather
      console.log(e.detail.childToFather)
    }
  }
}
</script>

<style lang="scss" scoped></style>
