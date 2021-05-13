<template>
    <thead>
        <tr class="">
            <th colspan="4" class="border border-1 border-black bg-green-100 pl-2 text-left">
                <div class="flex justify-around">
                    <div class="w-40 pb-2 flex-1">
                        <span class="flex justify-between">Account Status:</span>
                        <select name="" id="" class="w-40 outline-black">
                            <option value="">Current</option>
                        </select>
                    </div>
                </div>
            </th>
        </tr>
        <tr class="bg-gray-100">
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Created</th>
            <th class="px-4 py-2">Verified</th>
            <th></th>
        </tr>
    </thead>
</template>

<script>
    export default {
        name: 'AcctTableHead',

        props: ['']
    }
</script>

<style scoped>

</style>