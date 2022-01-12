<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Visitors/>
  </div>
</template>

<script>
import Visitors from './components/Visitors.vue'

export default {
  name: 'App',
  components: {
    Visitors
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
