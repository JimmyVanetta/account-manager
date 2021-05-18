<template>
    <div id="accounts" class="flex mx-auto w-5/6">
        <AccountsTable :accounts="currentAccounts"></AccountsTable>
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