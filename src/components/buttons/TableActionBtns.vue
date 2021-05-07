<template>
    <div id="table-buttons" class="inline-flex text-sm">
        <router-link :to="{ name: 'GetAccount', params: { accountId: accountId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            Details
        </router-link>
        <router-link :to="{ name: 'EditAccount', params: { accountId: accountId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
            Edit
        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['accountId']
    }
</script>

<style scoped>

</style>