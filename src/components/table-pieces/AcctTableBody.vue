<template>
    <tbody>
        <tr v-for="(account, index) in this.accounts" :key="index" class="text-lg">
            <td class="border border-black px-4 py-2 text-left">{{ account.name }}</td>
            <td class="border border-black px-4 py-2 text-left">{{ date(account.created) }}</td>
            <td class="border border-black px-4 py-2">{{ account.verified ? "Y" : "N" }}</td>
            <td class="border border-black px-4 py-2">
                <TableButtons 
                    :id="account.id"
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
    import { mapActions } from 'vuex'

    export default {
        name: 'AcctTableBody',

        props: ['accounts'],

        components: {
            TableButtons
        },
        methods:{
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
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

</style>