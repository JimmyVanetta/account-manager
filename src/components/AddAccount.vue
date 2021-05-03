<template>
    <div id="add-account" class="">
        <form class="w-full max-x-sm">
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="name-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Name"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="contact-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Contact"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="phone-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Phone"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="address-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Address"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="city-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="City"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="state-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="State"
                    >
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <input id="zip-input" 
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Zip"
                    >
                </div>
            </div>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-l" type="button" @click="add">Submit</button>
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
                account: {}
            }
        },
        methods: {
            ...mapActions([
                'addAccount'
            ]),
            add() {
                if (checkForEmpty() != true) {
                    let account = {
                        name: document.getElementById('name-input').value,
                        contact: document.getElementById('contact-input').value,
                        phone: document.getElementById('phone-input').value,
                        address: document.getElementById('address-input').value,
                        city: document.getElementById('city-input').value,
                        state: document.getElementById('state-input').value,
                        zip: document.getElementById('zip-input').value,
                        created: new Date(), 
                        verified: false,
                        isObsolete: false
                    }
                    this.account = account
                    this.$store.dispatch('accountStore/addAccount', account)
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
        var nam = document.getElementById("name-input").value
        var con = document.getElementById('contact-input').value
        var pho = document.getElementById('phone-input').value
        var adr = document.getElementById('address-input').value
        var cit = document.getElementById('city-input').value
        var sta = document.getElementById('state-input').value
        var zip = document.getElementById('zip-input').value

        return [ nam, con, pho, adr, cit, sta, zip ]
    }
</script>

<style scoped>

</style>