<template>
  <div class="square" @click="setContent">
    {{content}}
  </div>
</template>

<script>
  export default {
    name: "square",
    data() {
      return {
        content: '',
      }
    },
    methods: {
      setContent() {
        this.content = 'X';
      },
    }
  }
</script>

<style scoped lang="stylus">
  .square
    cursor pointer
    display inline-flex
    justify-content center
    align-items center
</style>
