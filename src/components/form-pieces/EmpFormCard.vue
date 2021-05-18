<template>
    <div class="bg-white shadow w-full mx-auto border border-black px-10 py-5">
        <div v-for="(item, index) in this.employee" :key="index" class="block m-auto">
            <FormText
                :item="item" 
                :index="index"
            ></FormText>
        </div>
        <FormBtns
            :accountId="this.accountId"
            :employeeId="this.employeeId"
        ></FormBtns>
    </div>
</template>

<script>
    import FormText from '../form-pieces/FormText'
    import FormBtns from '../buttongroups/EmpActionBtns'

    export default {
        name: 'EmpFormCard',
        
        props: [
            'employee',
            'accountId',
            'EmployeeId'
        ],

        components: {
            FormText,
            FormBtns
        }
    }
</script>

<style scoped>

</style>