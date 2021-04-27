<template>
    <div id="current-accounts" class="">

        <p v-if="accounts.length > 0">Currently Displaying {{accounts.length}} Accounts</p>
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
                <tr v-for="(account, index) in accounts" :key="index">
                    <td class="border border-gray-400 px-4 py-2">{{account.name}}</td>
                    <td class="border border-gray-400 px-4 py-2">{{account.created}}</td>
                    <td class="border border-gray-400 px-4 py-2">{{isVerified}}</td>
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
    import {mapState} from 'vuex'
    export default {
        methods: {
            // edit(account) {
            //     this.$store.dispatch('editAccount', account)
            // },
            // verify(account) {
            //     this.$store.dispatch('verifyAccount', account)
            // },
            // remove(account) {
            //     this.$store.dispatch('removeAccount', account)
            // }
        },
        computed: {
            ...mapState({
                accounts: (state) => state.accounts
            }),
            isVerified: function (account) {
                return (account.verified ? 'Y' : 'N')
            },
        }
    }
</script>

<style scoped>
    .btn-group {
        float: right;
    }
</style>