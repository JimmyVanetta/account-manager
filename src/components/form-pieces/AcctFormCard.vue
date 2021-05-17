<template>
    <div class="bg-white shadow w-full mx-auto border border-black px-10 py-5">
        <div v-for="(item, index) in account" :key="index" class="block m-auto">
            <FormText
                :item="item" 
                :index="index"
                :date="date"
            ></FormText>
        </div>
        <AccountButtons 
            :accountId="this.accountId" 
            :remove="remove" 
            :verify="verify"
        ></AccountButtons>
    </div>
</template>

<script>
    import FormText from '../form-pieces/FormText'
    import AccountButtons from '../buttongroups/AcctActionBtns'

    export default {
        name: 'AccountCard',

        props: [
            'accountId',
            'account',
            'date',
            'remove',
            'verify'
        ],
        components: {
            FormText,
            AccountButtons
        }
    }
</script>

<style scoped>

</style>