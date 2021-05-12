<template>
    <div id="get-employee" class="m-auto">
        <div class="rounded bg-white shadow max-w-md mx-auto block mt-5 mb-5">
            <div v-for="(item, index) in this.eEmployee" :key="index" class="block mt-2">
                <label :for="index" class="font-bold">{{index}}</label>
                <p :id="index">{{item}}</p>
            </div>
            <EmployeeButtons></EmployeeButtons>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    import { EmployeeButtons } from '../buttongroups/EmpActionBtns'

    export default {
        name: 'EmployeeDetail',

        components: {
            EmployeeButtons
        },
        data: () => {
            return {
                selectedEmployee: {},
                eEmployee: {}
            }
        },
        created () {
            if ('employeeId' in this.$route.params) {
                let selectedEmployee = this['employees/getEmployeeById'](this.$route.params.employeeId)
                if (selectedEmployee) {
                    this.selectedEmployee = selectedEmployee
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
                } 
            }
        },
        mounted () {
        },
        methods: {
            ...mapActions([
                'employees/removeEmployee'
            ]),
            remove() {
                this.$store.dispatch('employees/removeEmployee', this.selectedEmployee)
                this.$router.back()
            },
            goBack () {
                this.$router.back()
            }
        },
        computed: {
            ...mapGetters([
                'employees/getEmployeeById'
            ]),
        }
    }
</script>

<style scoped>

</style>