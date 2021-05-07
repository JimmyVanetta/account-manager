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
                        <ActionButtons v-bind:accountId="account.id"></ActionButtons>
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