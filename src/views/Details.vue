<template>
    <div id="details" class="m-auto inline-block">
        <AccountDetail :eAccount="this.eAccount" :account="this.selectedAccount"></AccountDetail>
        <EmployeesTable :employees="this.currentEmployees"></EmployeesTable>
    </div>
</template>

<script>
import AccountDetail from '../components/forms/AccountDetail'
import EmployeesTable from '../components/tables/EmployeesTable'
import { mapGetters } from 'vuex'

    export default {
        name: 'Details',
        
        props: ['accountId'],

        components: {
            AccountDetail,
            EmployeesTable
        },
        data: () => {
            return {
                eAccount: {},
                selectedAccount: {},
                currentEmployees: []
            }
        },
        created() {
            if (this.accountId) {
                let selectedAccount = this['accounts/getAccountById'](this.accountId)
                if (selectedAccount) {
                    this.selectedAccount = selectedAccount
                    this.eAccount = {
                        name: selectedAccount.name,
                        contact: selectedAccount.contact,
                        phone: selectedAccount.phone,
                        address: selectedAccount.address,
                        city: selectedAccount.city,
                        state: selectedAccount.state,
                        zip: selectedAccount.zip,
                        created: selectedAccount.created
                    }
                }
                let currentEmployees = this['employees/getEmployeesByAccountId'](this.accountId)
                if (currentEmployees) {
                    this.currentEmployees = currentEmployees
                }
            }
        },
        mounted () {
        },
        methods:{
        },
        computed: {
            ...mapGetters([
                'accounts/getAccountById',
                'employees/getEmployeesByAccountId'
            ]),
        }
    }
</script>

<style scoped>

</style>