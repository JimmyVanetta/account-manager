<template>
    <div id="accounts" class="flex mx-auto w-5/6">
        <AccountsTable></AccountsTable>
    </div>
</template>

<script>
    import AccountsTable from '../components/tables/AccountsTable'
    // import { mapActions } from 'vuex'

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
        }
    }
</script>

<style scoped>
</style>