<template>
    <div id="get-account" class="rounded bg-white shadow max-w-md mx-auto">
        <div v-for="(item, index) in this.eAccount" :key="index">
            <label :for="index">{{index}}</label>
            <p :id="index">{{item}}</p>
        </div>
        <div class="inline-flex">
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="verify" type="button">Verify</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" @click="remove" type="button">Delete</button>
            <router-link :to="{ name: 'EditAccount', params: { accountId: this.selectedAccount.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" type="button">
                Edit
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
                'verifyAccount',
                'removeAccount'
            ]),
            verify() {
                this.$store.dispatch('verifyAccount', this.selectedAccount)
                this.$router.back()
            },
            remove() {
                this.$store.dispatch('removeAccount', this.selectedAccount)
                this.$router.back()
            }
        },
        computed: {
            ...mapGetters([
                'getAccountById'
            ]),
        }
    }
</script>

<style scoped>

</style>