<template>
    <header class="header container">
        <h1>Car id {{  id  }}</h1>

        <button class="btn btn-sm btn-primary" @click="goBackToCars">Back</button>

        <hr>

<!--        <router-link-->
<!--                class="btn btn-info"-->
<!--                tag="button"-->
<!--                :to="'/car/' + id + '/full'"-->
<!--        >-->
<!--            Full info-->
<!--        </router-link>-->

        <router-link
                class="btn btn-info"
                tag="button"
                :to="{
                    name: 'carFull',
                    params: {id: id},
                    query: {name: 'BMW', year: 2017},
                    hash: '#scroll'
                    }"
        >
            Full info
        </router-link>

        <hr>

        <router-view></router-view>

    </header>
</template>

<script>
    export default {
        data(){
            return{
                // id: this.$router.currentRoute.params['id']
                id: this.$route.params['id']
            }
        },
        watch: {
            $route(toRoute){
                this.id = toRoute.params['id']
            }
        },
        beforeRouteEnter(to, fromR, next){
            console.log('beforeRouterEnter');
            if (window.confirm('Are you sure you want to leave?')){
                next()
            } else {
                next(false)
            }
        },
        methods: {
            goBackToCars(){
                this.$router.push('/Cars')
            }
        }
    }
</script>

<style scoped>
    .header{
        margin-top: 70px;
    }
</style>