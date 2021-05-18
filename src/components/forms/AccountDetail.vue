<template>
    <div id="account-detail" class="flex-no-wrap w-2/5 mt-3 flex-col-2">
        <FormHeader
            :name="this.account.name"
        ></FormHeader>
        <FormCard
            :accountId="this.accountId"
            :account="account"
            :date="date"
            :remove="remove"
            :verify="verify"
        ></FormCard>
    </div>
</template>

<script>
    import FormHeader from '../form-pieces/FormHeader'
    import FormCard from '../form-pieces/AcctFormCard'
    import { formatDate } from '../../utils/utils'
    import { mapActions } from 'vuex'

    export default {
        name: "AccountDetail",

        props: [
            'accountId',
            'account'
        ],
        components: {
            FormHeader,
            FormCard
        },
        methods: {
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
            remove() {
                this.$store.dispatch('accounts/removeAccount', this.accountId)
                this.$router.back()
            },
            verify() {
                this.$store.dispatch('accounts/verifyAccount', this.accountId)
                this.$router.back()
            },
        },
        computed: {
            date() {
                return formatDate(this.account.created)
            }
        }
    }
</script>

<style scoped>

</style>