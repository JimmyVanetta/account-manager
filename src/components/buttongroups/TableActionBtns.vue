<template>
    <div id="table-buttons" class="inline-flex text-sm shadow-sm">
        <router-link :to="{ name: 'Details', params: { accountId: id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="button">
            <i class="fa fa-info"></i>
        </router-link>
        <!-- <router-link :to="{ name: 'EditAccount', params: { accountId: id } }" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4" type="button">
            <i class="fa fa-edit"></i>
        </router-link> -->
        <EditBtn></EditBtn>
        <DeleteBtn
            :id="id"
            :remove="del"
        ></DeleteBtn>
    </div>
</template>

<script>
    import DeleteBtn from '../buttons/DeleteBtn'
    import EditBtn from '../buttons/EditBtn'
    // import VerifyBtn from '../buttons/VerifyBtn'

    export default {
        props: [
            'id',
            'remove',
        ],
        components: {
            DeleteBtn,
            EditBtn,
            // VerifyBtn
        },   
        methods: {
            del() {
                this.remove(this.id)
            }
        },
    } 
</script>

<style scoped>

</style>