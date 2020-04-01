<template>
    <div class="app">

        <div class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <ul class="navbar-nav d-flex flex-row">
                <router-link tag="li" :to="'/'" class="nav-item" active-class="active" exact>
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link tag="li" :to="'/form'" class="nav-item">
                    <a class="nav-link">Form</a>
                </router-link>
                <router-link tag="li" :to="'/cars'" class="nav-item">
                    <a class="nav-link">Cars</a>
                </router-link>
                <router-link tag="li" :to="'/car/3'" class="nav-item">
                    <a class="nav-link">Car 3</a>
                </router-link>
                <router-link tag="li" :to="'/car/4'" class="nav-item">
                    <a class="nav-link">Car 4</a>
                </router-link>
                <router-link tag="li" :to="'/server'" class="nav-item">
                    <a class="nav-link">Server</a>
                </router-link>
                <router-link tag="li" :to="'/vuex'" class="nav-item">
                    <a class="nav-link">Vuex</a>
                </router-link>
            </ul>

        </div>

        <router-view></router-view>

        <div class="container mt-5 d-flex flex-column justify-content-center align-items-center">
            <app-counter></app-counter>
            <app-second-counter></app-second-counter>
            <hr>
            <app-actions></app-actions>

        </div>

        <hr>

        <div>
            <h1 class="text-center">{{title}}</h1>
        </div>

    </div>
</template>

<script>
    import Actions from '@/pages/Actions.vue'
    import Counter from '@/pages/Counter.vue'
    import SecondCounter from '@/pages/SecondCounter.vue'


    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            appCounter: Counter,
            appActions: Actions,
            appSecondCounter: SecondCounter
        },
        computed: {
            title(){
                return this.$store.getters.title
            }
        }
    }
</script>

<style scoped>

</style>
