<template>
    <tbody>
        <tr v-for="(employee, index) in this.employees" :key="index">
            <td class="border border-black px-4 py-2">{{ employee.name }}</td>
            <td class="border border-black px-4 py-2">{{ employee.phone }}</td>
            <td class="border border-black px-4 py-2">{{ displayDate(employee.hireDate) }}</td>
            <td class="border border-black px-4 py-2">
                <!-- <div class="inline-flex">
                    <router-link :to="{ name: 'EmployeeDetail', params: { employeeId: employee.id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
                        Details
                    </router-link>
                    <router-link :to="{ name: 'EditEmployee', params: { employeeId: employee.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
                        Edit
                    </router-link>
                </div> -->
                <TableButtons 
                    :id="employee.id"
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

        props: ['employees'],

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