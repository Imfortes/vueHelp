<template>
    <h2>Second Counter {{counter}}</h2>
</template>

<script>
    export default {
        computed: {
            counter(){
                // return this.$store.state.counter

                return this.$store.getters.computedCounter
            }
        }
    }
</script>

<style scoped>
    h2{
        margin-top: 30px;
    }
</style>