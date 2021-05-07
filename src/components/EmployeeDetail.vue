<template>
    <div id="get-employee" class="m-auto">
        <div class="rounded bg-white shadow max-w-md mx-auto block mt-5 mb-5">
            <div v-for="(item, index) in this.eEmployee" :key="index" class="block mt-2">
                <label :for="index" class="font-bold">{{index}}</label>
                <p :id="index">{{item}}</p>
            </div>
            <div class="inline-flex mt-5 mb-5">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="remove" type="button">Delete</button>
                <router-link :to="{ name: 'EditEmployee', params: { employeeId: this.selectedEmployee.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
                    Edit
                </router-link>
                <button class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded-r" type="button" @click="goBack">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'EmployeeDetail',

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