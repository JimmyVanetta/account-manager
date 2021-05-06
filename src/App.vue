<template>
  <div id="app" class="bg-gray-200 h-screen">
    <div class="bg-white h-screen">
      <div class="flex h-full">
        <div class="bg-gray-200 w-full flex-row items-start justify-center">
          <div class="h-18 py-2 w-full whitespace-no-wrap leading-none bg-white shadow-md md:p-3 flex justify-between items-center">
            <img class="w-48" src="./assets/logo.png" alt="A stupid PNG from the big stupid internet">
          </div>
          <div class="flex" style="height: 91vh; overflow-y: auto">
            <div class="flex px-2 py-3 pb-4 w-48 bg-white shadow flex-col justify-between items-center h-full">
              <div>
                <!-- buttons -->
                <router-link :to="{ name: 'CurrentAccounts' }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-black text-sm shadow mx-auto">
                  <i class="fa fa-info mx-1"></i><u>V</u>iew Accounts
                </router-link>
                <router-link :to="{ name: 'AddAccount' }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded border border-black text-sm shadow mx-auto">
                  <i class="fa fa-plus mx-1"></i><u>A</u>dd Account
                </router-link>
              </div>
              <ul class="flex justify-center my-4">
                <li class="inline m-auto">
                </li>
                  <li class="inline m-auto">
                </li>
              </ul>
            </div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'App',

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
.header-img {
  background: url('./assets/logo.png');
  background-repeat: no-repeat;
}

</style>
