<template>
  <div id="app" class="">
    <img class="" src="./assets/logo.png" />
    <ul class="flex content-center">
      <li class="mr-6">
        <router-link :to="{ name: 'Landing' }" class="text-blue-500 hover:text-blue-800">Home</router-link>
      </li>
      <li class="mr-6">
        <router-link :to="{ name: 'AddAccount' }" class="text-blue-500 hover:text-blue-800">Add Accounts</router-link>
      </li>
      <li class="mr-6">
        <router-link :to="{ name: 'CurrentAccounts' }" class="text-blue-500 hover:text-blue-800">View Accounts</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'App',

    data: () => {
    },
    mounted () {
    },
    async created() {
      this.$store.dispatch("accounts/getAccounts")
      this.$store.dispatch("employees/getEmployees")
    },
    methods: {
      ...mapActions([
        'accounts/getAccounts',
        'employees/getEmployees'
      ]),
    },
    computed: {
      ...mapGetters([
      ]),
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
