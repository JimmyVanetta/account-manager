<template>
    <div id="acct-buttons" class="inline-flex mt-5 mb-5">
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-black rounded-l" @click="this.remove" type="button">Delete</button>
        <router-link :to="{ name: 'EditAccount', params: { accountId: this.accountId } }" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-black" type="button">
            Edit
        </router-link>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-black rounded-r" @click="this.verify" type="button">Verify</button>
        <!-- <DeleteBtn></DeleteBtn> -->
        <!-- <EditBtn></EditBtn> -->
        <!-- <VerifyBtn></VerifyBtn> -->
    </div>
</template>

<script>
    // import DeleteBtn from '../buttons/DeleteBtn'
    // import EditBtn from '../buttons/EditBtn'
    // import VerifyBtn from '../buttons/VerifyBtn'

    export default {
        props: [
            'accountId',
            'remove', 
            'verify'
        ],
        components: {
            // DeleteBtn,
            // EditBtn,
            // VerifyBtn
        }    
    }
</script>

<style scoped>

</style>