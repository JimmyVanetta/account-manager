<template>
    <div id="current-accounts" class="m-auto">
        <table id="accounts-table" class="table-auto border-collapse border-2 border-black m-auto shadow-lg">
            <thead>
                <tr class="text-xl">
                    <th class="border border-black px-4 py-2">Account</th>
                    <th class="border border-black px-4 py-2">Created</th>
                    <th class="border border-black px-4 py-2">Verified</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account, index) in currentAccounts" :key="index" class="text-lg">
                    <td class="border border-black px-4 py-2">{{account.name}}</td>
                    <td class="border border-black px-4 py-2">{{account.created}}</td>
                    <td class="border border-black px-4 py-2">{{account.verified ? "Y" : "N" }}</td>
                    <td class="border border-black px-4 py-2">
                        <!-- <div> -->
                            <!-- <router-link :to="{ name: 'GetAccount', params: { accountId: account.id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
                                Details
                            </router-link>
                            <router-link :to="{ name: 'EditAccount', params: { accountId: account.id} }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" type="button">
                                Edit
                            </router-link> -->
                            <ActionButtons v-bind:accountId="account.id"></ActionButtons>
                        <!-- </div> -->
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ActionButtons from '../components/buttons/TableActionBtns'
    import { mapGetters } from 'vuex'

    export default {
        name: "CurrentAccounts",
    
        components: {
            ActionButtons
        },
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