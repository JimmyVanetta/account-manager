<template>
    <div id="current-accounts" class="m-auto">
        <table id="accounts-table" class="table-auto border-collapse border-2 border-gray-500 m-auto">
            <thead>
                <tr>
                    <th class="border border-gray-400 px-4 py-2">Account</th>
                    <th class="border border-gray-400 px-4 py-2">Created</th>
                    <th class="border border-gray-400 px-4 py-2">Verified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account, index) in currentAccounts" :key="index">
                    <td class="border border-gray-400 px-4 py-2">{{account.name}}</td>
                    <td class="border border-gray-400 px-4 py-2">{{account.created}}</td>
                    <td class="border border-gray-400 px-4 py-2">{{account.verified ? "Y" : "N" }}</td>
                    <td class="border border-gray-400 px-4 py-2">
                        <div class="inline-flex">
                            <router-link :to="{ name: 'GetAccount', params: { accountId: account.id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
                                Details
                            </router-link>
                            <router-link :to="{ name: 'EditAccount', params: { accountId: account.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
                                Edit
                            </router-link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <button class="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 border border-black rounded" type="button" @click="goBack">Back</button>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "CurrentAccounts",
        
        data: () => {
            return {
            }
        },
        created () {                
        },
        mounted () {
        },
        methods: {
            goBack() {
                this.$router.back()
            }
        },
        computed: {
            ...mapGetters({
                currentAccounts: "accounts/getCurrentAccounts"
            })
        }
    }
</script>

<style scoped>
</style>