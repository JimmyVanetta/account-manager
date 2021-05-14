<template>
    <div id="acct-buttons" class="inline-flex mt-2 shadow-sm">
        <DeleteBtn 
            :remove="remove"
        ></DeleteBtn>
        <!--  -->
        <EditBtn></EditBtn>
        <!--  -->
        <VerifyBtn
            :verify="verify"
        ></VerifyBtn>
    </div>
</template>

<script>
    import DeleteBtn from '../buttons/DeleteBtn'
    import EditBtn from '../buttons/EditBtn'
    import VerifyBtn from '../buttons/VerifyBtn'

    export default {
        props: [
            'remove', 
            'verify'
        ],
        components: {
            DeleteBtn,
            EditBtn,
            VerifyBtn
        }    
    }
</script>

<style scoped>

</style>