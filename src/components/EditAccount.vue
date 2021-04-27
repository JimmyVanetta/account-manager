<template>
    <div id="edit-account">
        <form class="w-full max-x-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="name-input" v-model="selectedAccount" :placeholder="selectedAccount.name"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="contact-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="phone-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="address-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="city-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="state-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="zip-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button" @click="editAccount">Submit</button>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'EditAccount',

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
                    // populateForm(account)
                }
            }
        },
        methods: {
            ...mapActions([
                'editAccount'
            ]),
            edit(account) {
                this.$store.dispatch('editAccount', account)
            },
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
    // function populateForm(account) {
    //     document.getElementById("name-input").placeholder = account.name
    //     document.getElementById('contact-input').value = account.contact
    //     document.getElementById('phone-input').value = account.phone
    //     document.getElementById('address-input').value = account.address
    //     document.getElementById('city-input').value = account.city
    //     document.getElementById('state-input').value = account.state
    //     document.getElementById('zip-input').value = account.zip
    // }
</script>

<style scoped>

</style>