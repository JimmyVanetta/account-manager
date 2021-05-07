<template>
    <div id="get-account" class="block">
        <div class="rounded bg-white shadow max-w-md mx-auto block mt-5 mb-5">
            <div v-for="(item, index) in this.eAccount" :key="index" class="block mt-2">
                <label :for="index" class="font-bold">{{index}}</label>
                <p :id="index">{{item}}</p>
            </div>
            <div class="inline-flex mt-5 mb-5">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="remove" type="button">Delete</button>
                <router-link :to="{ name: 'EditAccount', params: { accountId: this.selectedAccount.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
                    Edit
                </router-link>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-r" @click="verify" type="button">Verify</button>
            </div>
        </div>
        <div class="inline-flex mb-5">
            <router-link :to="{ name: 'AddEmployee', params: { accountId: this.selectedAccount.id } }" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-l" type="button">
                Add Employee
            </router-link>
            <router-link :to="{ name: 'CurrentEmployees', params: { accountId: this.selectedAccount.id } }" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-r" type="button">
                View Employees
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'GetAccount',
        
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
        methods: {
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
            verify() {
                this.$store.dispatch('accounts/verifyAccount', this.selectedAccount)
                this.$router.back()
            },
            remove() {
                this.$store.dispatch('accounts/removeAccount', this.selectedAccount)
                this.$router.back()
            }
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