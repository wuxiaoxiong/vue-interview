<template>
  <div class="board">
    <div class="row">
      <square></square>
      <square></square>
      <square></square>
    </div>
    <div class="row">
      <square></square>
      <square></square>
      <square></square>
    </div>
    <div class="row">
      <square></square>
      <square></square>
      <square></square>
    </div>
  </div>
</template>

<script>
  import square from './square'

  export default {
    name: 'board',
    components: {
      square
    }
  }
</script>

<style scoped lang="stylus">
  .board
    width 120px
  .row
    display flex
    div
      flex 1
      height 40px
      border 1px solid gray

</style>
