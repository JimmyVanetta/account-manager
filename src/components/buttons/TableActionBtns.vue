<template>
    <div id="table-buttons" class="inline-flex text-sm">
        <router-link :to="{ name: 'Details', params: { accountId: accountId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
        <router-link :to="{ name: 'EditAccount', params: { accountId: accountId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" type="button">
            <i class="fa fa-edit"></i>
        </router-link>
        <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
            <i class="fa fa-trash"></i>
        </button>
    </div>
</template>

<script>
    export default {
        props: ['accountId']
    }
</script>

<style scoped>

</style>