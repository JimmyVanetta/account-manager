<template>
    <div id="employees" class="mx-3 mt-3 flex-no-wrap w-full flex-col-2">
        <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
            <h1 class="text-white font-bold text-xl">Current Employees</h1>
        </div>
        <div class="max-h-eighty overflow-y-auto">
            <table id="employees-table" class="w-full bg-white shadow-md rounded border border-black">
                <TableHead></TableHead>
                <TableBody
                    :accountId="this.accountId"
                    :employees="getEmployees"
                ></TableBody>
            </table>
        </div>
    </div>
</template>

<script>
    import TableHead from '../table-pieces/EmpTableHead'
    import TableBody from '../table-pieces/EmpTableBody'
    import { mapGetters } from 'vuex'

    export default {
        name: "EmployeesTable",

        props: ['accountId'],

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
            ...mapGetters([
                'employees/getEmployeesByAccountId'
            ]),
            getEmployees() {
                return this['employees/getEmployeesByAccountId'](this.accountId)
            }
        }
    }
</script>

<style scoped>

</style>