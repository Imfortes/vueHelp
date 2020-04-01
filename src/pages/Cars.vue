<template>
        <div>
            <header class="container header">
                <h1>Cars page</h1>
            </header>
            <main class="container main">
                <ul>
                    <router-link
                            tag="li"
                            v-for="car in 5"
                            :to="'/car/' + car"
                            :key="car"
                    >
                        <a>Car {{ car }}</a>
                    </router-link>
                </ul>
            </main>
        </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .header{
        margin-top: 70px;
    }
</style>