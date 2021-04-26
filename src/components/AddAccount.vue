<template>
    <div id="get-account" class="">
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
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="button" @click="addAccount">Submit</button>
        </form>
    </div>
</template>

<script>
    export default {
        methods: {
            getAccount(e) {
                this.$store.dispatch('getAccount', e.target.value)
            },
            addAccount() {
                if (checkForEmpty() != "") {
                    let currentTime = new Date()
                    let account = {
                        name: document.getElementById('name-input').value,
                        contact: document.getElementById('contact-input').value,
                        phone: document.getElementById('phone-input').value,
                        address: document.getElementById('address-input').value,
                        city: document.getElementById('city-input').value,
                        state: document.getElementById('state-input').value,
                        zip: document.getElementById('zip-input').value,
                        created: currentTime, 
                        verified: false,
                        isObsolete: false
                    }
                    this.$store.dispatch('addAccount', account)
                    this.$store.dispatch('clearAccount')
                    clearField()
                }
            }
        },
        computed: {
            newAccount() {
                return this.$store.getters.newAccount
            }
        }
    }
    function checkForEmpty() {
        return document.getElementById("name-input").value
    }
    function clearField() {
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