<template>
    <div class="rounded bg-white shadow max-w-md mx-auto inline-block">
        <div v-for="(item, index) in this.eAccount" :key="index" class="block mt-2">
            <FormText 
                :item="item" 
                :index="index"
            >
            </FormText>
        </div>
        <AccountButtons 
            :accountId="this.account.id" 
            :remove="remove" 
            :verify="verify"
        >
        </AccountButtons>
    </div>
</template>

<script>
    import FormText from '../fields/FormText'
    import AccountButtons from '../buttongroups/AcctActionBtns'
    import { mapActions } from 'vuex'

    export default {
        name: "AccountDetail",

        props: [
            'account',
            'eAccount'
        ],
        components: {
            AccountButtons,
            FormText
        },
        methods: {
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
            remove() {
                this.$store.dispatch('accounts/removeAccount', this.account)
                this.$router.back()
            },
            verify() {
                this.$store.dispatch('accounts/verifyAccount', this.account)
                this.$router.back()
            }
        }
        
    }
</script>

<style scoped>

</style>