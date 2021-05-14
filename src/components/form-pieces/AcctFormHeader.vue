<template>
    <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
        <h1 class="text-white font-bold text-xl">{{ name }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'AcctFormHeader',

        props: ['name']
    }
</script>

<style scoped>

</style>