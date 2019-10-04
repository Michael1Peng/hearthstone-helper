<template>
  <div id="app">
    <Checkerboard/>
  </div>
</template>

<script>
  import Checkerboard from './components/Checkerboard'

  export default {
    name: 'app',
    components: {
      Checkerboard
    },
    mounted() {
      this.$store.dispatch('init')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }
</style>
