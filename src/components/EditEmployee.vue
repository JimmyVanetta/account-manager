<template>
    <div id="edit-employee">
        <form class="w-full max-x-sm">
            <div v-for="(item, index) in this.eEmployee" :key="index" class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label :for="index">{{index}}</label>
                    <input v-bind:id="index" :value="item" onfocus="this.value=''"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-l" type="button" @click="edit">Submit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black" type="button" @click="cancel">Cancel</button>
        </form>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'EditEmployee',

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
                        zip: selectedEmployee.zip
                    }
                } 
            }          
        },
        mounted () {
        },
        methods: {
            ...mapActions([
                'employees/editEmployee'
            ]),
            edit () {
                let employee = this.selectedEmployee

                employee.name = document.getElementById('name').value
                employee.age = document.getElementById('age').value
                employee.phone = document.getElementById('phone').value
                employee.address = document.getElementById('address').value
                employee.city = document.getElementById('city').value
                employee.state = document.getElementById('state').value
                employee.zip = document.getElementById('zip').value

                this.$store.dispatch('employees/editEmployee', employee)
                this.$router.back()
            },
            cancel() {
                this.$router.back()
            },
        },
        computed: {
            ...mapGetters([
                'employees/getEmployeeById'
            ])
        }
    }
</script>

<style scoped>

</style>