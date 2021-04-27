<template>
    <div id="edit-account">
        <form class="w-full max-x-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="name-input"
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
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button" @click="edit">Submit</button>
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
                    populateForm(selectedAccount)
                }
            }
        },
        methods: {
            ...mapActions([
                'editAccount'
            ]),
            edit() {
                let account = this.selectedAccount
                
                account.name = document.getElementById('name-input').value,
                account.contact = document.getElementById('contact-input').value,
                account.phone = document.getElementById('phone-input').value,
                account.address = document.getElementById('address-input').value,
                account.city = document.getElementById('city-input').value,
                account.state = document.getElementById('state-input').value,
                account.zip = document.getElementById('zip-input').value,
                
                this.$store.dispatch('editAccount', account)
                clearForm()
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
    function populateForm(account) {
        document.getElementById("name-input").placeholder = account.name
        document.getElementById('contact-input').placeholder = account.contact
        document.getElementById('phone-input').placeholder = account.phone
        document.getElementById('address-input').placeholder = account.address
        document.getElementById('city-input').placeholder = account.city
        document.getElementById('state-input').placeholder = account.state
        document.getElementById('zip-input').placeholder = account.zip
    }
        function clearForm() {
        document.getElementById("name-input").value = ""
        document.getElementById('contact-input').value = ""
        document.getElementById('phone-input').value = ""
        document.getElementById('address-input').value = ""
        document.getElementById('city-input').value = ""
        document.getElementById('state-input').value = ""
        document.getElementById('zip-input').value = ""
    }
</script>

<style scoped>

</style>