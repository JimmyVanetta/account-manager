<template>
    <div id="back-btn">
        <router-link :to="{ name: 'Details', params: { accountId: this.accountId } }" class="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 border border-black" type="button">
            back
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'BackBtn',

        props:['accountId']
    }
</script>

<style scoped>
</style>