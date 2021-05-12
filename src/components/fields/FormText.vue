<template>
    <div id="form-text">
        <label :for="this.index" class="font-bold">{{ this.index }}</label>
        <p :id="index">{{  this.item  }}</p>
    </div>
</template>

<script>
    export default {
        name: 'FormText',

        props: [
            'index',
            'item'
        ]
    }
</script>

<style scoped>

</style>