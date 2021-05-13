<template>
    <div id="accounts" class="mx-3 mt-3 flex-no-wrap w-full">
        <div class="py-2 p-4 rounded-t flex items-center justify-between bg-green-500 shadow-md border-l border-r border-t border-black">
            <h1 class="text-white font-bold text-xl">Current Accounts</h1>
        </div>
        <div class="max-h-eighty overflow-y-auto">
            <table id="accounts-table" class="w-full bg-white shadow-md rounded border border-black">
                <TableHead></TableHead>
                <TableBody :accounts="this.accounts"></TableBody>
            </table>
        </div>
    </div>
</template>

<script>
    import TableHead from '../table-pieces/AcctTableHead'
    import TableBody from '../table-pieces/AcctTableBody'
    
    export default {
        name: "AccountsTable",

        props: ['accounts'],

        components: {
            TableHead,
            TableBody
        },
        created () {                
        },
    }
</script>

<style scoped>

</style>