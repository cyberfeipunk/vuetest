<template>
</template>
<script>
export default{
  name:'hvue',
  porps:{
    level: {
      type: Number,
      required: true
    }
  },
  render: function (createElement) {
    return createElement(
      'h3' + this.level,   // 标签名称
      this.$slots.default // 子元素数组
    )
  },
}
</script>
