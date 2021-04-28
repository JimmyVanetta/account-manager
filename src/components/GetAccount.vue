<template>
    <div id="get-account">
        <p v-for="item in selectedAccount" :key="item">
            {{item}}
        </p>
        <div class="inline-flex">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button">Verify</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" type="button">Delete</button>
            <router-link :to="{ name: 'EditAccount', params: { accountId: this.selectedAccount.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-700 rounded" type="button">
                Edit
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'GetAccount',
        
        data: () => {
            return {
                selectedAccount: {},
            }
        },
        mounted () {
            if ('accountId' in this.$route.params) {
                let selectedAccount = this.getAccountById(this.$route.params.accountId)
                if (selectedAccount) {
                    this.selectedAccount = selectedAccount
                    delete selectedAccount.id
                }
            }
        },
        methods: {
            ...mapActions([
                'verifyAccount',
                'removeAccount'
            ]),
        },
        computed: {
            ...mapState({
                accounts: (state) => state.accounts
            }),
            ...mapGetters([
                'getAccountById'
            ]),
        }
    }
</script>

<style scoped>

</style>