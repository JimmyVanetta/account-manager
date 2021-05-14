<template>
    <div id="delete-btn">
        <button class="bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 rounded-l" @click="remove">
            <i class="fa fa-trash"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'DeleteBtn',

        props: [
            'id',
            'remove'
        ]
    }
</script>

<style scoped>

</style>