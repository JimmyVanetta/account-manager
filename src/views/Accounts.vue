<template>
    <div id="accounts" class="flex mx-auto w-5/6">
        <AccountsTable></AccountsTable>
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
        }
    }
</script>

<style scoped>
</style>