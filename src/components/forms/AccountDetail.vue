<template>
    <div class="rounded bg-white shadow max-w-md mx-auto block mt-5 mb-5">
        <div v-for="(item, index) in this.eAccount" :key="index" class="block mt-2">
            <label :for="index" class="font-bold">{{index}}</label>
            <p :id="index">{{item}}</p>
        </div>
        <AccountButtons v-bind:account="this.account" :remove="remove" :verify="verify"></AccountButtons>
    </div>
</template>

<script>
    import AccountButtons from '../buttons/AcctActionBtns'
    import { mapActions } from 'vuex'

    export default {
        name: "AccountDetail",

        props: [
            'account',
            'eAccount'
        ],
        components: {
            AccountButtons
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