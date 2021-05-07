<template>
    <div id="details" class="m-auto inline">
        <div class="rounded bg-white shadow max-w-md mx-auto block mt-5 mb-5">
            <div v-for="(item, index) in this.eAccount" :key="index" class="block mt-2">
                <label :for="index" class="font-bold">{{index}}</label>
                <p :id="index">{{item}}</p>
            </div>
            <AccountButtons v-bind:account="this.selectedAccount"></AccountButtons>
        </div>
        <!-- <EmployeeButtons v-bind:accountId="this.selectedAccount.id"></EmployeeButtons> -->
    </div>
</template>

<script>
import AccountButtons from '../components/buttons/AcctActionBtns'
// import EmployeeButtons from '../components/buttons/EmpActionBtns'
import { mapGetters } from 'vuex'

    export default {
        name: 'Details',
        
        components: {
            AccountButtons,
            // EmployeeButtons
        },
        data: () => {
            return {
                selectedAccount: {},
                eAccount: {}
            }
        },
        created() {
            if ('accountId' in this.$route.params) {
                let selectedAccount = this['accounts/getAccountById'](this.$route.params.accountId)
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