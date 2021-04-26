<template>
  <div id="app">
    <Landing></Landing>
    <AddAccount></AddAccount>
    <CurrentAccounts></CurrentAccounts>
  </div>
</template>

<script>
import Landing from './components/Landing'
import AddAccount from './components/AddAccount'
import CurrentAccounts from './components/CurrentAccounts'

export default {
  name: 'App',
   components: {
    Landing,
    AddAccount,
    CurrentAccounts
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
