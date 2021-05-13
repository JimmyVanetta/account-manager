<template>
    <div id="employees" class="mx-3 mt-3 flex-no-wrap w-full flex-col">
        <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
            <h1 class="text-white font-bold text-xl">Current Employees</h1>
        </div>
        <div class="max-h-eighty overflow-y-auto">
            <table id="employees-table" class="w-full bg-white shadow-md rounded border border-black">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Phone</th>
                        <th class="px-4 py-2">Hire Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(employee, index) in this.currentEmployees" :key="index">
                        <td class="border border-black px-4 py-2">{{ employee.name }}</td>
                        <td class="border border-black px-4 py-2">{{ employee.phone }}</td>
                        <td class="border border-black px-4 py-2">{{ displayDate(employee.hireDate) }}</td>
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
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { formatDate } from '../../utils/utils'

    export default {
        name: "EmployeesTable",
        
        data: () => {
            return {
                currentEmployees: []
            }
        },
        created () {
            if ('accountId' in this.$route.params) {
                let currentEmployees = this['employees/getEmployeesByAccountId'](this.$route.params.accountId)
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
            },
            displayDate(dateIn) {
                return formatDate(dateIn)
            }
        },
        computed: {
            ...mapGetters([
                'employees/getEmployeesByAccountId'
            ]),
        }
    }
</script>

<style scoped>

</style>