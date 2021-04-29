<template>
    <div id="edit-account">
        <form class="w-full max-x-sm">
            <div v-for="(item, index) in this.eAccount" :key="index" class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                <label :for="index">{{index}}</label>
                    <input :id="index" :value="item" onfocus="this.value=''"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button" @click="edit">Submit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded" type="button" @click="cancel">Cancel</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    
    export default {
        name: 'EditAccount',

        data: () => {
            return {
                selectedAccount: {},
                eAccount: {}
            }
        },
        created () {
            if ('accountId' in this.$route.params) {
                let selectedAccount = this.getAccountById(this.$route.params.accountId)
                if (selectedAccount) {
                    this.selectedAccount = selectedAccount
                    this.eAccount = {
                        name: selectedAccount.name,
                        contact: selectedAccount.contact,
                        phone: selectedAccount.phone,
                        address: selectedAccount.address,
                        city: selectedAccount.city,
                        state: selectedAccount.state,
                        zip: selectedAccount.zip
                    }
                }
            }
        },
        mounted () {
        },
        methods: {
            ...mapActions([
                'editAccount'
            ]),
            edit() {
                let account = this.selectedAccount
                
                account.name = document.getElementById('name').value,
                account.contact = document.getElementById('contact').value,
                account.phone = document.getElementById('phone').value,
                account.address = document.getElementById('address').value,
                account.city = document.getElementById('city').value,
                account.state = document.getElementById('state').value,
                account.zip = document.getElementById('zip').value,
                
                this.$store.dispatch('editAccount', account)
                this.$router.back()
            },
            cancel() {
                this.$router.back()
            },
            rePop() {
                return null
            },
        },
        computed: {
            ...mapGetters([
                'getAccountById'
            ]),
        },
    }
</script>

<style scoped>

</style>