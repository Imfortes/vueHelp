<template>
    <div class="course">


        <h2>Form inputs</h2>
        <input type="text" v-model.lazy="name">

        <hr>

        <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>

        <hr>

        <label for="">
            <input type="checkbox" value="Instagram" v-model="social"> Instagram
        </label>
        <label for="">
            <input type="checkbox" value="Vk" v-model="social"> Vk
        </label>
        <label for="">
            <input type="checkbox" value="Facebook" v-model="social"> Facebook
        </label>

        <hr>

        <label for="">
            <input type="radio" value="Instagram" v-model="radioSocial"> Instagram
        </label>
        <label for="">
            <input type="radio" value="Vk" v-model="radioSocial"> Vk
        </label>
        <label for="">
            <input type="radio" value="Facebook" v-model="radioSocial"> Facebook
        </label>

        <hr>

        <select name="" id="sel" v-model="socialSelect">
            <option
                    v-for="(s, index) in socialList"
                    :key="index"

            >{{s}}
            </option>
        </select>

        <hr>

        <input type="text" v-model.number="age">

        <app-onoff v-model="switched"></app-onoff>

        <div>
            <h3 v-if="switched">Component is enabled</h3>
            <h3 v-else>Component is disabled</h3>
        </div>


        <hr>

        <ul>
            <li v-for="(s, index) in social" :key="index">{{s}}</li>
        </ul>

        <p>
            {{name}}
        </p>
        <p>{{textarea}}</p>

        <p>{{socialSelect}}</p>

        <p>{{age}}</p>

        <hr>
        <hr>
        <hr>

        <div class="container">
            <h2>Form Validation</h2>

            <form action="" class="pt-3" @submit.prevent="onSubmit">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                            type="email"
                            class="form-control"
                            :class="{'is-invalid' : $v.email.$error}"
                            id="email"
                            @blur="$v.email.$touch()"
                            v-model="email"
                    >
                    <div
                            class="invalid-feedback"
                            v-if="!$v.email.required"
                    >
                        Email field is required
                    </div>
                    <div
                            class="invalid-feedback"
                            v-if="!$v.email.email"
                    >
                        This field should be an email
                    </div>
                    <div
                            class="invalid-feedback"
                            v-if="!$v.email.uniqEmail"
                    >
                        Email is not unique / already exist
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                            type="password"
                            class="form-control"
                            :class="{'is-invalid' : $v.password.$error}"
                            id="password"
                            @blur="$v.password.$touch()"
                            v-model="password"
                    >
                    <div
                            class="invalid-feedback"
                            v-if="!$v.password.minLength"
                    >
                        Min length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length
                        }}
                    </div>

                </div>

                <div class="form-group">
                    <label for="confirm">Confirm password</label>
                    <input
                            type="password"
                            class="form-control"
                            :class="{'is-invalid' : $v.confirmPassword.$error}"
                            id="confirm"
                            @blur="$v.confirmPassword.$touch()"
                            v-model="confirmPassword"
                    >
                    <div
                            class="invalid-feedback"
                            v-if="!$v.confirmPassword.sameAs"
                    >
                        Password should match
                    </div>

                </div>

                <button
                        class="btn btn-success"
                        type="submit"
                        :disabled="$v.$invalid"
                >Submit
                </button>

                <pre>
                    {{ $v.email }}
                </pre>
            </form>


        </div>

        <hr>
        <hr>
        <hr>

    </div>
</template>

<script>
    import {email, minLength, required, sameAs} from 'vuelidate/lib/validators'
    import Onoff from '../components/Onoff'

    export default {
        data() {
            return {
                name: 'Initial State',
                textarea: 'I am initial text',
                social: ['Facebook'],
                radioSocial: 'Facebook',
                socialList: ['instagram', 'vk', 'facebook'],
                defaultSocial: 'vk',
                socialSelect: 'facebook',
                age: 30,
                switched: true,
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        methods: {
            onSubmit() {
                console.log('Email', this.email);
                console.log('Password', this.password);

                this.email = '';
                this.password = '';
                this.confirmPassword = '';
            }
        },
        components: {
            appOnoff: Onoff
        },
        watch: {
            age(value) {
                console.log(value)
            }
        },
        validations: {
            email: {
                required,
                email,
                uniqEmail: function (newEmail) {
                    if (newEmail === '') return true;
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const value = newEmail !== 'test@mail.ru';
                            resolve(value)
                        }, 1000)
                    })
                }
            },
            password: {
                minLength: minLength(6)
            },
            confirmPassword: {
                sameAs: sameAs((vue) => {
                    return vue.password
                })
            }
        }
    }
</script>

<style scoped>
    hr {
        width: 100%;
    }

    .course {
        margin-top: 70px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .course * {
        margin: 3px 0 3px 0;
    }

    textarea {
        height: 100px;
        width: 400px;
    }

    p {
        white-space: pre;
    }
</style>