<template>
    <div id="emp-buttons" class="inline-flex mt-2 shadow-sm">
        <BackBtn
            :id="this.employeeId"
        ></BackBtn>
        <!-- <router-link :to="{ name: 'EditEmployee', params: { employeeId: this.employee.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
            Edit
        </router-link> -->
        <EditBtn></EditBtn>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-r" @click="this.remove" type="button">Delete</button>
        <!-- <button class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded-r" type="button" @click="this.goBack">Back</button> -->
        <!-- <DeleteBtn></DeleteBtn> -->
    </div>
</template>

<script>
    // import DeleteBtn from '../buttons/DeleteBtn'
    import EditBtn from '../buttons/EditBtn'
    import BackBtn from '../buttons/BackBtn'

    export default {
        props: [
            'employeeId',
            'remove'
        ],
        components: {
            // DeleteBtn,
            EditBtn,
            BackBtn
        },
        methods: {
            // goBack () {
            //     this.$router.back()
            // }
        } 
    }
</script>

<style scoped>

</style>