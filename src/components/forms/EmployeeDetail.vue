<template>
    <div id="get-employee" class="flex rounded bg-white shadow max-w-md mx-auto inline-block">
        <div v-for="(item, index) in this.eEmployee" :key="index" class="block mt-auto">
            <FormText 
                :item="item" 
                :index="index"
            >
            </FormText>
        </div>
        <EmployeeButtons></EmployeeButtons>
    </div>
</template>

<script>
    import EmployeeButtons from '../buttongroups/EmpActionBtns'
    import FormText from '../fields/FormText'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'EmployeeDetail',

        components: {
            EmployeeButtons,
            FormText
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