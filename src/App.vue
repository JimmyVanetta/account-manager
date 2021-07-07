<template>
  <div id="app" class="bg-gray-200 h-screen">
    <LoadingSpinner/>
    <div class="bg-white h-screen">
      <div class="flex h-full">
        <div id="bg-img" class="bg-gray-200 w-full flex-row items-start justify-center">
          <!-- top flex row -->
          <div class="h-18 py-2 w-full whitespace-no-wrap leading-none bg-green-200 shadow-md md:p-3 justify-between flex items-center">
            <img id="header-img" class="mx-5 w-24" src="./assets/smugpepe.png" alt="V">
            <h1 class="text-black font-bold text-5xl m-auto">Account Manager</h1>
          </div>
          <!-- views render in this div -->
          <div class="flex w-max" style="height: 91vh; overflow-y: auto">
            <!-- side flex column -->
            <div class="flex px-2 py-3 pb-4 w-48 bg-green-100 shadow flex-col justify-between items-center h-full border-t">
              <SideButtons></SideButtons>
              <!-- <button @click="() => { isVisible = !isVisible }" style="z-index: 9000;">Show Spin</button> -->
            </div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadingSpinner from './components/LoadingSpinner.vue'
import SideButtons from './components/buttongroups/SideNavBtns'
import { mapActions } from 'vuex'

  export default {
    name: 'App',

    components: {
      SideButtons,
      LoadingSpinner
    },
    async created() {
      // TURN ON LOADING SPINNER
        this.$store.dispatch("spinner/showModal")
      // API Call
      this.$store.dispatch("accounts/getStoredAccounts")
      this.$store.dispatch("employees/getStoredEmployees")                
    },
    mounted() {
      // TURN OFF LOADING SPINNER
        // PEE PEE POO POO
    },
    methods: {
      ...mapActions([
        'accounts/getStoredAccounts',
        'employees/getStoredEmployees'
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
}
#bg-img {
  background-image: url("https://trackerbrbdevtest.azurewebsites.net/assets/img/bg-main-25.f362dce4.png");
  background-repeat: no-repeat;
}
#header-img:hover {
  transform: rotate(20deg);
}
</style>
