<template>
    <div id="details-btn">
        <router-link v-if="type != 'employee'" :to="{ name: 'Details', params: { accountId: accountId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
        <router-link v-else :to="{ name: 'EmployeeDetail', params: { employeeId: employeeId } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'DetailsBtn',

        props: [
            'accountId',
            'employeeId',
            'type'
        ]
    }
</script>

<style scoped>

</style>