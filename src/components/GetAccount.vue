<template>
    <div id="get-account">
        <!-- <div v-for="(items in selectedAccount) in accounts" :key="">
            <p></p>
        </div> -->
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

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
                    //populateForm(selectedAccount)
                }
            }
        },
        methods: {

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