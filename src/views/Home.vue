<template>
  <div class="home">
    <game></game>
    <!--
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import game from '@/components/game'

  export default {
    name: 'Home',
    components: {
      game,
      // HelloWorld
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    display flex
    justify-content center
</style>
