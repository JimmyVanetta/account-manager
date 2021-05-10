<template>
    <div id="accounts" class="m-auto">
        <table id="accounts-table" class="table-auto border-collapse border-2 border-black m-auto shadow-lg">
            <thead>
                <tr class="text-xl">
                    <th class="border border-black px-4 py-2">Account</th>
                    <th class="border border-black px-4 py-2">Created</th>
                    <th class="border border-black px-4 py-2">Verified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account, index) in currentAccounts" :key="index" class="text-lg">
                    <td class="border border-black px-4 py-2">{{account.name}}</td>
                    <td class="border border-black px-4 py-2">{{account.created}}</td>
                    <td class="border border-black px-4 py-2">{{account.verified ? "Y" : "N" }}</td>
                    <td class="border border-black px-4 py-2">
                        <TableButtons v-bind:accountId="account.id"></TableButtons>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TableButtons from '../components/buttons/TableActionBtns'
    import { mapGetters } from 'vuex'

    export default {
        name: "Accounts",
    
        components: {
            TableButtons
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