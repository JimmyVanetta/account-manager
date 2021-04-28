<template>
    <div id="current-accounts" class="">

        <p v-if="activeAccounts.length > 0">Currently Displaying {{activeAccounts.length}} Accounts</p>
        <table id="accounts-table" class="table-auto border-collapse border-2 border-gray-500">
            <thead>
                <tr>
                    <th class="border border-gray-400 px-4 py-2">Account</th>
                    <th class="border border-gray-400 px-4 py-2">Created</th>
                    <th class="border border-gray-400 px-4 py-2">Verified</th>
                    <th class="border border-gray-400 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(account, index) in activeAccounts" :key="index">
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
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'


    export default {
        methods: {
        },
        computed: {
            ...mapState({
                accounts: (state) => state.accounts
            }),
            ...mapGetters({
                activeAccounts: "getAllAccounts"
            }),
        }
    }
</script>

<style scoped>
</style>