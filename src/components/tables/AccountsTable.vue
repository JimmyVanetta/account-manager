<template>
    <div id="accounts-table" class="mx-3 mt-3 flex-no-wrap w-full">
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
                <tr v-for="(account, index) in this.accounts" :key="index" class="text-lg">
                    <td class="border border-black px-4 py-2">{{account.name}}</td>
                    <td class="border border-black px-4 py-2">{{account.created}}</td>
                    <td class="border border-black px-4 py-2">{{account.verified ? "Y" : "N" }}</td>
                    <td class="border border-black px-4 py-2">
                        <TableButtons 
                            :account="account" 
                            :remove="remove"
                        >
                        </TableButtons>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import TableButtons from '../buttongroups/TableActionBtns'
    import { mapActions } from 'vuex'

    export default {
        name: "AccountsTable",

        props: ['accounts'],

        components: {
            TableButtons
        },
        created () {                

        },
        methods: {
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
            remove(account) {
                this.$store.dispatch('accounts/removeAccount', account)
            },
            verify(account) {
                this.$store.dispatch('accounts/verifyAccount', account)
            }
        },
    }
</script>

<style scoped>

</style>