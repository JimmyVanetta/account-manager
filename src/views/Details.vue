<template>
    <div id="details" class="flex mx-auto">
        <AccountDetail :account="this.eAccount" :accountId="this.accountId"></AccountDetail>
        <EmployeesTable :accountId="accountId"></EmployeesTable>
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
            }
        },
        created() {
            let selectedAccount = this.getAccountById
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
        },
        mounted () {
        },
        methods:{
        },
        computed: {
            ...mapGetters([
                'accounts/getAccountById'
            ]),
            getAccountById() {
                return this['accounts/getAccountById'](this.accountId)
            }
        }
    }
</script>

<style scoped>

</style>