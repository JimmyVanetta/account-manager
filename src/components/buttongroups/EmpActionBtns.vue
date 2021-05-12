<template>
    <div id="emp-buttons" class="inline-flex mt-5 mb-5">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="this.remove" type="button">Delete</button>
        <router-link :to="{ name: 'EditEmployee', params: { employeeId: this.employee.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
            Edit
        </router-link>
        <button class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded-r" type="button" @click="this.goBack">Back</button>
    </div>
</template>

<script>
    export default {
        props: [
            'accountId',
            'remove', 
            'goBack'
        ]
    }
</script>

<style scoped>

</style>