<template>
    <div id="account-detail" class="mx-3 mt-3 flex-no-wrap w-2/5 flex-col">
            <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
                <h1 class="text-white font-bold text-xl">{{ this.account.name }}</h1>
            </div>
        <div class="bg-white shadow w-full mx-auto border border-black">
            <div v-for="(item, index) in this.eAccount" :key="index" class="block mt-2 m-auto ">
                <FormText 
                    :item="item" 
                    :index="index"
                    :date="date"
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
    </div>
</template>

<script>
    import FormText from '../fields/FormText'
    import AccountButtons from '../buttongroups/AcctActionBtns'
    import { mapActions } from 'vuex'
    import { formatDate } from '../../utils/utils'

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