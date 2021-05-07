<template>
    <div class="inline-flex mt-5 mb-5">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="remove" type="button">Delete</button>
        <router-link :to="{ name: 'EditAccount', params: { accountId: account.id } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
            Edit
        </router-link>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-r" @click="verify" type="button">Verify</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['account'],

        methods: {
            ...mapActions([
                'accounts/verifyAccount',
                'accounts/removeAccount'
            ]),
            verify() {
                this.$store.dispatch('accounts/verifyAccount', this.account)
                this.$router.back()
            },
            remove() {
                this.$store.dispatch('accounts/removeAccount', this.account)
                this.$router.back()
            }
        },       
    }
</script>

<style scoped>

</style>