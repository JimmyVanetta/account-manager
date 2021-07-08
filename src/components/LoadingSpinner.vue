<template>
    <div v-if="isVisible" id="loading-div">
        <div class="spinner">
            <img class="rotate w-24" src="../assets/smugpepe.png" alt="V">
            <span class="loading-msg text-black font-bold text-xl">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoadingSpinner',

        props: {
            // message: {
            //     type: String,
            //     default: 'Loading...',
            //     required: false
            // },
            isVisible: {
                type: Boolean,
                // default: false,
                required: true
            },
        }
    }
</script>

<style>
    #loading-div {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100%;
        z-index: 9000;
    }
    .spinner {
        position: absolute;
        top: 40%;
        left: 48%;
    }
    .rotate {
        animation: rotation 2.5s infinite linear;
    }
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        } 
    }
</style>