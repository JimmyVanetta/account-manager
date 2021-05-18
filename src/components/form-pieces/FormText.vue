<template>
    <div v-if="this.index != 'name'" id="form-text">
        <div v-if="(this.index != 'created')">
            <label :for="this.index" class="font-bold">{{ this.index }}</label>
            <p :id="this.index">{{  this.item  }}</p>
        </div>
        <div v-else>
            <label :for="this.index" class="font-bold">{{ this.index }}</label>
            <p :id="this.index">{{ this.date }}</p>
        </div>    
    </div>
</template>

<script>
    export default {
        name: 'FormText',

        props: [
            'index',
            'item',
            'date'
        ]
    }
</script>

<style scoped>

</style>