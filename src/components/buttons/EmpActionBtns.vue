<template>
    <div class="inline-flex mb-5">
        <router-link :to="{ name: 'AddEmployee', params: { accountId: accountId } }" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-l" type="button">
            Add Employee
        </router-link>
        <router-link :to="{ name: 'CurrentEmployees', params: { accountId: accountId } }" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-r" type="button">
            View Employees
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