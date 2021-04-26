<template>
    <div id="current-accounts" class="">
        <h3 v-if="accounts.length > 0">Currently Displaying {{accounts.length}} Accounts</h3>
        <ul id="accounts-list" class="">
            <li class="" v-for="(account, index) in accounts" :key="index">             
                <span class="">{{account.body}}</span>
                <span class="">{{account.created}}</span> 
                <span class="">{{account.verified}}</span>
                <div class="btn-group">
                    <button type="button" class="">Details</button>
                    <button type="button" class="" @click="edit(account)">Edit</button>
                    <button type="button" class="" @click="remove(account)">Remove</button>
                    <button type="button" class="" @click="verify(account)">Verify</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        methods: {
            edit(account) {
                this.$store.dispatch('editAccount', account)
            },
            verify(account) {
                this.$store.dispatch('verifyAccount', account)
            },
            remove(account) {
                this.$store.dispatch('removeAccount', account)
            }
        },
        computed: {
            ...mapState({
                accounts: (state) => state.accounts
            }) 
        }
    }
</script>

<style scoped>
    .btn-group {
        float: right;
    }
    ul {
        list-style-type: none;
        padding-left: 0;
    }
</style>