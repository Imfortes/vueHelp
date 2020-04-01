import VueRouter from 'vue-router'

import Form from '@/pages/Form'
import Home from '@/pages/Home'

import Car from '@/pages/Car'
import CarFull from '@/pages/CarFull'
import ErrorCmp from '@/pages/ErrorCmp'
import Server from '@/pages/Server'
import Vuex from '@/pages/Vuex'

const Cars = resolve => {
    require.ensure(['./pages/Cars.vue'], () => {
        resolve(
            require('./pages/Cars.vue')
        )
    })
};

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
        {
            path: '/cars',
            name: 'cars',
            component: Cars
        },
        {
            path: '/car/:id',
            name: 'car',
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter(next){
                        console.log('beforeEnter');

                        next(true)
                    }
                }
            ]
        },
        {
            path: '/server',
            name: 'server',
            component: Server
        },
        {
            path: '/vuex',
            name: 'vuex',
            component: Vuex
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        },
        {
            path: '*',
            component: ErrorCmp
        }
    ],
    mode: 'history',
    scrollBehavior(to, savedPosition){

        if (savedPosition){
            return savedPosition;
        }

        if (to.hash){
            return { selector: to.hash }
        }

        return {
            x: 0,
            y: 0
        }
    }
})