<template>
  <div id="app" class="bg-gray-200 h-screen">
    <div class="bg-white h-screen">
      <div class="flex h-full">
        <div class="bg-gray-200 w-full flex-row items-start justify-center">
          <!-- top flex row -->
          <div class="h-18 py-2 w-full whitespace-no-wrap leading-none bg-white shadow-md md:p-3 flex justify-between items-center">
            <img class="mx-5 w-24" src="./assets/logo.png" alt="V">
          </div>
          <!-- views render in this div -->
          <div class="flex" style="height: 91vh; overflow-y: auto">
            <!-- side flex column -->
            <div class="flex px-2 py-3 pb-4 w-48 bg-white shadow flex-col justify-between items-center h-full">
              <SideButtons></SideButtons>
            </div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideButtons from './components/buttongroups/SideNavBtns'
import { mapActions} from 'vuex'

  export default {
    name: 'App',

    components: {
      SideButtons
    },
    mounted () {
    },
    async created() {
      // API Call
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
}
</style>
