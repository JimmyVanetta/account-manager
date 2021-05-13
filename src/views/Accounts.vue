<template>
    <div id="accounts" class="w-3/5 mx-auto">
        <AccountsTable ref="AccountsTable" :accounts="currentAccounts"></AccountsTable>
    </div>
</template>

<script>
    import AccountsTable from '../components/tables/AccountsTable'
    import { mapGetters } from 'vuex'

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
        },
        mounted () {
        },
        methods: {
        },
        computed: {
            ...mapGetters({
                currentAccounts: "accounts/getCurrentAccounts"
            })
        }
    }
</script>

<style scoped>
</style>