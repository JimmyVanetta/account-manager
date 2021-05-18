<template>
    <tbody>
        <tr v-for="(employee, index) in this.employees" :key="index">
            <td class="border border-black px-4 py-2">{{ employee.name }}</td>
            <td class="border border-black px-4 py-2">{{ employee.phone }}</td>
            <td class="border border-black px-4 py-2">{{ displayDate(employee.hireDate) }}</td>
            <td class="border border-black px-4 py-2">
                <TableButtons 
                    :id="employee.id"
                    :employeeId="employee.id"
                    :accountId="this.accountId"
                    :type="'employee'" 
                    :remove="remove"
                ></TableButtons>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import TableButtons from '../buttongroups/TableActionBtns'
    import { formatDate } from '../../utils/utils'
    import { mapActions } from 'vuex'

    export default {
        name: 'EmptTableBody',

        props: [
            'accountId',
            'employees'
        ],

        components: {
            TableButtons
        },
        methods: {
            ...mapActions([
                'employees/removeEmployee'
            ]),
            remove(employeeId) {
                this.$store.dispatch('employees/removeEmployee', employeeId)
            },
            displayDate(dateIn) {
                return formatDate(dateIn)
            }
        }
    }
</script>

<style scoped>

</style>