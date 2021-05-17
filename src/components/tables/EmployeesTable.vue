<template>
    <div id="employees" class="mx-3 mt-3 flex-no-wrap w-full flex-col-2">
        <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
            <h1 class="text-white font-bold text-xl">Current Employees</h1>
        </div>
        <div class="max-h-eighty overflow-y-auto">
            <table id="employees-table" class="w-full bg-white shadow-md rounded border border-black">
                <TableHead></TableHead>
                <!-- <tbody>
                    <tr v-for="(employee, index) in this.employees" :key="index">
                        <td class="border border-black px-4 py-2">{{ employee.name }}</td>
                        <td class="border border-black px-4 py-2">{{ employee.phone }}</td>
                        <td class="border border-black px-4 py-2">{{ displayDate(employee.hireDate) }}</td>
                        <td class="border border-black px-4 py-2">
                            <div class="inline-flex">
                                <router-link :to="{ name: 'EmployeeDetail', params: { employeeId: employee.id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
                                    Details
                                </router-link>
                                <router-link :to="{ name: 'EditEmployee', params: { employeeId: employee.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
                                    Edit
                                </router-link>
                            </div>
                        </td>
                    </tr>
                </tbody> -->
                <TableBody
                    :employees="this.employees"
                ></TableBody>
            </table>
        </div>
    </div>
</template>

<script>
    import TableHead from '../table-pieces/EmpTableHead'
    import TableBody from '../table-pieces/EmpTableBody'

    export default {
        name: "EmployeesTable",

        props: ['employees'],

        components: {
            TableHead,
            TableBody
        },
        created () {                 
        },
        mounted () {
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style scoped>

</style>