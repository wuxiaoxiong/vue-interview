<template>
  <div>
    <div>Next Player: {{nextPlayer}}</div>
    <board></board>
  </div>
</template>

<script>
  import board from './board'

  export default {
    name: 'game',
    data() {
      return {
      }
    },
    components: {
      board,
    },
    computed: {
      nextPlayer() {
        return this.$store.state.nextPlayer
      },
    }
  }
</script>

<style scoped>

</style>
