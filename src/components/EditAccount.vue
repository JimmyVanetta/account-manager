<template>
    <div id="edit-account">
        <input id="name-input" 
            class=""
            placeholder="Name"
        >
        <input id="address-input" 
            class=""
            placeholder="Contact"
        >
        <input id="phone-input"
            class=""
            placeholder="Phone"
        >
        <input id="address-input" 
            class=""
            placeholder="Address"
        >
        <input id="city-input" 
            class=""
            placeholder="City"
        >
        <input id="state-input"
            class=""
            placeholder="State"
        >
        <input id="zip-input"
            class=""
            placeholder="Zip"
        >
        <button class="">Submit</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'EditAccount',

        data: () => {
            return {
                selectedAccount: {},
            }
        },
        mounted () {
            if ('accountId' in this.$route.params) {
                let selectedAccount = this.getAccountById(this.$route.params.accountId)
                if (selectedAccount) {
                    this.selectedAccount = selectedAccount
                }
            }
        },
        methods: {
            ...mapActions([
                'editAccount'
            ]),
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