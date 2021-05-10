<template>
    <div id="side-buttons">
        <button 
            class="bg-gray-300 hover:bg-gray-400 block py-1 text mt-1 text-dark-gray font-semibold px-2 rounded border border-black text-sm shadow mx-auto"
        >
            <i class="fa fa-plus mx-1"></i><u>A</u>dd Accounts
        </button>
        <router-link :to="{ name: 'CurrentAccounts' }" 
            class="bg-gray-300 hover:bg-gray-400 block py-1 text mt-1 text-dark-gray font-semibold px-2 rounded border border-black text-sm shadow mx-auto"
        >
            <i class="fa fa-info mx-1"></i><u>V</u>iew Accounts
        </router-link>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>