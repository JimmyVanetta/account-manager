<template>
  <div id="app">
    <img class="object-center" src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
   components: {
   }
}
</script>

<style>
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 50px;
}

</style>
