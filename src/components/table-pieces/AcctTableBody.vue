<template>
    <tbody>
        <tr v-for="(account, index) in this.accounts" :key="index" class="text-base">
            <td class="border border-black px-4 py-2 text-left">{{ account.name }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.contact }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.phone }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.address }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.city }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.state }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ account.zip }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ date(account.created) }}</td>
            <td class="border border-black px-4 py-2">{{ account.verified ? "Y" : "N" }}</td>
            <td class="border border-black px-4 py-2">
                <TableButtons 
                    :id="account.id"
                    :accountId="account.id"
                    :type="'account'" 
                    :remove="remove"
                    :verify="verify"
                >
            </TableButtons>
            </td>
        </tr>
    </tbody>
</template>

<script>
    import TableButtons from '../buttongroups/TableActionBtns'
    import { formatDate } from '../../utils/utils'
    // import { mapActions } from 'vuex'

    export default {
        name: 'AcctTableBody',

        props: ['accounts'],

        components: {
            TableButtons
        },
        mounted () {
        },
        methods:{
            remove(accountId) {
                this.$store.dispatch('accounts/removeAccount', accountId)
            },
            verify(accountId) {
                this.$store.dispatch('accounts/verifyAccount', accountId)
            },
            date(dateIn) {
                return formatDate(dateIn) 
            }
        }
    }
</script>

<style scoped>
    td {
        white-space: nowrap;
    }
</style>