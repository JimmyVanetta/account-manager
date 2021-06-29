<template>
    <div id="accounts" class="flex mx-auto w-5/6">
        <AccountsTable :accounts="currentAccounts"></AccountsTable>
    </div>
</template>

<script>
    import AccountsTable from '../components/tables/AccountsTable'
    import { mapActions } from 'vuex'

    export default {
        name: "Accounts",
        
        components: {
            AccountsTable
        },
        data: () => {
            return {
            }
        },
        created () {
            // API Call
            this.$store.dispatch("accounts/getStoredAccounts")
            this.$store.dispatch("employees/getStoredEmployees")                
        },
        mounted () {
        },
        methods: {
            ...mapActions([
                'accounts/getStoredAccounts',
                'employees/getStoredEmployees'
            ]),
        },
        computed: {
            ...mapGetters({
                // Get accounts NOT soft deleted
                currentAccounts: "accounts/getCurrentAccounts"
                // Get verified accounts
                    // Pee Pee Poo Poo
                // Get soft deleted (isObsolete) accounts
                    // Pee Pee Poo Poo
            })
        }
    }
</script>

<style scoped>
</style>