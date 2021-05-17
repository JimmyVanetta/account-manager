<template>
    <div id="edit-btn">
        <button class="bg-green-500 hover:bg-green-600 text-gray-800 font-bold py-2 px-4 rounded-l" @click="this.verify">
            <i class="fa fa-check-square"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'VerifyBtn',

        props: [
            'id',
            'verify'
        ]
    }
</script>

<style scoped>

</style>