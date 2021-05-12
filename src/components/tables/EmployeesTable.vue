<template>
    <div id="current-employees" class="inline-block m-auto">
        <table id="employees-table" class="table-auto border-collapse border-2 border-gray-500">
            <thead>
                <tr>
                    <th class="border border-black px-4 py-2">Name</th>
                    <th class="border border-black px-4 py-2">Phone</th>
                    <th class="border border-black px-4 py-2">Hire Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee, index) in this.currentEmployees" :key="index">
                    <td class="border border-black px-4 py-2">{{employee.name}}</td>
                    <td class="border border-black px-4 py-2">{{employee.phone}}</td>
                    <td class="border border-black px-4 py-2">{{employee.hireDate}}</td>
                    <td class="border border-black px-4 py-2">
                        <div class="inline-flex">
                            <router-link :to="{ name: 'GetEmployee', params: { employeeId: employee.id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
                                Details
                            </router-link>
                            <router-link :to="{ name: 'EditEmployee', params: { employeeId: employee.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
                                Edit
                            </router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        name: "EmployeesTable",
        
        data: () => {
            return {
                currentEmployees: []
            }
        },
        created () {
            if ('accountId' in this.$route.params) {
                let currentEmployees = this['employees/getCurrentEmployees'](this.$route.params.accountId)
                if (currentEmployees) {
                    this.currentEmployees = currentEmployees
                }
            }                    
        },
        mounted () {
        },
        methods: {
            goBack() {
                this.$router.back()
            }
        },
        computed: {
            ...mapGetters([
                'employees/getCurrentEmployees'
            ]),
        }
    }
</script>

<style scoped>

</style>