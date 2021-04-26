<template>
    <div id="landing-page" class="">
        <h1 class="">Welcome to Account-Manager!</h1>
        <ul class="flex content-center">
            <li class="mr-6">
                <router-link :to="{ name: 'AddAccount' }" class="text-blue-500 hover:text-blue-800">Add Accounts</router-link>
            </li>
            <li class="mr-6">
                <router-link :to="{ name: 'CurrentAccounts' }" class="text-blue-500 hover:text-blue-800">View Accounts</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Landing',
        methods: {
        }
    } 
</script>

<style scoped>

</style>