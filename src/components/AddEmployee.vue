<template>
    <div id="add-employee" class="">
        <form class="w-full max-x-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="name" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Name"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="age" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Age"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="phone" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Phone"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="address" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Address"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="city" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="City"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="state" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="State"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="zip" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Zip"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="add" type="button">Submit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-r" @click="cancel" type="button">Cancel</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        name: "AddEmployee",

        data: () => {
            return {
                employee: {}
            }
        },
        methods: {
            ...mapActions([
                'employees/addEmployee'
            ]),
            add() {
                let employee = {
                    name: document.getElementById('name').value,
                    age: document.getElementById('age').value,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    city: document.getElementById('city').value,
                    state: document.getElementById('state').value,
                    zip: document.getElementById('zip').value,
                    hireDate: new Date()
                }
                this.employee = employee
                this.$store.dispatch('employees/addEmployee', this.employee)
            },
            cancel() {
                this.$router.back()
            },
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>