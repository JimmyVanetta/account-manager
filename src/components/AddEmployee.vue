<template>
    <div id="add-employee" class="">
        <form class="w-full max-x-sm">
            <div v-for="(item, index) in employee" :key="index" class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input :id="index"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        :placeholder="index"
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
                employee: {
                    name: null,
                    age: null,
                    phone: null, 
                    address: null,
                    city: null,
                    state: null,
                    zip: null
                }
            }
        },
        methods: {
            ...mapActions([
                'employees/addEmployee'
            ]),
            add() {
                let employee = {
                    accountId: this.$route.params.accountId,
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
                this.$router.back()
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