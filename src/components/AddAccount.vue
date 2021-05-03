<template>
    <div id="add-account" class="">
        <form class="w-full max-x-sm">
            <div v-for="(item, index) in account" :key="index" class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input :id="index"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        :placeholder="index"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-l" type="button" @click="add">Submit</button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-r" @click="cancel" type="button">Cancel</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

    export default {
        name: 'AddAccount',

        data: () => {
            return {
                account: {
                    name: null,
                    contact: null,
                    phone: null,
                    address: null,
                    city: null,
                    state: null,
                    zip: null,
                }
            }
        },
        methods: {
            ...mapActions([
                'accounts/addAccount'
            ]),
            add() {
                if (checkForEmpty() != true) {
                    let account = {
                        name: document.getElementById('name').value,
                        contact: document.getElementById('contact').value,
                        phone: document.getElementById('phone').value,
                        address: document.getElementById('address').value,
                        city: document.getElementById('city').value,
                        state: document.getElementById('state').value,
                        zip: document.getElementById('zip').value,
                        created: new Date(), 
                        verified: false,
                        isObsolete: false
                    }
                    this.account = account
                    this.$store.dispatch('accounts/addAccount', this.account)
                    this.$router.push({ name: 'CurrentAccounts' })
                }
            },
            cancel() {
                this.$router.back()
            }
        },
        computed: {
        }
    }
    function checkForEmpty() {
        var array = getFormValues()
        return array.includes("")
    }
    function getFormValues() {
        var nam = document.getElementById('name').value
        var con = document.getElementById('contact').value
        var pho = document.getElementById('phone').value
        var adr = document.getElementById('address').value
        var cit = document.getElementById('city').value
        var sta = document.getElementById('state').value
        var zip = document.getElementById('zip').value

        return [ nam, con, pho, adr, cit, sta, zip ]
    }
</script>

<style scoped>

</style>