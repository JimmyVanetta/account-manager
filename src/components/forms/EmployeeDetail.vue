<template>
    <div id="employee-detail" class="flex-no-wrap w-2/5 mt-3 mx-auto flex-col-1">
        <FormHeader
            :name="eEmployee.name"
        ></FormHeader>
        <FormCard
            :employeeId="this.employeeId"
            :employee="eEmployee"
            :remove="remove"
        ></FormCard>
    </div>
</template>

<script>
    import FormHeader from '../form-pieces/FormHeader'
    import FormCard from '../form-pieces/EmpFormCard' 
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'EmployeeDetail',

        props: [
            'employeeId'
        ],

        components: {
            FormHeader,
            FormCard
        },
        data: () => {
            return {
            }
        },
        created () {
            let selectedEmployee = this.getEmployeeById
            this.eEmployee = {
                name: selectedEmployee.name,
                age: selectedEmployee.age,
                phone: selectedEmployee.phone,
                address: selectedEmployee.address,
                city: selectedEmployee.city,
                state: selectedEmployee.state,
                zip: selectedEmployee.zip,
                hireDate: selectedEmployee.hireDate    
            } 
        },
        mounted () {
        },
        methods: {
            ...mapActions([
                'employees/removeEmployee'
            ]),
            remove() {
                this.$store.dispatch('employees/removeEmployee', this.employeeId)
                this.$router.back()
            }
        },
        computed: {
            ...mapGetters([
                'employees/getEmployeeById'
            ]),
            getEmployeeById() {
                return this['employees/getEmployeeById'](this.employeeId)
            }
        }
    }
</script>

<style scoped>

</style>