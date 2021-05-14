<template>
    <div id="details-btn">
        <router-link v-if="type != 'employee'" :to="{ name: 'Details', params: { accountId: id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
        <router-link v-else :to="{ name: 'EmployeeDetail', params: { employeeId: id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'DetailsBtn',

        props: [
            'id',
            'type'
        ]
    }
</script>

<style scoped>

</style>