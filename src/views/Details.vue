<template>
    <div id="details" class="m-auto inline">
        <AccountDetail :eAccount="this.eAccount" :account="this.selectedAccount" :accountId="this.accountId"></AccountDetail>
    </div>
</template>

<script>
import AccountDetail from '../components/forms/AccountDetail'
import { mapGetters } from 'vuex'

    export default {
        name: 'Details',
        
        props: ['accountId'],

        components: {
            AccountDetail
        },
        data: () => {
            return {
                selectedAccount: {},
                eAccount: {}
            }
        },
        created() {
            if (this.accountId) {
                let selectedAccount = this['accounts/getAccountById'](this.accountId)
                if (selectedAccount) {
                    this.selectedAccount = selectedAccount
                    this.eAccount = {
                        name: selectedAccount.name,
                        contact: selectedAccount.contact,
                        phone: selectedAccount.phone,
                        address: selectedAccount.address,
                        city: selectedAccount.city,
                        state: selectedAccount.state,
                        zip: selectedAccount.zip,
                        created: selectedAccount.created
                    }
                }
            }
        },
        mounted () {
        },
        methods:{
            // ...mapActions([
            //     'accounts/verifyAccount',
            //     'accounts/removeAccount'
            // ]),
            // removeAccount() {
            //     this.$store.dispatch('accounts/removeAccount', this.selectedAccount)
            //     this.$router.back()
            // },
            // verifyAccount() {
            //     this.$store.dispatch('accounts/verifyAccount', this.selectedAccount)
            //     this.$router.back()
            // },
        },
        computed: {
            ...mapGetters([
                'accounts/getAccountById'
            ]),
        }
    }
</script>

<style scoped>

</style>